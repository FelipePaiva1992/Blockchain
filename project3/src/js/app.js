const App = {
    version: "1.0.0",

    web3Provider: null,
    metamaskAccountId: null,
    contracts: {},

    contractOwnerID: "0x5038F8181ABF50D1Fb7A195F5Ba03FD9A1707128",
    originFarmerID: "0x40F17B68d5fe67323eC708cD4E868772f14070Aa",
    distributorID: "0xAc27bdbF03619901e682B15BF0F2b518981BDb3B",
    retailerID: "0xe5DAc0D1876F3C511dFE1123776cFc04316219ce",
    consumerID: "0x3DEF0489428BfC7683E89B9577d1f27Aa50E2E17",
    emptyAddress: "0x0000000000000000000000000000000000000000",
    hAccountLabel: {},

    sku: 6,
    upc: 6,

    originFarmName: "John Doe",
    originFarmInformation: "Yarra Valley",
    originFarmLatitude: "-38.239770",
    originFarmLongitude: "144.341490",

    productNotes: "Best beans for Espresso",
    productPrice: 1,

    init: function () {
        this.hAccountLabel[this.contractOwnerID.toUpperCase()] = this.formatAccountLabel("Contract-owner's account", this.contractOwnerID, "ASSIGN ROLES");
        this.hAccountLabel[this.emptyAddress.toUpperCase()] = this.formatAccountLabel("ERR! emptyAddress", this.emptyAddress, "NONE");
        this.hAccountLabel[this.originFarmerID.toUpperCase()] = this.formatAccountLabel("Farmer's account", this.originFarmerID, "HARVEST, PROCESS, PACK and FOR SALE");
        this.hAccountLabel[this.distributorID.toUpperCase()] = this.formatAccountLabel("Distributor's account", this.distributorID, "BUY and SHIP");
        this.hAccountLabel[this.retailerID.toUpperCase()] = this.formatAccountLabel("Retailer's account", this.retailerID, "RECEIVE");
        this.hAccountLabel[this.consumerID.toUpperCase()] = this.formatAccountLabel("Consumer's account", this.consumerID, "PURCHASE");

        this.initWeb3();
    },

    formatAccountLabel: function (accountName, accountId, opsAllowed) {
        if (!accountId) {
            accountId = this.emptyAddress;
        }

        return accountName + " <address: " + accountId + "> has these allowed ops: " + opsAllowed;
    },

    getAccountLabel: function (address) {
        if (!address) {
            address = this.emptyAddress;
        }

        let accountLabel = this.hAccountLabel[address.toUpperCase()];

        if (!accountLabel) {
            return this.formatAccountLabel("Unknown's account", address, "NONE");
        }

        return accountLabel;
    },

    initWeb3: function () {
        // Modern dapp browsers...
        if (!window.ethereum) {
            throw new Error("Please use a modern browser in order to use this dapp!");
        }

        App.web3Provider = window.ethereum;

        // Request account access
        window.ethereum.request({method: 'eth_requestAccounts'})
            .then((result) => {
                App.metamaskAccountId = result[0];
                window.web3 = new Web3(App.web3Provider);
                console.log("web3.version = " + window.web3.version.api);
                App.initContract();
            })
            .catch((error) => {
                console.error("User denied account access")
                throw error;
            });
    },

    initContract: function () {
        $.getJSON('build/contracts/SupplyChain.json', function (data) {
            // Get the necessary contract artifact file and instantiate it with truffle-contract.
            let SupplyChainArtifact = data;
            App.contracts.SupplyChain = TruffleContract(SupplyChainArtifact);
            // Set the provider for our contract.
            App.contracts.SupplyChain.setProvider(App.web3Provider);

            App.initForm();
        });
    },

    initForm: function () {
        this.updateCurrentMetamaskAccountLabelView();
        $("#sku").val(this.sku);
        $("#upc").val(this.upc);
        $("#contractOwnerID").val(this.contractOwnerID);
        $("#originFarmerID").val(this.originFarmerID);
        $("#originFarmName").val(this.originFarmName);
        $("#originFarmInformation").val(this.originFarmInformation);
        $("#originFarmLatitude").val(this.originFarmLatitude);
        $("#originFarmLongitude").val(this.originFarmLongitude);
        $("#productNotes").val(this.productNotes);
        $("#productPrice").val(this.productPrice);
        $("#distributorID").val(this.distributorID);
        $("#retailerID").val(this.retailerID);
        $("#consumerID").val(this.consumerID);

        this.initSupplyChain();
    },

    initSupplyChain: function () {
        this.fetchItemBufferOne();
        this.fetchItemBufferTwo();
        this.fetchEvents();
        this.bindEvents();
    },

    fetchEvents: function () {
        if (typeof App.contracts.SupplyChain.currentProvider.sendAsync !== "function") {
            App.contracts.SupplyChain.currentProvider.sendAsync = function () {
                return App.contracts.SupplyChain.currentProvider.send.apply(
                    App.contracts.SupplyChain.currentProvider,
                    arguments
                );
            };
        }

        App.contracts.SupplyChain.deployed().then(function (instance) {
            let events = instance.allEvents(function (err, log) {
                if (!err)
                    $("#ftc-events").append('<li>' + log.event + ' - ' + log.transactionHash + '</li>');
            });
        }).catch(function (err) {
            console.log(err.message);
        });

        window.ethereum.on('accountsChanged', function (accounts) {
            App.metamaskAccountId = accounts[0];
            App.updateCurrentMetamaskAccountLabelView();
        })
    },

    updateCurrentMetamaskAccountLabelView: function () {
        $("#metamaskAccountLabel").val(this.getAccountLabel(App.metamaskAccountId));
    },

    bindEvents: function () {
        $(".btn-set-access-control-for-all-roles").on('click', App.setAccessControlForAllRoles);

        $(".btn-fetchOne").on('click', App.fetchItemBufferOne);
        $(".btn-fetchTwo").on('click', App.fetchItemBufferTwo);

        $(".btn-harvest").on('click', App.harvestItem);
        $(".btn-process").on('click', App.processItem);
        $(".btn-pack").on('click', App.packItem);
        $(".btn-for-sale").on('click', App.markItemForSale);

        $(".btn-buy").on('click', App.buyItem);
        $(".btn-ship").on('click', App.shipItem);
        $(".btn-receive").on('click', App.receiveItem);
        $(".btn-purchase").on('click', App.purchaseItem);
    },

    setAccessControlForAllRoles: async function (event) {
        event.preventDefault();

        await App.setAccessControlForFarmer();
        await App.setAccessControlForDistributor();
        await App.setAccessControlForRetailer();
        await App.setAccessControlForConsumer();
    },

    setAccessControlForFarmer: function () {
        App.contracts.SupplyChain.deployed().then(function (instance) {
            return instance.addFarmer(App.originFarmerID, {from: App.metamaskAccountId});
        }).then(function (result) {
            $("#ftc-item").text(result);
            console.log('setAccessControlForFarmer', result);
        }).catch(this.defaultContractCallErrorHandler);
    },

    setAccessControlForDistributor: function () {
        App.contracts.SupplyChain.deployed().then(function (instance) {
            return instance.addDistributor(App.distributorID, {from: App.metamaskAccountId});
        }).then(function (result) {
            $("#ftc-item").text(result);
            console.log('setAccessControlForDistributor', result);
        }).catch(this.defaultContractCallErrorHandler);
    },

    setAccessControlForRetailer: function () {
        App.contracts.SupplyChain.deployed().then(function (instance) {
            return instance.addRetailer(App.retailerID, {from: App.metamaskAccountId});
        }).then(function (result) {
            $("#ftc-item").text(result);
            console.log('setAccessControlForRetailer', result);
        }).catch(this.defaultContractCallErrorHandler);
    },

    setAccessControlForConsumer: function () {
        App.contracts.SupplyChain.deployed().then(function (instance) {
            return instance.addConsumer(App.consumerID, {from: App.metamaskAccountId});
        }).then(function (result) {
            $("#ftc-item").text(result);
            console.log('setAccessControlForConsumer', result);
        }).catch(this.defaultContractCallErrorHandler);
    },

    harvestItem: function (event) {
        event.preventDefault();

        App.contracts.SupplyChain.deployed().then(function (instance) {
            return instance.harvestItem(
                App.upc,
                App.originFarmerID,
                App.originFarmName,
                App.originFarmInformation,
                App.originFarmLatitude,
                App.originFarmLongitude,
                App.productNotes,
                {from: App.metamaskAccountId}
            );
        }).then(function (result) {
            $("#ftc-item").text(result);
            console.log('harvestItem', result);
        }).catch(this.defaultContractCallErrorHandler);
    },

    processItem: function (event) {
        event.preventDefault();

        App.contracts.SupplyChain.deployed().then(function (instance) {
            return instance.processItem(App.upc, {from: App.metamaskAccountId});
        }).then(function (result) {
            $("#ftc-item").text(result);
            console.log('processItem', result);
        }).catch(this.defaultContractCallErrorHandler);
    },

    packItem: function (event) {
        event.preventDefault();

        App.contracts.SupplyChain.deployed().then(function (instance) {
            return instance.packItem(App.upc, {from: App.metamaskAccountId});
        }).then(function (result) {
            $("#ftc-item").text(result);
            console.log('packItem', result);
        }).catch(this.defaultContractCallErrorHandler);
    },

    markItemForSale: function (event) {
        event.preventDefault();

        App.contracts.SupplyChain.deployed().then(function (instance) {
            const productPrice = web3.toWei(1, "ether");
            console.log('productPrice', productPrice);
            return instance.markItemForSale(App.upc, App.productPrice, {from: App.metamaskAccountId});
        }).then(function (result) {
            $("#ftc-item").text(result);
            console.log('markItemForSale', result);
        }).catch(this.defaultContractCallErrorHandler);
    },

    buyItem: function (event) {
        event.preventDefault();

        App.contracts.SupplyChain.deployed().then(function (instance) {
            const walletValue = web3.toWei(0.01, "ether");
            return instance.buyItem(App.upc, {from: App.metamaskAccountId, value: walletValue});
        }).then(function (result) {
            $("#ftc-item").text(result);
            console.log('buyItem', result);
        }).catch(this.defaultContractCallErrorHandler);
    },

    shipItem: function (event) {
        event.preventDefault();

        App.contracts.SupplyChain.deployed().then(function (instance) {
            return instance.shipItem(App.upc, {from: App.metamaskAccountId});
        }).then(function (result) {
            $("#ftc-item").text(result);
            console.log('shipItem', result);
        }).catch(this.defaultContractCallErrorHandler);
    },

    receiveItem: function (event) {
        event.preventDefault();

        App.contracts.SupplyChain.deployed().then(function (instance) {
            return instance.receiveItem(App.upc, {from: App.metamaskAccountId});
        }).then(function (result) {
            $("#ftc-item").text(result);
            console.log('receiveItem', result);
        }).catch(this.defaultContractCallErrorHandler);
    },

    purchaseItem: function (event) {
        event.preventDefault();

        App.contracts.SupplyChain.deployed().then(function (instance) {
            return instance.purchaseItem(App.upc, {from: App.metamaskAccountId});
        }).then(function (result) {
            $("#ftc-item").text(result);
            console.log('purchaseItem', result);
        }).catch(this.defaultContractCallErrorHandler);
    },

    fetchItemBufferOne: function () {
        ///   event.preventDefault();
        ///    var processId = parseInt($(event.target).data('id'));
        App.upc = $('#upc').val();
        console.log('upc', App.upc);

        App.contracts.SupplyChain.deployed().then(function (instance) {
            return instance.fetchItemBufferOne(App.upc);
        }).then(function (result) {
            $("#ftc-item").text(result);
            console.log('fetchItemBufferOne', result);
        }).catch(this.defaultContractCallErrorHandler);
    },

    fetchItemBufferTwo: function () {
        ///    event.preventDefault();
        ///    var processId = parseInt($(event.target).data('id'));

        App.contracts.SupplyChain.deployed().then(function (instance) {
            return instance.fetchItemBufferTwo.call(App.upc);
        }).then(function (result) {
            $("#ftc-item").text(result);
            console.log('fetchItemBufferTwo', result);
        }).catch(this.defaultContractCallErrorHandler);
    },

    defaultContractCallErrorHandler: function (err) {
        console.log(err.message);
    }

};

window.App = App;

window.addEventListener("load", function () {
    App.init();
});
