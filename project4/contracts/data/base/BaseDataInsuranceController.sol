// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface BaseDataInsuranceController {
    function setInsuranceConfigParams(
        uint256 _minInsurancePrice,
        uint256 _maxInsurancePrice
    ) external;

    function registerInsuredObject(bytes32 insuredObjectKey) external;

    function buyInsurance(address insureeAddress, bytes32 insuredObjectKey)
        external
        payable;

    function closeAllInsurances(bytes32 insuredObjectKey) external;

    function approveAllInsuranceCreditWithdraws(bytes32 insuredObjectKey)
        external;

    function withdrawInsuranceCredit(
        address insureeAddress,
        bytes32 insuredObjectKey
    ) external;
}
