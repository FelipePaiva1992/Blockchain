# Ethereum FlightSurety Dapp

This is the 4th project from the

![flight surety dapp1](res/flight-surety-dapp1.png)


```
test ./test/FlightSurety.test.js
Using network 'development'.


Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.

Start contract migration & setup ...
- deploy contracts ...
- obtain instance to them ...
- build trust between contracts ...
- register the first airline ...
- fund the first airline ...
- register flight EC02689 at 1627927200 from MXP to IBZ ...
- register flight U202288 at 1627931700 from MXP to LTN ...
- register flight EC02835 at 1627944000 from MXP to BRI ...
- register flight EC02689 at 1628013600 from MXP to IBZ ...
- register flight U202288 at 1628018100 from MXP to LTN ...
- register flight EC02835 at 1628030400 from MXP to BRI ...
- register flight EC02689 at 1628100000 from MXP to IBZ ...
- register flight U202288 at 1628104500 from MXP to LTN ...
- register flight EC02835 at 1628116800 from MXP to BRI ...
- register flight EC02689 at 1628186400 from MXP to IBZ ...
- register flight U202288 at 1628190900 from MXP to LTN ...
- register flight EC02835 at 1628203200 from MXP to BRI ...
- register flight EC02689 at 1628272800 from MXP to IBZ ...
- register flight U202288 at 1628277300 from MXP to LTN ...
- register flight EC02835 at 1628289600 from MXP to BRI ...
- publish config json files ...


  Contract: Flight Surety Tests
insurerStateChangedHandler --->  null
 => Received event InsurerStateChanged <airlineAddress: 0x00bebB5aeB83A262329542064E80216A00D634D2, state: 1>
    Test Operational Status
      ✓ has correct initial isContractOperational() value (44ms)
      ✓ can block access to pauseContract() for non-Contract Owner account (3827ms)
      ✓ can allow access to pauseContract() and resumeContract() for Contract Owner account (309ms)
    Test Insurer Registration
      ✓ cannot register an airline using registerAirline() if the registering airline is not funded (271ms)
insurerStateChangedHandler --->  null
 => Received event InsurerStateChanged <airlineAddress: 0x00bebB5aeB83A262329542064E80216A00D634D2, state: 2>
      ✓ the first airline can pay airline fee and can become fully-qualified insurer (182ms)
insurerStateChangedHandler --->  null
 => Received event InsurerStateChanged <airlineAddress: 0x8Cf1A0227CB0Ea367105dB2553Dc89F29E3a0C55, state: 1>
      ✓ can register a second airline using registerAirline() after the registering airline is funded (215ms)
insurerStateChangedHandler --->  null
 => Received event InsurerStateChanged <airlineAddress: 0x8Cf1A0227CB0Ea367105dB2553Dc89F29E3a0C55, state: 2>
      ✓ the second airline can pay airline fee and can become fully-qualified insurer (173ms)
insurerStateChangedHandler --->  null
 => Received event InsurerStateChanged <airlineAddress: 0x0a8f547a1d6A0fd2511D9f4f7c8a76dA37E3123f, state: 1>
insurerStateChangedHandler --->  null
 => Received event InsurerStateChanged <airlineAddress: 0x0a8f547a1d6A0fd2511D9f4f7c8a76dA37E3123f, state: 2>
insurerStateChangedHandler --->  null
 => Received event InsurerStateChanged <airlineAddress: 0xbDe18620DBd19987Fb5d8fb1fAE1fEC5054B241c, state: 1>
insurerStateChangedHandler --->  null
 => Received event InsurerStateChanged <airlineAddress: 0xbDe18620DBd19987Fb5d8fb1fAE1fEC5054B241c, state: 2>
      ✓ the third and fourth airline can be registered without multi-parity consensus and therefore they can pay airline fee and can become fully-qualified insurers (842ms)
insurerStateChangedHandler --->  null
 => Received event InsurerStateChanged <airlineAddress: 0x9832F7A3FC9bA3e7fd531891976ff3295AfA737C, state: 1>
      ✓ the fifth airline can be registered with multi-parity consensus only (308ms)
      ✓ the fifth airline can not participate in the contract because is not yet fully qualified (have not yet paied the fee) (182ms)
    Test Insurance Lifecycle & Oracle Iteraction
      ✓ a flight can be registered (160ms)
      ✓ passengers can not pay more then 1 ether for purchasing flight insurance (130ms)
 => Received event InsurancePolicyStateChanged <insureeAddress: 0x865f7E551EfFF59883bEc7f6e575df065FEd0253, insuredFlightKey: 0xee47804e9d28fbbdfb29fdc64db4efaf7bd2c8a74af19253833c32f81dea3a63, state: 1>
      ✓ passengers can buy flight insurance for 1 ether (168ms)
 => Received event OracleRegistered <oracle: 0xe0609Da156ED3607066284723A68dCbaE73De996>
 => Received event OracleRegistered <oracle: 0x056F9C218639EdFd6cd9476859E8378C933b43f5>
 => Received event OracleRegistered <oracle: 0xcbF3C00C93fb30e3D9C478bA444C43bcD33456F2>
 => Received event OracleRegistered <oracle: 0x60E4Ea5364FD4c2234e5F3bE63c18771414fD03B>
 => Received event OracleRegistered <oracle: 0xAAd80873B32B52dEEbBeD20896C3988519897314>
 => Received event OracleRegistered <oracle: 0x9d5b79fCe52ff86a69B3011D9Dc89835064BE4Bf>
 => Received event OracleRegistered <oracle: 0xb422e6b4FCba903B329224c03E03bE8964b6b4d8>
 => Received event OracleRegistered <oracle: 0x0639F365d58bB85730e727A1bbA1Be0075aB7765>
 => Received event OracleRegistered <oracle: 0x367B225f21D12cdAfc9a1EdFCaf51AEF8ddbD97d>
 => Received event OracleRegistered <oracle: 0xFF4F473239471Cf4c3E51016Ab038E1afc42ED28>
 => Received event OracleRegistered <oracle: 0x7FC0a1A2F3137AD8b805e9c5bfb981EB6299716b>
 => Received event OracleRegistered <oracle: 0x027f3581DE89b88388d064cfdD129874DEb51920>
 => Received event OracleRegistered <oracle: 0xDF1860f532E8C64D975bca49B923305FF54465e7>
 => Received event OracleRegistered <oracle: 0xA2237C6779675289dAE7FF26D79baa55455Da25d>
 => Received event OracleRegistered <oracle: 0x6c49D30e3E3d6402249Bf5043Cb524FC0670A9b0>
 => Received event OracleRegistered <oracle: 0x2e8fccb7A34ECb53fEEE1380fb60dD5AF73181B8>
 => Received event OracleRegistered <oracle: 0xaF4A4b960F6685f6Da4D9f9ae3866e6625F3D11E>
 => Received event OracleRegistered <oracle: 0xba824487421AB007d414F4437f8Ee952bff6b45d>
 => Received event OracleRegistered <oracle: 0xb6C9A566eC3D35cb4a2a1313D0DDe21b15133b14>
 => Received event OracleRegistered <oracle: 0x1342BEFf7Ef21427c3478D813B1280675c80ea9b>
 => Received event OracleRegistered <oracle: 0x51806A23B3A89F0cFe621d97a938E8770AC0BBDB>
 => Received event OracleRegistered <oracle: 0x83a311eED59076089eDb88D8977310B99400f069>
 => Received event OracleRegistered <oracle: 0xB6c74AbfF4adb405AF005bCFDbFf2953541DAE59>
 => Received event OracleRegistered <oracle: 0x41Cb822B3B306D5476dA4514Adf1F27fe9B6ecC4>
 => Received event OracleRegistered <oracle: 0x5847D8936A82CE4932354f9884E932bAc7B8896B>
 => Received event OracleRegistered <oracle: 0xA187B2d9f26AE89E390df4cF0B619ff41Aa7e61A>
 => Received event OracleRegistered <oracle: 0x95b6393DceaB0C3D86CfAeC90e8cbcA774Ed0439>
 => Received event OracleRegistered <oracle: 0xe9739aaC76165359E545d4bC3e338c88A595E41C>
 => Received event OracleRegistered <oracle: 0xAF729e23941a8b16412BdD62bDE029242D3f49d0>
 => Received event OracleRegistered <oracle: 0x9B3A949eF0B001CAB1Ff840999Ad4De891f5486E>
      ✓ can register all oracles and persist them in memory (7320ms)
 => Received event FlightStatusInfoRequested <index: 0, airlineAddress: 0x00bebB5aeB83A262329542064E80216A00D634D2, flightNumber: BA2490, departureTime: 1626343200>
      ✓ can request flight status info from oracles (136ms)
=> Retrieved from the last event the requestedIndex = 0
Submitting from oracle 0xcbF3C00C93fb30e3D9C478bA444C43bcD33456F2
 => Received event FlightStatusInfoSubmitted <airlineAddress: 0x00bebB5aeB83A262329542064E80216A00D634D2, flightNumber: BA2490, departureTime: 1626343200, flightStatus: 20>
Submitting from oracle 0x0639F365d58bB85730e727A1bbA1Be0075aB7765
 => Received event FlightStatusInfoSubmitted <airlineAddress: 0x00bebB5aeB83A262329542064E80216A00D634D2, flightNumber: BA2490, departureTime: 1626343200, flightStatus: 20>
Submitting from oracle 0xFF4F473239471Cf4c3E51016Ab038E1afc42ED28
 => Received event InsurancePolicyStateChanged <insureeAddress: 0x865f7E551EfFF59883bEc7f6e575df065FEd0253, insuredFlightKey: 0xee47804e9d28fbbdfb29fdc64db4efaf7bd2c8a74af19253833c32f81dea3a63, state: 3>
 => Received event FlightStatusInfoSubmitted <airlineAddress: 0x00bebB5aeB83A262329542064E80216A00D634D2, flightNumber: BA2490, departureTime: 1626343200, flightStatus: 20>
 => Received event FlightStatusInfoUpdated <airlineAddress: 0x00bebB5aeB83A262329542064E80216A00D634D2, flightNumber: BA2490, departureTime: 1626343200, flightStatus: 20>
      ✓ oracles can submit flight status info for airline fault matching with the requestedIndex (675ms)
 => Received event InsurancePolicyStateChanged <insureeAddress: 0x865f7E551EfFF59883bEc7f6e575df065FEd0253, insuredFlightKey: 0xee47804e9d28fbbdfb29fdc64db4efaf7bd2c8a74af19253833c32f81dea3a63, state: 4>
 => gasUsed = 76058, gasPrice = 20000000000
 => getTransactionCostInWei = 1521160000000000
initialBalanceInWei = 99491346880000000000, finalBalanceInWei = 100989825720000000000, transactionCostInWei = 1521160000000000
      ✓ passengers can withdraw any funds owed to them as a result of receiving credit for insurance payout (130ms)


  17 passing (16s)
```

