## Versions

| Package   | Version |
|:-------:|:-------------|
|Truffle| v5.4.8 |
|Solidity| 0.6.2 |
|Node| v15.5.1 |
|Web3.js| v1.3.5 |


## Results

### Unit Tests Terminal Output

```bash
Using network 'development'.


Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.



  ✓ can Create a Star (196ms)
  ✓ lets user1 put up their star for sale (258ms)
  ✓ lets user1 get the funds after the sale (376ms)
  ✓ lets user2 buy a star, if it is put up for sale (378ms)
  ✓ lets user2 buy a star and decreases its balance in ether (364ms)
  ✓ can add the star name and star symbol properly (158ms)
  ✓ lets 2 users exchange stars (401ms)
  ✓ lets a user transfer a star (180ms)
  ✓ lookUptokenIdToStarInfo test (100ms)

  9 passing (2s)
```

## To deploy in Brinkeby

Execute the command

```bash
truffle migrate --network rinkeby --reset
```

### Deployment Terminal Output

```bash
Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.



Migrations dry-run (simulation)
===============================
> Network name:    'rinkeby-fork'
> Network id:      4
> Block gas limit: 30000000 (0x1c9c380)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > block number:        9222619
   > block timestamp:     1630590516
   > account:             0xf9B8DF9C10a3f1B58BBB43d73d0f244a06dF6356
   > balance:             0.087614422857352755
   > gas used:            210237 (0x3353d)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00210237 ETH

   -------------------------------------
   > Total cost:          0.00210237 ETH


2_deploy_contracts.js
=====================

   Deploying 'StarNotary'
   ----------------------
   > block number:        9222621
   > block timestamp:     1630590542
   > account:             0xf9B8DF9C10a3f1B58BBB43d73d0f244a06dF6356
   > balance:             0.057696162857352755
   > gas used:            2964463 (0x2d3bef)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.02964463 ETH

   -------------------------------------
   > Total cost:          0.02964463 ETH


Summary
=======
> Total deployments:   2
> Final cost:          0.031747 ETH





Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 30000000 (0x1c9c380)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x10954ba8f9079f20162a44f8c9d98aef00b16613cc0b026084ef28abd01151f1
   > Blocks: 1            Seconds: 9
   > contract address:    0x38da3Ec97e1D4097Cbf192471B486a6458846328
   > block number:        9222622
   > block timestamp:     1630590568
   > account:             0xf9B8DF9C10a3f1B58BBB43d73d0f244a06dF6356
   > balance:             0.087451422857352755
   > gas used:            226537 (0x374e9)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00226537 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00226537 ETH


2_deploy_contracts.js
=====================

   Deploying 'StarNotary'
   ----------------------
   > transaction hash:    0xe3ec8ee2bfde98df83da495a9d44ed8f87e50b3cb8b8655363842fb8fe303789
   > Blocks: 0            Seconds: 8
   > contract address:    0x2E8C71DD94d71503Fd5cBDF1EC324aE23f9901aB
   > block number:        9222624
   > block timestamp:     1630590598
   > account:             0xf9B8DF9C10a3f1B58BBB43d73d0f244a06dF6356
   > balance:             0.056371162857352755
   > gas used:            3062263 (0x2eb9f7)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.03062263 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.03062263 ETH


Summary
=======
> Total deployments:   2
> Final cost:          0.032888 ETH

```

### Contract Address

<https://rinkeby.etherscan.io/address/0x2e8c71dd94d71503fd5cbdf1ec324ae23f9901ab>

### Token Address

<https://rinkeby.etherscan.io/token/0x2e8c71dd94d71503fd5cbdf1ec324ae23f9901ab>

### Transaction Hashes

<https://rinkeby.etherscan.io/tx/0x7e5075c350490d7cbc1e56931c7ee07cc4b510b855373608b5b4e1144d783ae4>