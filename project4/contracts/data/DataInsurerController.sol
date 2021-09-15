// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./DataContract.sol";
import "./base/BaseDataInsurerController.sol";
import "../shared/PayableContract.sol";
import "./DataOperationalContract.sol";

abstract contract DataInsurerController is
    PayableContract,
    DataOperationalContract,
    BaseDataInsurerController,
    DataContract
{
    // configurable parameters by contract owner
    uint256 private insurerFee = 10 ether;
    uint256
        private numberOfFullyQualifiedInsurersRequiredForMultiParityConsensus =
        4;

    enum InsurerState {
        UNREGISTERED, // 0
        REGISTERED, // 1
        FULLY_QUALIFIED // 2
    }

    struct InsurerProfile {
        InsurerState state;
        uint256 amountPaid;
        uint16 approversCtr;
        mapping(address => bool) approvers; // key approverInsurerAddress
    }

    uint256 fullyQualifiedInsurersCtr;
    mapping(address => InsurerProfile) private insurers;

    /**
     * API
     */

    event InsurerStateChanged(address insurerAddress, uint256 state);

    function setInsurerConfigParams(
        uint256 _insurerFee,
        uint256 _numberOfFullyQualifiedInsurersRequiredForMultiParityConsensus
    ) external override requireContractOwner {
        insurerFee = _insurerFee;
        numberOfFullyQualifiedInsurersRequiredForMultiParityConsensus = _numberOfFullyQualifiedInsurersRequiredForMultiParityConsensus;
    }

    function getInsurerFee() external view override returns (uint256) {
        return insurerFee;
    }

    function getNumberOfFullyQualifiedInsurersRequiredForMultiParityConsensus()
        external
        view
        override
        returns (uint256)
    {
        return numberOfFullyQualifiedInsurersRequiredForMultiParityConsensus;
    }

    function registerTheFirstInsurer(address insurerAddress)
        external
        override
        requireAuthorizedCaller
    {
        require(
            fullyQualifiedInsurersCtr == 0,
            "The first fully-qualified insurer can be registered only at contract setup phase"
        );
        require(
            insurers[insurerAddress].state == InsurerState.UNREGISTERED,
            "Insurer cannot be registered twice"
        );

        insurers[insurerAddress].state = InsurerState.REGISTERED;

        triggerInsurerStateChange(insurerAddress);
    }

    function registerInsurer(
        address approverInsurerAddress,
        address insurerAddress
    )
        external
        override
        requireIsOperational
        requireFullyQualifiedInsurer(approverInsurerAddress)
        requireAuthorizedCaller
    {
        require(
            insurers[insurerAddress].state == InsurerState.UNREGISTERED,
            "Insurer has been already registered"
        );
        require(
            insurers[insurerAddress].approvers[approverInsurerAddress] == false,
            "Insurer has been already approved for registration by this caller"
        );

        insurers[insurerAddress].approvers[approverInsurerAddress] = true;
        insurers[insurerAddress].approversCtr++;

        if (isInsurerApproved(insurerAddress)) {
            insurers[insurerAddress].state = InsurerState.REGISTERED;
            triggerInsurerStateChange(insurerAddress);
        }
    }

    function payInsurerFee(address insurerAddress)
        external
        payable
        override
        requireIsOperational
        requireAuthorizedCaller
    {
        require(
            insurers[insurerAddress].state == InsurerState.REGISTERED,
            "Insurer is not yet registered"
        );
        require(msg.value == insurerFee, "Invalid insurer's fee paid");

        insurers[insurerAddress].state = InsurerState.FULLY_QUALIFIED;
        insurers[insurerAddress].amountPaid = getInsurerPaidAmount();
        fullyQualifiedInsurersCtr++;

        triggerInsurerStateChange(insurerAddress);
    }

    /**
     * Modifiers and private methods
     */

    modifier requireFullyQualifiedInsurer(address approverInsurerAddress) {
        require(
            insurers[approverInsurerAddress].state ==
                InsurerState.FULLY_QUALIFIED,
            "Caller is not a fully qualified insurer"
        );
        _;
    }

    function getInsurerPaidAmount() private view returns (uint256) {
        if (msg.value >= insurerFee) {
            return insurerFee;
        }

        return msg.value;
    }

    function isInsurerApproved(address insurerAddress)
        private
        view
        returns (bool)
    {
        if (
            fullyQualifiedInsurersCtr <
            numberOfFullyQualifiedInsurersRequiredForMultiParityConsensus
        ) {
            return true;
        }

        return
            insurers[insurerAddress].approversCtr * 2 >=
            fullyQualifiedInsurersCtr;
    }

    function triggerInsurerStateChange(address insurerAddress) private {
        emit InsurerStateChanged(
            insurerAddress,
            uint256(insurers[insurerAddress].state)
        );
    }
}
