# 🚀 RaasGenAI Dashboard MVP

![Node.js Version](https://img.shields.io/badge/Node-18+-green)
![License](https://img.shields.io/badge/License-MIT-blue)
![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen)
![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-yellowgreen)

This is the **AWS-ready MVP** of the RaasGenAI Dashboard — the first visual interface of **RaasGenAI**, the intelligent brain of the Raasystem Ecosystem. It provides a clean interface for analytics, users, revenue, and sessions, serving as the foundation for future integration with RaasFap and RaasFan platforms.

---

## 🌍 About RaasGenAI

RaasGenAI powers the Raasystem Ecosystem:

- **RABEX** – AI-driven trading engine  
- **Raaspay** – instant crypto-fiat conversions  
- **Raaswallet** – secure non-custodial wallet  
- **RaasFap & RaasFan** – community & content monetization platforms  

This dashboard MVP proves RaasGenAI’s ability to generate structured digital products and manage the ecosystem visually.

---

## ✨ Features (MVP)

- **Navigation:** Home, Analytics, Settings (via Navbar)  
- **Cards / Metrics:** Users, Revenue, Active Sessions, Total Users, Total Revenue  
- **Charts:**
  - Revenue Trend (Line Chart)  
  - Volume by Asset (Bar Chart)  
  - Liquidity Distribution (Pie Chart)  
- **AI Chat Stub:** Type “Gold price” → mock or N/A response  
- **Environment Variables Display:** Shows live API/WebSocket URLs from `.env`  

**Responsive UI:** Fully mobile-ready and modern design with Tailwind + shadcn/ui  

---

## 🛠️ Tech Stack

- React (Frontend framework)  
- Vite (Fast build tool)  
- Tailwind CSS (Utility-first CSS framework)  
- shadcn/ui (Modern UI components)  
- React Router (Routing)  

---

## ⚡ Getting Started

### Prerequisites
- Node.js v18+
- npm or yarn

### Installation
```bash
# Clone the repo
git clone https://github.com/RaasystemEcosystem/raasgenai_dashboard.git

# Enter project directory
cd raasgenai_dashboard

# Install dependencies
npm install

# Start development server
npm run dev