## Libs

* Truffle v5.4.8
* Solidity v0.8.0 (solc-js)
* Node v15.5.1
* Web3.js v1.3.6
* Ganache CLI v6.12.2 (ganache-core: 2.13.2)


### The accepted result from the oracles

````
1. Register oracle 0x865f7E551EfFF59883bEc7f6e575df065FEd0253
2. Register oracle 0xbB9Aff9778bA2756Dd6c54F24F2b378d2040AFd0
3. Register oracle 0x8aE6Dc77632A3f9Fd36B0511eC2A34d1471e9dC0
4. Register oracle 0x7388caC0Eee41231f4251b32a947c59de8391171
5. Register oracle 0x6432c6f32Fe380E127d014c51B1b3Bc0556fd600
6. Register oracle 0x3A662c7Fc05c82A9b96C9b443B2e69bCe7ac234F
7. Register oracle 0xc2fA1Dbb53B703C5d8e4BD1786FfB20c0047AE4C
8. Register oracle 0x8d24437D1703a12a36E48E4da1ea418f9e2a4D0F
9. Register oracle 0xD4604928EaDB7dED1FBaCEee952C361284A1F602
10. Register oracle 0x165911aBC35a34eCdE2fBFD48AdcDE17967E7EEe
11. Register oracle 0xe0609Da156ED3607066284723A68dCbaE73De996
12. Register oracle 0x056F9C218639EdFd6cd9476859E8378C933b43f5
13. Register oracle 0xcbF3C00C93fb30e3D9C478bA444C43bcD33456F2
14. Register oracle 0x60E4Ea5364FD4c2234e5F3bE63c18771414fD03B
15. Register oracle 0xAAd80873B32B52dEEbBeD20896C3988519897314
16. Register oracle 0x9d5b79fCe52ff86a69B3011D9Dc89835064BE4Bf
17. Register oracle 0xb422e6b4FCba903B329224c03E03bE8964b6b4d8
18. Register oracle 0x0639F365d58bB85730e727A1bbA1Be0075aB7765
19. Register oracle 0x367B225f21D12cdAfc9a1EdFCaf51AEF8ddbD97d
20. Register oracle 0xFF4F473239471Cf4c3E51016Ab038E1afc42ED28
21. Register oracle 0x7FC0a1A2F3137AD8b805e9c5bfb981EB6299716b
22. Register oracle 0x027f3581DE89b88388d064cfdD129874DEb51920
23. Register oracle 0xDF1860f532E8C64D975bca49B923305FF54465e7
24. Register oracle 0xA2237C6779675289dAE7FF26D79baa55455Da25d
25. Register oracle 0x6c49D30e3E3d6402249Bf5043Cb524FC0670A9b0
26. Register oracle 0x2e8fccb7A34ECb53fEEE1380fb60dD5AF73181B8
27. Register oracle 0xaF4A4b960F6685f6Da4D9f9ae3866e6625F3D11E
28. Register oracle 0xba824487421AB007d414F4437f8Ee952bff6b45d
29. Register oracle 0xb6C9A566eC3D35cb4a2a1313D0DDe21b15133b14
30. Register oracle 0x1342BEFf7Ef21427c3478D813B1280675c80ea9b
31. Register oracle 0x51806A23B3A89F0cFe621d97a938E8770AC0BBDB
32. Register oracle 0x83a311eED59076089eDb88D8977310B99400f069
33. Register oracle 0xB6c74AbfF4adb405AF005bCFDbFf2953541DAE59
34. Register oracle 0x41Cb822B3B306D5476dA4514Adf1F27fe9B6ecC4
35. Register oracle 0x5847D8936A82CE4932354f9884E932bAc7B8896B
36. Register oracle 0xA187B2d9f26AE89E390df4cF0B619ff41Aa7e61A
37. Register oracle 0x95b6393DceaB0C3D86CfAeC90e8cbcA774Ed0439
38. Register oracle 0xe9739aaC76165359E545d4bC3e338c88A595E41C
39. Register oracle 0xAF729e23941a8b16412BdD62bDE029242D3f49d0
40. Register oracle 0x9B3A949eF0B001CAB1Ff840999Ad4De891f5486E
 => Received event OracleRegistered <1. OracleAddress: 0x865f7E551EfFF59883bEc7f6e575df065FEd0253>
 => Received event OracleRegistered <2. OracleAddress: 0xbB9Aff9778bA2756Dd6c54F24F2b378d2040AFd0>
 => Received event OracleRegistered <3. OracleAddress: 0x8aE6Dc77632A3f9Fd36B0511eC2A34d1471e9dC0>
 => Received event OracleRegistered <4. OracleAddress: 0x7388caC0Eee41231f4251b32a947c59de8391171>
 => Received event OracleRegistered <5. OracleAddress: 0x6432c6f32Fe380E127d014c51B1b3Bc0556fd600>
 => Received event OracleRegistered <6. OracleAddress: 0x3A662c7Fc05c82A9b96C9b443B2e69bCe7ac234F>
 => Received event OracleRegistered <7. OracleAddress: 0xc2fA1Dbb53B703C5d8e4BD1786FfB20c0047AE4C>
 => Received event OracleRegistered <8. OracleAddress: 0x8d24437D1703a12a36E48E4da1ea418f9e2a4D0F>
 => Received event OracleRegistered <9. OracleAddress: 0xD4604928EaDB7dED1FBaCEee952C361284A1F602>
 => Received event OracleRegistered <10. OracleAddress: 0x165911aBC35a34eCdE2fBFD48AdcDE17967E7EEe>
 => Received event OracleRegistered <11. OracleAddress: 0xe0609Da156ED3607066284723A68dCbaE73De996>
 => Received event OracleRegistered <12. OracleAddress: 0x056F9C218639EdFd6cd9476859E8378C933b43f5>
 => Received event OracleRegistered <13. OracleAddress: 0xcbF3C00C93fb30e3D9C478bA444C43bcD33456F2>
 => Received event OracleRegistered <14. OracleAddress: 0x60E4Ea5364FD4c2234e5F3bE63c18771414fD03B>
 => Received event OracleRegistered <15. OracleAddress: 0xAAd80873B32B52dEEbBeD20896C3988519897314>
 => Received event OracleRegistered <16. OracleAddress: 0x9d5b79fCe52ff86a69B3011D9Dc89835064BE4Bf>
 => Received event OracleRegistered <17. OracleAddress: 0xb422e6b4FCba903B329224c03E03bE8964b6b4d8>
 => Received event OracleRegistered <18. OracleAddress: 0x0639F365d58bB85730e727A1bbA1Be0075aB7765>
 => Received event OracleRegistered <19. OracleAddress: 0x367B225f21D12cdAfc9a1EdFCaf51AEF8ddbD97d>
 => Received event OracleRegistered <20. OracleAddress: 0xFF4F473239471Cf4c3E51016Ab038E1afc42ED28>
 => Received event OracleRegistered <21. OracleAddress: 0x7FC0a1A2F3137AD8b805e9c5bfb981EB6299716b>
 => Received event OracleRegistered <22. OracleAddress: 0x027f3581DE89b88388d064cfdD129874DEb51920>
 => Received event OracleRegistered <23. OracleAddress: 0xDF1860f532E8C64D975bca49B923305FF54465e7>
 => Received event OracleRegistered <24. OracleAddress: 0xA2237C6779675289dAE7FF26D79baa55455Da25d>
 => Received event OracleRegistered <25. OracleAddress: 0x6c49D30e3E3d6402249Bf5043Cb524FC0670A9b0>
 => Received event OracleRegistered <26. OracleAddress: 0x2e8fccb7A34ECb53fEEE1380fb60dD5AF73181B8>
 => Received event OracleRegistered <27. OracleAddress: 0xaF4A4b960F6685f6Da4D9f9ae3866e6625F3D11E>
 => Received event OracleRegistered <28. OracleAddress: 0xba824487421AB007d414F4437f8Ee952bff6b45d>
 => Received event OracleRegistered <29. OracleAddress: 0xb6C9A566eC3D35cb4a2a1313D0DDe21b15133b14>
 => Received event OracleRegistered <30. OracleAddress: 0x1342BEFf7Ef21427c3478D813B1280675c80ea9b>
 => Received event OracleRegistered <31. OracleAddress: 0x51806A23B3A89F0cFe621d97a938E8770AC0BBDB>
 => Received event OracleRegistered <32. OracleAddress: 0x83a311eED59076089eDb88D8977310B99400f069>
 => Received event OracleRegistered <33. OracleAddress: 0xB6c74AbfF4adb405AF005bCFDbFf2953541DAE59>
 => Received event OracleRegistered <34. OracleAddress: 0x41Cb822B3B306D5476dA4514Adf1F27fe9B6ecC4>
 => Received event OracleRegistered <35. OracleAddress: 0x5847D8936A82CE4932354f9884E932bAc7B8896B>
 => Received event OracleRegistered <36. OracleAddress: 0xA187B2d9f26AE89E390df4cF0B619ff41Aa7e61A>
 => Received event OracleRegistered <37. OracleAddress: 0x95b6393DceaB0C3D86CfAeC90e8cbcA774Ed0439>
 => Received event OracleRegistered <38. OracleAddress: 0xe9739aaC76165359E545d4bC3e338c88A595E41C>
 => Received event OracleRegistered <39. OracleAddress: 0xAF729e23941a8b16412BdD62bDE029242D3f49d0>
 => Received event OracleRegistered <40. OracleAddress: 0x9B3A949eF0B001CAB1Ff840999Ad4De891f5486E>
