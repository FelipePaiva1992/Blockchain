const FlightSuretyApp = artifacts.require("FlightSuretyApp");
const FlightSuretyData = artifacts.require("FlightSuretyData");
const BigNumber = require('bignumber.js');

const ConfigTests = async function (accounts) {

    // These test addresses are useful when you need to add
    // multiple users in test scripts
    let testAddresses = [
        "0x245Cd5c7De14edfce6432a80512A1dDB283F4fFA",
        "0x00bebB5aeB83A262329542064E80216A00D634D2",
        "0x8Cf1A0227CB0Ea367105dB2553Dc89F29E3a0C55",
        "0x0a8f547a1d6A0fd2511D9f4f7c8a76dA37E3123f",
        "0xbDe18620DBd19987Fb5d8fb1fAE1fEC5054B241c",
        "0x9832F7A3FC9bA3e7fd531891976ff3295AfA737C",
        "0x32942cCe93b32188EeEE8eE9862Dd0C83AbD5c2b",
        "0x84d192a244d715CA1d6537758F785B2f0Bf34201",
        "0xB4D0eca0D7a8c56c7ef26C2FBfe21A338f912720",
        "0x43A5b166346Ef67Df25f437135c28f95e0EbED83",
        "0x865f7E551EfFF59883bEc7f6e575df065FEd0253",
        "0xbB9Aff9778bA2756Dd6c54F24F2b378d2040AFd0",
        "0x8aE6Dc77632A3f9Fd36B0511eC2A34d1471e9dC0",
        "0x7388caC0Eee41231f4251b32a947c59de8391171",
        "0x6432c6f32Fe380E127d014c51B1b3Bc0556fd600",
        "0x3A662c7Fc05c82A9b96C9b443B2e69bCe7ac234F",
        "0xc2fA1Dbb53B703C5d8e4BD1786FfB20c0047AE4C",
        "0x8d24437D1703a12a36E48E4da1ea418f9e2a4D0F",
        "0xD4604928EaDB7dED1FBaCEee952C361284A1F602",
        "0x165911aBC35a34eCdE2fBFD48AdcDE17967E7EEe",
        "0xe0609Da156ED3607066284723A68dCbaE73De996",
        "0x056F9C218639EdFd6cd9476859E8378C933b43f5",
        "0xcbF3C00C93fb30e3D9C478bA444C43bcD33456F2",
        "0x60E4Ea5364FD4c2234e5F3bE63c18771414fD03B",
        "0xAAd80873B32B52dEEbBeD20896C3988519897314",
        "0x9d5b79fCe52ff86a69B3011D9Dc89835064BE4Bf",
        "0xb422e6b4FCba903B329224c03E03bE8964b6b4d8",
        "0x0639F365d58bB85730e727A1bbA1Be0075aB7765",
        "0x367B225f21D12cdAfc9a1EdFCaf51AEF8ddbD97d",
        "0xFF4F473239471Cf4c3E51016Ab038E1afc42ED28",
        "0x7FC0a1A2F3137AD8b805e9c5bfb981EB6299716b",
        "0x027f3581DE89b88388d064cfdD129874DEb51920",
        "0xDF1860f532E8C64D975bca49B923305FF54465e7",
        "0xA2237C6779675289dAE7FF26D79baa55455Da25d",
        "0x6c49D30e3E3d6402249Bf5043Cb524FC0670A9b0",
        "0x2e8fccb7A34ECb53fEEE1380fb60dD5AF73181B8",
        "0xaF4A4b960F6685f6Da4D9f9ae3866e6625F3D11E",
        "0xba824487421AB007d414F4437f8Ee952bff6b45d",
        "0xb6C9A566eC3D35cb4a2a1313D0DDe21b15133b14",
        "0x1342BEFf7Ef21427c3478D813B1280675c80ea9b",
        "0x51806A23B3A89F0cFe621d97a938E8770AC0BBDB",
        "0x83a311eED59076089eDb88D8977310B99400f069",
        "0xB6c74AbfF4adb405AF005bCFDbFf2953541DAE59",
        "0x41Cb822B3B306D5476dA4514Adf1F27fe9B6ecC4",
        "0x5847D8936A82CE4932354f9884E932bAc7B8896B",
        "0xA187B2d9f26AE89E390df4cF0B619ff41Aa7e61A",
        "0x95b6393DceaB0C3D86CfAeC90e8cbcA774Ed0439",
        "0xe9739aaC76165359E545d4bC3e338c88A595E41C",
        "0xAF729e23941a8b16412BdD62bDE029242D3f49d0",
        "0x9B3A949eF0B001CAB1Ff840999Ad4De891f5486E",
        "0xD2a3fd0aCe1ffc0d6A53f43610AC4F3F92B81d33",
        "0xd1170D2453d3A3Bfc6d2b55396dF20b9f3Cc2981",
        "0xe59de3A928ded27460c4dB25108c5FcE59b28255",
        "0x7Ca3DABb3F9d5CDd06B3CF01EDD2Ab4a4fa86730",
        "0x2C71c50CaB43e59C26BB0e5314dd77974225f6dE",
        "0x3c423882241AbFd33a41b05f2fE9770dF1dF4029",
        "0x337Fb2b19A0A7483dFC1A636302E881BfFaf42C5",
        "0x9bb3AADbe9E0a811bD478143739bC61D6C1115BA",
        "0x006A2f8cb3CACEccD13b8829c3Ab642c0B81e005",
        "0x5a739EcAcCE8e5d7af8445D826B66eC33735fb0B",
        "0xeb61498E2532E1a667AFa6D484a5923EaDF1EA14",
        "0xbdc97cC8356537f42eCBEfc4d0aFDFA931B54117",
        "0xA4194650cD5910af666a8BF29d3b50622F086e67",
        "0x4285d9B570531Fb9127B01431b8058Cf172B192A",
        "0xcee77758E60896f36E70cD69200b31965c198CaF",
        "0xe035AEbF28bC461152021DFBcF266090636c199E",
        "0x9E6EFbdf9B591202A797dC7a0fbAbC985aF64343",
        "0x6703242817793Aa9247271D1fE0Cb6b4b5a7d5FA",
        "0x2dEb42Cfe5575EC62D001F5746B3eC214983015d",
        "0x86BAC638F2B3fb8853770FDF760C18eF7D216ca6",
        "0xa570FFD133bef5a1cD878304fe8db37f05cFf2fB",
        "0x53A25f1908413384Ec9F72B2a500274e11eA4144",
        "0xcC6Fb404C01aFa3e553a7e3dbE919E217b03206a",
        "0xFf3Fd6549bAb3926557FcE3668B7d79312f66862",
        "0x259f39e74F07B7bf37563F7feA100B7799D84449",
        "0x92555690bDAB877d0C61eFC10800c267364E6709",
        "0xADEAAa7cE9A26b85717531DB46C23b85c692844f",
        "0x2F11C11793753C4188183700093D339cBf3C1e1d",
        "0xB806334075DBC6DFA1887199D5cF6aEB36602863",
        "0x9F1A1f61B288758219b8A4e90ea61EC7dD97478D",
        "0xAa937cA9028Df579826f5FE6b741Ce1679e13F75",
        "0x3A7c4fF7c35ebdb21c1c3848a28CF0f6814f352D",
        "0x166F392B3Fd4CcEded355868a542090E1CFD28FD",
        "0x6777624f432BC88f27BeF34344cE43ca0b697c1D",
        "0xD7d4d67BEf9AD570D1a30633D1aa0D6b711F4661",
        "0x2B24c489360C17cd974f566cF840A72d3d2eAD66",
        "0xbBcC3aaF03e6dcc3A056c8295BBaEDc504EA0F54",
        "0x6Cf3D61B998e90Bbaa314D76B3799287eD1C8356",
        "0xDEBc103DAc162Dbe22CCd39234c8f8AFE6136838",
        "0xB088E4EfcEF9a2A8e71F56c6E79749764418a79B",
        "0xA1f50C3B312830DdF98eCB4E76F39444F4195464",
        "0x11a60F3BFA00D0626bC67578233a76FCA4252097",
        "0x31569604Bd68052AfaaF769a711810f3BbDA0F75",
        "0x65D390621ffc7Eb4c26B4826BfbA9aAAb1A9b0c1",
        "0x72FA9d74eC4E97E362003D55e9790c17c0bCcDa5",
        "0x7c23D2743d50bd9B62030DDb3cc2F9ABEd555004",
        "0x9e4C6a2f87e06A411D170304F90ddAc484BED4fC",
        "0xBDb332394dE492617b243991dAc729Ce71bf1EA6",
        "0xA235797A1e7F3dEc6a16a5289E96C0fCcF008e23",
        "0xAa4Cc7aDce23454A56de602583E3Fb7C35bf57f3",
    ];


    let owner = accounts[0];
    let firstAirline = accounts[1];

    let dataContract = await FlightSuretyData.new();
    let appContract = await FlightSuretyApp.new(dataContract.address);

    await EventCapture.registerEvents(dataContract, appContract);

    await dataContract.authorizeContractCaller(appContract.address);
    await appContract.registerTheFirstAirline(firstAirline, "First Airline");

    return {
        owner: owner,
        firstAirline: firstAirline,
        weiMultiple: (new BigNumber(10)).pow(18),
        testAddresses: testAddresses,
        dataContract: dataContract,
        appContract: appContract,
        eventCapture: EventCapture
    }
}

