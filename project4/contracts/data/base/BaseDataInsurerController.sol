// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface BaseDataInsurerController {
    function setInsurerConfigParams(
        uint256 _insurerFee,
        uint256 _numberOfFullyQualifiedInsurersRequiredForMultiParityConsensus
    ) external;

    function getInsurerFee() external view returns (uint256);

    function getNumberOfFullyQualifiedInsurersRequiredForMultiParityConsensus()
        external
        view
        returns (uint256);

    function registerTheFirstInsurer(address insurerAddress) external;

    function registerInsurer(
        address approverInsurerAddress,
        address insurerAddress
    ) external;

    function payInsurerFee(address insurerAddress) external payable;
}
