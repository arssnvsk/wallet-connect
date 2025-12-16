# Wallet Playground

Wallet Playground is a Web3 frontend pet project focused on building a **production-ready wallet connection layer** with proper UX, state management, and on-chain data handling.

The goal of this project is to demonstrate how wallet-related logic should be structured, abstracted, and presented in real-world dApps, rather than being a simple “connect wallet” demo.

---

## 🚀 Tech Stack

- **React / Next.js (App Router)**
- **TypeScript**
- **wagmi**
- **viem**
- **Ethereum (EVM)**
- **Tailwind CSS**
- **shadcn/ui**

---

## ✨ Features

### Wallet Connection
- Wallet connection via **wagmi connectors**
- Support for multiple wallets (Injected / WalletConnect-ready)
- Explicit handling of wallet lifecycle states:
    - `disconnected`
    - `connecting`
    - `reconnecting`
    - `connected`
- Auto-reconnect on page reload
- Safe disconnect flow with disabled actions during pending states

---

### Wallet UX & State Management
- Clear separation between **Web3 logic** and **UI**
- Wallet state abstraction on top of wagmi APIs
- UI driven by wallet state machine instead of raw wallet data
- Full-screen loading and skeleton states
- No direct dependency on `address` checks in UI

---

### Account Information
- Wallet address display
- Copy-to-clipboard functionality
- ENS name resolution (when available)
- ENS avatar support with graceful fallback

---

### Balances
- Native token balance (ETH)
- ERC-20 token balance (example: PYUSD)
- Batched on-chain reads using `useReadContracts`
- Correct handling of token `decimals` and `symbol`
- Balance masking / hiding (privacy-friendly UX)
- Skeleton loaders during balance fetching

---

### Token Configuration
- Token contract addresses defined in a **centralized configuration**
- No hardcoded contract addresses in UI components
- Easy extensibility for adding new tokens or networks

---

### Error & Edge Case Handling
- Safe handling of:
    - Wallet reconnects
    - Pending states
    - Disabled actions during async operations
- Architecture prepared for:
    - User rejection errors
    - Unsupported networks
    - RPC failures

---

## 🧱 Project Architecture

The project follows a **feature-oriented architecture** with clear boundaries
### Key principles:
- No direct wagmi calls inside UI components
- All Web3 logic is encapsulated in hooks
- UI components are stateless and declarative
- Contract addresses and chains are centralized

---

## 🧠 Design Decisions

- **wagmi + viem** were chosen for their modern API and strong typing
- ERC-20 data is fetched in batches to minimize RPC calls
- Wallet state is treated as a finite state machine
- UX prioritizes clarity of async states and user feedback
- The project is intentionally frontend-focused; smart contracts are treated as external dependencies

---

## 🧪 What This Project Demonstrates

- How to properly structure Web3 frontend code
- How to build a reusable wallet connection layer
- How to handle wallet UX edge cases
- How to work with on-chain data safely and efficiently
- How to avoid common anti-patterns in Web3 frontends

---

## 📦 Getting Started

```bash
npm install
npm run dev
