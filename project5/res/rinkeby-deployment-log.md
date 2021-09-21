```bash
=> migrate --network rinkeby

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.



Migrations dry-run (simulation)
===============================
> Network name:    'rinkeby-fork'
> Network id:      4
> Block gas limit: 29941381 (0x1c8de85)


1_initial_migration.js
======================

   Replacing 'Migrations'
   ----------------------
   > block number:        9332754
   > block timestamp:     1632247228
   > account:             0xf9B8DF9C10a3f1B58BBB43d73d0f244a06dF6356
   > balance:             17.387828107411498653
   > gas used:            258220 (0x3f0ac)
   > gas price:           100 gwei
   > value sent:          0 ETH
   > total cost:          0.025822 ETH

   -------------------------------------
   > Total cost:            0.025822 ETH


2_deploy_contracts.js
=====================

   Replacing 'SquareVerifier'
   --------------------------
   > block number:        9332756
   > block timestamp:     1632247236
   > account:             0xf9B8DF9C10a3f1B58BBB43d73d0f244a06dF6356
   > balance:             17.255590907411498653
   > gas used:            1294834 (0x13c1f2)
   > gas price:           100 gwei
   > value sent:          0 ETH
   > total cost:          0.1294834 ETH


   Replacing 'SolnSquareVerifier'
   ------------------------------
   > block number:        9332757
   > block timestamp:     1632247292
   > account:             0xf9B8DF9C10a3f1B58BBB43d73d0f244a06dF6356
   > balance:             16.862603907411498653
   > gas used:            3929870 (0x3bf70e)
   > gas price:           100 gwei
   > value sent:          0 ETH
   > total cost:          0.392987 ETH

   -------------------------------------
   > Total cost:           0.5224704 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.5482924 ETH





Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 29970705 (0x1c95111)


1_initial_migration.js
======================

   Replacing 'Migrations'
   ----------------------
   > transaction hash:    0xbc68058c8b1d33799c1c5960af5d543135cbe91514c858ba56fa46373c0d48dd
   > Blocks: 0            Seconds: 9
   > contract address:    0x8b69a4787967370545f1957d97eA4D4761d52A1e
   > block number:        9332760
   > block timestamp:     1632247336
   > account:             0xf9B8DF9C10a3f1B58BBB43d73d0f244a06dF6356
   > balance:             17.386198107411498653
   > gas used:            274520 (0x43058)
   > gas price:           100 gwei
   > value sent:          0 ETH
   > total cost:          0.027452 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:            0.027452 ETH


2_deploy_contracts.js
=====================

   Replacing 'SquareVerifier'
   --------------------------
   > transaction hash:    0x33c23a04a888c55ad250297f92c8c8fba3da0db3a7dbad435b224b59d4a6bd33
   > Blocks: 1            Seconds: 12
   > contract address:    0xb69D653a2cd9D53228fE633B1de11948d5Fb543c
   > block number:        9332762
   > block timestamp:     1632247366
   > account:             0xf9B8DF9C10a3f1B58BBB43d73d0f244a06dF6356
   > balance:             17.252120907411498653
   > gas used:            1294834 (0x13c1f2)
   > gas price:           100 gwei
   > value sent:          0 ETH
   > total cost:          0.1294834 ETH


   Replacing 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0x65bec0fbbd8ceb3755c9907f63cf866205ee21950c046d1f65adc11aa2a4946c
   > Blocks: 1            Seconds: 8
   > contract address:    0x8Fd8eD36F6be64d368d3580b88acbF1b67087F97
   > block number:        9332763
   > block timestamp:     1632247381
   > account:             0xf9B8DF9C10a3f1B58BBB43d73d0f244a06dF6356
   > balance:             16.826873907411498653
   > gas used:            4252470 (0x40e336)
   > gas price:           100 gwei
   > value sent:          0 ETH
   > total cost:          0.425247 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:           0.5547304 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.5821824 ETH
```
