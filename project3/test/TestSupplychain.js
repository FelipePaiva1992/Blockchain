// This script is designed to test the solidity smart contract - SuppyChain.sol -- and the various functions within
// Declare a variable and assign the compiled smart contract artifact
const SupplyChain = artifacts.require('SupplyChain');

contract('SupplyChain', function (accounts) {
    // addresses
    const contractOwnerAccount = accounts[0];
    const originFarmerID = accounts[1];
    const distributorID = accounts[2];
    const retailerID = accounts[3];
    const consumerID = accounts[4];

    const emptyAddress = '0x0000000000000000000000000000000000000000';

    // ids
    const sku = 1
    const upc = 1

    // farm
    const originFarmName = "John Doe"
    const originFarmInformation = "Yarray Valley"
    const originFarmLatitude = "-38.239770"
    const originFarmLongitude = "144.341490"

    // product
    const productID = sku + upc;
    const productNotes = "Best beans for Espresso"
    const productPrice = web3.utils.toWei("1", "ether")

    const State = {
        Harvested: 0,
        Processed: 1,
        Packed: 2,
        ForSale: 3,
        Sold: 4,
        Shipped: 5,
        Received: 6,
        Purchased: 7
    }

    ///Available Accounts
    ///==================
    /// (0) 0x26708615613250f0d4529c392a4c24dc0e45c046
    /// (1) 0xc6d9a96b998cc3e11bf7451c651d17053a835065
    /// (2) 0xa146f79d3bfb773e0af4ff1bab19b690ff3d8bea
    /// (3) 0xf488b9452c04c01b921d4bd328dba2e220914de2
    /// (4) 0x5b23d656b16c3f53818e8a539a160c15deb21099
    /// (5) 0x33cdda540f36fd7086e665a0b04801febfefc463
    /// (6) 0x9584c59536bef120a944f033cdf14d300783cf46
    /// (7) 0xcd7ac78961d588c1864386c8fb0e38e0d8233fb9
    /// (8) 0xebd073c106e529221962f1b34d14086ad5dfb38c
    /// (9) 0x29d8bfdf9bf825ff52bbb711719aa2cc1df4710d

    console.log("ganache-cli accounts used here...")
    console.log("Contract Owner: accounts[0] ", contractOwnerAccount)
    console.log("Farmer: accounts[1] ", originFarmerID)
    console.log("Distributor: accounts[2] ", distributorID)
    console.log("Retailer: accounts[3] ", retailerID)
    console.log("Consumer: accounts[4] ", consumerID)

    let supplyChain;
    let eventEmitted = false;

    before(async () => {
        supplyChain = await SupplyChain.deployed();
        await supplyChain.addFarmer(originFarmerID, {from: contractOwnerAccount});
        await supplyChain.addDistributor(distributorID, {from: contractOwnerAccount});
        await supplyChain.addRetailer(retailerID, {from: contractOwnerAccount});
        await supplyChain.addConsumer(consumerID, {from: contractOwnerAccount});
    });

    // 1st Test
    it("Testing smart contract function harvestItem() that allows a farmer to harvest coffee", async () => {
        // given
        await supplyChain.Harvested(emittedEventHandler);

        // when
        await supplyChain.harvestItem(
            upc, originFarmerID, originFarmName, originFarmInformation, originFarmLatitude, originFarmLongitude, productNotes,
            {from: originFarmerID}
        );

        // then
        await assertEmittedEventAndResult(State.Harvested);
    })

    // 2nd Test
    it("Testing smart contract function processItem() that allows a farmer to process coffee", async () => {
        // given
        await supplyChain.Processed(emittedEventHandler);

        // when
        await supplyChain.processItem(upc, {from: originFarmerID});

        // then
        await assertEmittedEventAndResult(State.Processed);
    })

    // 3rd Test
    it("Testing smart contract function packItem() that allows a farmer to pack coffee", async () => {
        // given
        await supplyChain.Packed(emittedEventHandler);

        // when
        await supplyChain.packItem(upc, {from: originFarmerID});

        // then
        await assertEmittedEventAndResult(State.Packed);
    })

    // 4th Test
    it("Testing smart contract function markItemForSale() that allows a farmer to sell coffee", async () => {
        // given
        await supplyChain.ForSale(emittedEventHandler);

        // when
        await supplyChain.markItemForSale(upc, productPrice, {from: originFarmerID});

        // then
        await assertEmittedEventAndResult(State.ForSale);
    })

    // 5th Test
    it("Testing smart contract function buyItem() that allows a distributor to buy coffee", async () => {
        // given
        await supplyChain.Sold(emittedEventHandler);

        // when
        await supplyChain.buyItem(upc, {from: distributorID, value: productPrice});

        // then
        await assertEmittedEventAndResult(State.Sold);
    })

    // 6th Test
    it("Testing smart contract function shipItem() that allows a distributor to ship coffee", async () => {
        // given
        await supplyChain.Shipped(emittedEventHandler);

        // when
        await supplyChain.shipItem(upc, {from: distributorID});

        // then
        await assertEmittedEventAndResult(State.Shipped);
    })

    // 7th Test
    it("Testing smart contract function receiveItem() that allows a retailer to mark coffee received", async () => {
        // given
        await supplyChain.Received(emittedEventHandler)

        // when
        await supplyChain.receiveItem(upc, {from: retailerID});

        // then
        await assertEmittedEventAndResult(State.Received);
    })

    // 8th Test
    it("Testing smart contract function purchaseItem() that allows a consumer to purchase coffee", async () => {
        // given
        await supplyChain.Purchased(emittedEventHandler)

        // when
        await supplyChain.purchaseItem(upc, {from: consumerID});

        // then
        await assertEmittedEventAndResult(State.Purchased);
    })

    // 9th Test
    it("Testing smart contract function fetchItemBufferOne() that allows anyone to fetch item details from blockchain", async () => {
        await assertResultBufferOne(State.Purchased);
    })

    // 10th Test
    it("Testing smart contract function fetchItemBufferTwo() that allows anyone to fetch item details from blockchain", async () => {
        await assertResultBufferTwo(State.Purchased);
    })

    // Auxiliary functions for assertion
    function emittedEventHandler(error, result) {
        eventEmitted = true;
    }

    async function assertEmittedEventAndResult(expectedState) {
        assertEmittedEvent();
        await assertResultBufferOne(expectedState);
        await assertResultBufferTwo(expectedState);
    }

    function assertEmittedEvent() {
        assert.equal(eventEmitted, true, 'Invalid event emitted');
    }

    async function assertResultBufferOne(expectedState) {
        // when
        const resultBufferOne = await supplyChain.fetchItemBufferOne(upc);

        // then
        assert.equal(resultBufferOne[0], sku, 'Error: Invalid item SKU');
        assert.equal(resultBufferOne[1], upc, 'Error: Invalid item UPC');
        assert.equal(resultBufferOne[2], getExpectedItemOwner(expectedState), 'Error: Missing or Invalid ownerID');
        assert.equal(resultBufferOne[3], originFarmerID, 'Error: Missing or Invalid originFarmerID');
        assert.equal(resultBufferOne[4], originFarmName, 'Error: Missing or Invalid originFarmName');
        assert.equal(resultBufferOne[5], originFarmInformation, 'Error: Missing or Invalid originFarmInformation');
        assert.equal(resultBufferOne[6], originFarmLatitude, 'Error: Missing or Invalid originFarmLatitude');
        assert.equal(resultBufferOne[7], originFarmLongitude, 'Error: Missing or Invalid originFarmLongitude');
    }

    function getExpectedItemOwner(expectedState) {
        switch (expectedState) {
            case State.Harvested:
            case State.Processed:
            case State.Packed:
            case State.ForSale:
                return originFarmerID;
            case State.Sold:
            case State.Shipped:
                return distributorID;
            case State.Received:
                return retailerID;
            case State.Purchased:
                return consumerID;
        }
    }

    async function assertResultBufferTwo(expectedState) {
        // when
        const resultBufferTwo = await supplyChain.fetchItemBufferTwo(upc);

        // then
        assert.equal(resultBufferTwo[0], sku, 'Error: Invalid item SKU');
        assert.equal(resultBufferTwo[1], upc, 'Error: Invalid item UPC');
        assert.equal(resultBufferTwo[2], productID, 'Error: Missing or Invalid productID');
        assert.equal(resultBufferTwo[3], productNotes, 'Error: Missing or Invalid productNotes');
        assert.equal(resultBufferTwo[4], (expectedState >= State.ForSale) ? productPrice : 0, 'Error: Missing or Invalid productPrice');
        assert.equal(resultBufferTwo[5], expectedState, 'Error: Invalid item State');
        assert.equal(resultBufferTwo[6], (expectedState >= State.Sold) ? distributorID : emptyAddress, 'Error: Missing or Invalid distributorID');
        assert.equal(resultBufferTwo[7], (expectedState >= State.Received) ? retailerID : emptyAddress, 'Error: Missing or Invalid retailerID');
        assert.equal(resultBufferTwo[8], (expectedState >= State.Purchased) ? consumerID : emptyAddress, 'Error: Missing or Invalid consumerID');
    }

});

