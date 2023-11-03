# Betcoin - SatsHack 2023

## Bitcoin Bet Platform

Betcoin...

## The Idea

> "The idea came from our own experience with the fund industry, both of us on the team have already/still interned at investment funds, in the normal asset analysis part. Crypto is not yet so widespread in Brazil, despite the growing expansion, and we saw the potential to decentralize the entire investment process in funds using smart contract technologies, like the ERC 6551. Thus arose whale.finance."

This project uses ERC 6551 to allow managers to hold assets from investors. In this way, we can basically make a descentralized asset management using EVM. The platform is designed for the two publics: The investors, who will be able to invest their tokens in really great funds around the work in a safe way, and the managers, who will be able to manage and hold investor tokens and can have a profit to themselves.

___


## User Roles

### Bettors

Features:

- **Funds List:** Can choose a fund in a list of funds to make an investment _(/fundslist route)_
- **Invest:** Can see stats about the fund chosen, like a performance chart, and then invest in the favorite ones _(/funds/id route)_
- **Dashboard:** Can see stats and metrics about your investments _(/investor route)_ + _(pivoted: not implement in the hackathon)_

### Platform



## How it Works

- A concise overview of the technical workings of the platform.
- The role of ERC 6551 and EVM in facilitating decentralized asset management.

![Project Photo](./frontend/src/assets/fund_creation.jpg)

### Technology

- Frontend: We used typescrit + tailwind css + vite.js to deploy more fast and be adjusted to our web3 project, that does not have backend
- Contracts: We use ERC 6551 to allow managers to control assets from investor at the same time that the assets are safe in a different address.


### Folder Structure

Here is the folder structure of the project with comments about files:

    .
    ├── README.md                                        
    ├── presentation/                                    # Directory where the presentation is
    ├── frontend/                                        # Directory for frontend using Typescript + Tailwind CSS + Vite JS
    │     └── src/                                       
    │          ├── App.tsx                               # Main application component
    │          ├── assets/                               
    │          ├── components/                          
    │          │      ├── ConnectWallet/                 # Component to facilitate wallet connection
    │          │      ├── DataDiv/                       # Component for data about fund
    │          │      ├── Footer/                        
    │          │      ├── FormInvestor/                  # Form component for investor details
    │          │      ├── FormManager/                   # Form component for manager details
    │          │      ├── FormSwap/                      # Component for swap functionality
    │          │      ├── Header/                        
    │          │      ├── LineChartComponent/            # Component to display line charts (lib Recharts)
    │          │      └── PieChartComponent/             # Component to display pie charts (lib Recharts)
    │          ├── contracts/                            
    │          │      ├── QuotaToken.ts                  # Quota token contract file
    │          │      ├── SafeAccount.ts                 # Safe account contract file
    │          │      └── WhaleFinance.ts                # WhaleFinance contract file
    │          ├── firebase/                             
    │          │      ├── test_database.json             # json with mock data to test database in firebase
    │          ├── pages/                                
    │          │      ├── CreateFund/                    # Manager: Page for creating a fund
    │          │      ├── DashboardId/                   # Manager: Dashboard of specific fund, here the manager can **swap tokens**
    │          │      ├── FundId/                        # Investor: Fund page with stats and **invest action**
    │          │      ├── FundsList/                     # Investor: List of funds presented in the platform
    │          │      ├── Home/                          # Home page
    │          │      ├── Investor/                      # Investor: Dashboard showing investments and stats
    │          │      ├── Layout/                        # Layout page to incorporate header in the app
    │          │      ├── Manager/                       # Manager: Funds list of funds managed by the manager
    │          │      ├── SuccessFund/                   # Page component to display fund creation success
    │          │      └── SuccessInvestment/             # Page component to display investment success
    │          └── utils/                                
    │                ├── addresses.ts                    # File containing contract addresses
    │                └── connectMetamask.ts              # Utility file to facilitate Metamask connection
    │
    └── whale-finance/                                   # Directory for smart contracts
          └── src/
          │     ├── Counter.sol                          # Counter smart contract file
          │     ├── ERC6551Registry.sol                  # ERC6551 Registry contract file
          │     ├── MockERC20.sol                        # Mock ERC20 contract file for testing
          │     ├── QuotaBeacon.sol                      # Quota Beacon contract file
          │     ├── QuotaToken.sol                       # Quota Token contract file
          │     ├── SafeAccount.sol                      # Safe Account contract file
          │     ├── WhaleFinance.sol                     # Main WhaleFinance contract file
          │     └── interface/                            
          │           ├── IERC6551Account.sol            # Interface file for ERC6551 Account
          │           ├── IERC6551Registry.sol           # Interface file for ERC6551 Registry
          │           └── IV2SwapRouter.sol              # Interface file for Uniswap V2 Swap Router
          └── test/
                └── WhaleFinance.t.sol                   # Test file for WhaleFinance contract


## Implemented Solution

### Demo

[Demo Link](https://www.loom.com/share/6913cf323b4644cfbcb3133377d3ca2c?sid=17cfc3fb-4d68-4b81-a225-4d8d25e18772)

### How to run locally steps

You need to run in the frontend:

```
npm install
```

The second step is to use the json file with keys and the .env keys of firebase to run and integrate with firebase the project:

json file in frontend/src/firebase and the .end in the root folder of frontend/ to connect with my firebase access

Then run the project with:

```
npm run dev
```


## Team

Bryan Borck (developer/designer)

Luiz Vasconcelos (blockchain developer)

Daniel Yuki (developer)
