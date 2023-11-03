# Betcoin - SatsHack 2023

## Bitcoin Bet Platform

Betcoin...

## The Idea

This project uses ERC 6551 to allow managers to hold assets from investors. In this way, we can basically make a descentralized asset management using EVM. The platform is designed for the two publics: The investors, who will be able to invest their tokens in really great funds around the work in a safe way, and the managers, who will be able to manage and hold investor tokens and can have a profit to themselves.

___


## User Roles

### Bettors

Features:

- *Bet Theme:* Can choose a theme to bet (/ route)
- *Bet Against Option:* Can choose to bet against other person in the platform's orderbook (/bet/id route)
- *Create Bet:* Can create a bet to people bet against it (/createbet/id/option route)
- *Create Theme:* Can create a theme to make people bet against each other (/createtheme route) + (pivoted: not implement in the hackathon)

## How it Works

![Project Photo](./frontend/src/assets/fund_creation.jpg)

### Technology

- Frontend: We used react.js + tailwind css to adjust our project
- Backend: We used Node.js with the tecnologies associated with Bitcoin

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
    │          │      ├── Orderbook/                     # Component to demo orderbook
    │          │      ├── Header/                        
    │          └── pages/                                
    │                 ├── Home/                          # Home: Page where the bet themes are displayed
    │                 ├── CreateBet/                     
    │                 ├── CreateTheme/                   
    │                 ├── Bet/                           # Bet: Location of orderbook and option to create bet
    │                 ├── Layout/                        # Layout page to incorporate header in the app
    │                 ├── MyBets/                        # Bashboard to see status of user bets
    │                 └── SuccessBet/                    # Page component to display bet success
    │
    └── backend/                                         # Directory for smart contracts
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


npm install


Then run the project with:


npm run start



## Team

Bryan Borck (developer/designer)

Luiz Vasconcelos (blockchain developer)

Daniel Yuki (developer)
