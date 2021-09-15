// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../../shared/BaseSuretyData.sol";

abstract contract BaseAppContract {

    BaseSuretyData internal suretyDataContract;

    /**
    * Modifiers and private methods
    */

    modifier requireIsOperational() {
        require(suretyDataContract.isContractOperational(), "Contract is currently not operational");
        _;
    }
}
