```bash
=> migrate --network rinkeby

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.



Migrations dry-run (simulation)
===============================
> Network name:    'rinkeby-fork'
> Network id:      4
> Block gas limit: 29970677 (0x1c950f5)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > block number:        9303132
   > block timestamp:     1631802252
   > account:             0xf9B8DF9C10a3f1B58BBB43d73d0f244a06dF6356
   > balance:             19.347690230875698945
   > gas used:            258220 (0x3f0ac)
   > gas price:           100 gwei
   > value sent:          0 ETH
   > total cost:          0.025822 ETH

   -------------------------------------
   > Total cost:            0.025822 ETH


2_deploy_contracts.js
=====================

   Deploying 'SquareVerifier'
   --------------------------
   > block number:        9303134
   > block timestamp:     1631802261
   > account:             0xf9B8DF9C10a3f1B58BBB43d73d0f244a06dF6356
   > balance:             19.215453030875698945
   > gas used:            1294834 (0x13c1f2)
   > gas price:           100 gwei
   > value sent:          0 ETH
   > total cost:          0.1294834 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > block number:        9303135
   > block timestamp:     1631802316
   > account:             0xf9B8DF9C10a3f1B58BBB43d73d0f244a06dF6356
   > balance:             18.822466030875698945
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
> Block gas limit: 29970676 (0x1c950f4)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x27cc90bdd610e90dd0312b05e7959d5a4384345bb3b8d8478ec2aa33eb4f9d19
   > Blocks: 2            Seconds: 17
   > contract address:    0xD7C4DC982B06eB32203B88D9e201C8FD16Ab7890
   > block number:        9303139
   > block timestamp:     1631802368
   > account:             0xf9B8DF9C10a3f1B58BBB43d73d0f244a06dF6356
   > balance:             19.346060230875698945
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

   Deploying 'SquareVerifier'
   --------------------------
   > transaction hash:    0xb59aa6bb41c3374939fa8ed6c886ce1378a779710783c86b2335897d048a68eb
   > Blocks: 1            Seconds: 8
   > contract address:    0x011eCbdd8D9b42c4bbE2d4Aac3a3202328BAeBe4
   > block number:        9303141
   > block timestamp:     1631802398
   > account:             0xf9B8DF9C10a3f1B58BBB43d73d0f244a06dF6356
   > balance:             19.211983030875698945
   > gas used:            1294834 (0x13c1f2)
   > gas price:           100 gwei
   > value sent:          0 ETH
   > total cost:          0.1294834 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0x79179a6d6dcc22f0d08c5ca2580aabf7d708aa64d85aa2cadd81acbc3a23565f
   > Blocks: 0            Seconds: 9
   > contract address:    0xfE263A9CD86DC74d0Fa08A26886D9e6A8de2E971
   > block number:        9303142
   > block timestamp:     1631802413
   > account:             0xf9B8DF9C10a3f1B58BBB43d73d0f244a06dF6356
   > balance:             18.786736030875698945
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