=> 1. Fetched indexes for oracleAddress = 0x865f7E551EfFF59883bEc7f6e575df065FEd0253, result = 6,2,1
=> 2. Fetched indexes for oracleAddress = 0xbB9Aff9778bA2756Dd6c54F24F2b378d2040AFd0, result = 9,6,2
=> 3. Fetched indexes for oracleAddress = 0x8aE6Dc77632A3f9Fd36B0511eC2A34d1471e9dC0, result = 3,5,4
=> 4. Fetched indexes for oracleAddress = 0x7388caC0Eee41231f4251b32a947c59de8391171, result = 8,6,5
=> 5. Fetched indexes for oracleAddress = 0x6432c6f32Fe380E127d014c51B1b3Bc0556fd600, result = 5,1,6
=> 6. Fetched indexes for oracleAddress = 0x3A662c7Fc05c82A9b96C9b443B2e69bCe7ac234F, result = 3,1,5
=> 7. Fetched indexes for oracleAddress = 0xc2fA1Dbb53B703C5d8e4BD1786FfB20c0047AE4C, result = 7,6,2
=> 8. Fetched indexes for oracleAddress = 0x8d24437D1703a12a36E48E4da1ea418f9e2a4D0F, result = 3,2,7
=> 9. Fetched indexes for oracleAddress = 0xD4604928EaDB7dED1FBaCEee952C361284A1F602, result = 2,4,6
=> 10. Fetched indexes for oracleAddress = 0x165911aBC35a34eCdE2fBFD48AdcDE17967E7EEe, result = 4,1,2
=> 11. Fetched indexes for oracleAddress = 0xe0609Da156ED3607066284723A68dCbaE73De996, result = 6,4,7
=> 12. Fetched indexes for oracleAddress = 0x056F9C218639EdFd6cd9476859E8378C933b43f5, result = 6,8,2
=> 13. Fetched indexes for oracleAddress = 0xcbF3C00C93fb30e3D9C478bA444C43bcD33456F2, result = 6,0,1
=> 14. Fetched indexes for oracleAddress = 0x60E4Ea5364FD4c2234e5F3bE63c18771414fD03B, result = 1,2,3
=> 15. Fetched indexes for oracleAddress = 0xAAd80873B32B52dEEbBeD20896C3988519897314, result = 9,3,5
=> 16. Fetched indexes for oracleAddress = 0x9d5b79fCe52ff86a69B3011D9Dc89835064BE4Bf, result = 1,6,2
=> 17. Fetched indexes for oracleAddress = 0xb422e6b4FCba903B329224c03E03bE8964b6b4d8, result = 0,2,7
=> 18. Fetched indexes for oracleAddress = 0x0639F365d58bB85730e727A1bbA1Be0075aB7765, result = 0,3,1
=> 19. Fetched indexes for oracleAddress = 0x367B225f21D12cdAfc9a1EdFCaf51AEF8ddbD97d, result = 5,4,5
=> 20. Fetched indexes for oracleAddress = 0xFF4F473239471Cf4c3E51016Ab038E1afc42ED28, result = 0,1,6
=> 21. Fetched indexes for oracleAddress = 0x7FC0a1A2F3137AD8b805e9c5bfb981EB6299716b, result = 5,6,4
=> 22. Fetched indexes for oracleAddress = 0x027f3581DE89b88388d064cfdD129874DEb51920, result = 4,2,3
=> 23. Fetched indexes for oracleAddress = 0xDF1860f532E8C64D975bca49B923305FF54465e7, result = 8,6,1
=> 24. Fetched indexes for oracleAddress = 0xA2237C6779675289dAE7FF26D79baa55455Da25d, result = 6,1,2
=> 25. Fetched indexes for oracleAddress = 0x6c49D30e3E3d6402249Bf5043Cb524FC0670A9b0, result = 4,6,7
=> 26. Fetched indexes for oracleAddress = 0x2e8fccb7A34ECb53fEEE1380fb60dD5AF73181B8, result = 4,0,2
=> 27. Fetched indexes for oracleAddress = 0xaF4A4b960F6685f6Da4D9f9ae3866e6625F3D11E, result = 6,0,4
=> 28. Fetched indexes for oracleAddress = 0xba824487421AB007d414F4437f8Ee952bff6b45d, result = 5,8,3
=> 29. Fetched indexes for oracleAddress = 0xb6C9A566eC3D35cb4a2a1313D0DDe21b15133b14, result = 5,7,2
=> 30. Fetched indexes for oracleAddress = 0x1342BEFf7Ef21427c3478D813B1280675c80ea9b, result = 9,2,0
=> 31. Fetched indexes for oracleAddress = 0x51806A23B3A89F0cFe621d97a938E8770AC0BBDB, result = 9,8,3
=> 32. Fetched indexes for oracleAddress = 0x83a311eED59076089eDb88D8977310B99400f069, result = 3,2,5
=> 33. Fetched indexes for oracleAddress = 0xB6c74AbfF4adb405AF005bCFDbFf2953541DAE59, result = 6,8,5
=> 34. Fetched indexes for oracleAddress = 0x41Cb822B3B306D5476dA4514Adf1F27fe9B6ecC4, result = 2,1,4
=> 35. Fetched indexes for oracleAddress = 0x5847D8936A82CE4932354f9884E932bAc7B8896B, result = 8,0,4
=> 36. Fetched indexes for oracleAddress = 0xA187B2d9f26AE89E390df4cF0B619ff41Aa7e61A, result = 3,4,0
=> 37. Fetched indexes for oracleAddress = 0x95b6393DceaB0C3D86CfAeC90e8cbcA774Ed0439, result = 4,7,8
=> 38. Fetched indexes for oracleAddress = 0xe9739aaC76165359E545d4bC3e338c88A595E41C, result = 4,8,5
=> 39. Fetched indexes for oracleAddress = 0xAF729e23941a8b16412BdD62bDE029242D3f49d0, result = 5,1,4
=> 40. Fetched indexes for oracleAddress = 0x9B3A949eF0B001CAB1Ff840999Ad4De891f5486E, result = 5,6,2
````