module.exports = {
    Config: ConfigTests
};

/*
 * Event handlers
 */

const EventType = {
    InsurerStateChanged: "InsurerStateChanged",
    InsurancePolicyStateChanged: "InsurancePolicyStateChanged",
    FundingReceived: "FundingReceived",
    OracleRegistered: "OracleRegistered",
    FlightStatusInfoRequested: "FlightStatusInfoRequested",
    FlightStatusInfoSubmitted: "FlightStatusInfoSubmitted",
    FlightStatusInfoUpdated: "FlightStatusInfoUpdated"
};

const EventCapture = {

    events: [],

    registerEvents: async function (dataContract, appContract) {
        await dataContract.InsurerStateChanged(this.insurerStateChangedHandler);
        await dataContract.InsurancePolicyStateChanged(this.insurancePolicyStateChangedHandler);
        await dataContract.FundingReceived(this.fundingReceivedHandler);

        await appContract.OracleRegistered(this.oracleRegisteredHandler);
        await appContract.FlightStatusInfoRequested(this.flightStatusInfoRequestedHandler);
        await appContract.FlightStatusInfoSubmitted(this.flightStatusInfoSubmittedHandler);
        await appContract.FlightStatusInfoUpdated(this.flightStatusInfoUpdatedHandler);
    },

    clear: function () {
        this.events = [];
    },

    consumeEvent: function (type, resultArgs, msg) {
        console.log(` => Received event ${type} <${msg}>`);

        let event = { type: type, params: resultArgs };
        this.events.push(event);
    },

    insurerStateChangedHandler: function (error, result) {
        console.log('insurerStateChangedHandler ---> ', error)
        let msg = `airlineAddress: ${result.args.insurerAddress}, state: ${result.args.state}`;
        EventCapture.consumeEvent(EventType.InsurerStateChanged, result.args, msg);
    },

    assertInsurerStateChanged: function (eventIdx, exectedInsurerAddress, expectedState) {
        assert.equal(this.events[eventIdx].type, EventType.InsurerStateChanged);
        assert.equal(this.events[eventIdx].params.insurerAddress, exectedInsurerAddress);
        assert.equal(this.events[eventIdx].params.state.toNumber(), expectedState);
    },

    insurancePolicyStateChangedHandler: function (error, result) {
        let msg = `insureeAddress: ${result.args.insureeAddress}, insuredFlightKey: ${result.args.insuredObjectKey}, state: ${result.args.state}`;
        EventCapture.consumeEvent(EventType.InsurancePolicyStateChanged, result.args, msg);
    },

    assertInsurancePolicyStateChanged: function (eventIdx, exectedInsureeAddress, expectedState) {
        assert.equal(this.events[eventIdx].type, EventType.InsurancePolicyStateChanged);
        assert.equal(this.events[eventIdx].params.insureeAddress, exectedInsureeAddress);
        assert.equal(this.events[eventIdx].params.state.toNumber(), expectedState);
    },

    fundingReceivedHandler: function (error, result) {
        let msg = `sponsorAddress: ${result.args.sponsorAddress}, amountPaid: ${result.args.amountPaid}`;
        EventCapture.consumeEvent(EventType.FundingReceived, result.args, msg);
    },

    oracleRegisteredHandler: function (error, result) {
        let msg = `oracle: ${result.args.oracleAddress}`;
        EventCapture.consumeEvent(EventType.OracleRegistered, result.args, msg);
    },

    assertOracleRegistered: function (eventIdx, exectedOracleAddress) {
        assert.equal(this.events[eventIdx].type, EventType.OracleRegistered);
        assert.equal(this.events[eventIdx].params.oracleAddress, exectedOracleAddress);
    },

    flightStatusInfoRequestedHandler: function (error, result) {
        let msg = `index: ${result.args.index.toNumber()}, airlineAddress: ${result.args.airlineAddress}, flightNumber: ${result.args.flightNumber}, departureTime: ${result.args.departureTime.toNumber()}`;
        EventCapture.consumeEvent(EventType.FlightStatusInfoRequested, result.args, msg);
    },

    assertFlightStatusInfoRequested: function (eventIdx, expectedAirlineAddress, expectedFlightNumber, expectedDepartureTime) {
        assert.equal(this.events[eventIdx].type, EventType.FlightStatusInfoRequested);
        assert.equal(this.events[eventIdx].params.airlineAddress, expectedAirlineAddress);
        assert.equal(this.events[eventIdx].params.flightNumber, expectedFlightNumber);
        assert.equal(this.events[eventIdx].params.departureTime, expectedDepartureTime);
    },

    flightStatusInfoSubmittedHandler: function (error, result) {
        let msg = `airlineAddress: ${result.args.airlineAddress}, flightNumber: ${result.args.flightNumber}, departureTime: ${result.args.departureTime.toNumber()}, flightStatus: ${result.args.flightStatus}`;
        EventCapture.consumeEvent(EventType.FlightStatusInfoSubmitted, result.args, msg);
    },

    assertFlightStatusInfoSubmitted: function (eventIdx, expectedAirlineAddress, expectedFlightNumber, expectedDepartureTime, expectedFlightStatus) {
        assert.equal(this.events[eventIdx].type, EventType.FlightStatusInfoSubmitted);
        assert.equal(this.events[eventIdx].params.airlineAddress, expectedAirlineAddress);
        assert.equal(this.events[eventIdx].params.flightNumber, expectedFlightNumber);
        assert.equal(this.events[eventIdx].params.departureTime, expectedDepartureTime);
        assert.equal(this.events[eventIdx].params.flightStatus.toNumber(), expectedFlightStatus);
    },

    flightStatusInfoUpdatedHandler: function (error, result) {
        let msg = `airlineAddress: ${result.args.airlineAddress}, flightNumber: ${result.args.flightNumber}, departureTime: ${result.args.departureTime.toNumber()}, flightStatus: ${result.args.flightStatus}`;
        EventCapture.consumeEvent(EventType.FlightStatusInfoUpdated, result.args, msg);
    },

    assertFlightStatusInfoUpdated: function (eventIdx, expectedAirlineAddress, expectedFlightNumber, expectedDepartureTime, expectedFlightStatus) {
        assert.equal(this.events[eventIdx].type, EventType.FlightStatusInfoUpdated);
        assert.equal(this.events[eventIdx].params.airlineAddress, expectedAirlineAddress);
        assert.equal(this.events[eventIdx].params.flightNumber, expectedFlightNumber);
        assert.equal(this.events[eventIdx].params.departureTime, expectedDepartureTime);
        assert.equal(this.events[eventIdx].params.flightStatus.toNumber(), expectedFlightStatus);
    },
}



