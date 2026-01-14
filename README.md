# PTQ Monorepo

This is a comprehensive monorepo application built with a separate **Frontend** (React + Vite) and **Backend** (NestJS), managed by [Turborepo](https://turbo.build/).

## 🛠️ Tech Stack

- **Monorepo Manager**: [Turborepo](https://turbo.build/)
- **Package Manager**: [pnpm](https://pnpm.io/) / npm (npm is currently configured)
- **Frontend**:
  - Framework: [React](https://react.dev/)
  - Build Tool: [Vite](https://vitejs.dev/)
  - Language: TypeScript
- **Backend**:
  - Framework: [NestJS](https://nestjs.com/)
  - Language: TypeScript

## 🚀 Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm (or pnpm if you prefer, though the project lockfile is `package-lock.json`)

### Installation

Install dependencies for all workspaces from the root directory:

```bash
npm install
```

### Running Development Server

To start both the frontend and backend in development mode properly:

```bash
npm run dev
```

This uses Turbo to run the `dev` script in both workspaces simultaneously.

- **Frontend**: http://localhost:5173 (default Vite port)
- **Backend**: http://localhost:3000 (default NestJS port)

## 📦 Building

To build all apps for production:

```bash
npm run build
```

This triggers the build scripts for both the `frontend` and `backend` workspaces.

## 📂 Project Structure

```bash
.
├── backend/            # NestJS API application
├── frontend/           # Vite + React client application
├── package.json        # Root configuration and scripts
└── turbo.json          # Turborepo pipeline configuration
```

## 📜 Scripts

Run these from the root directory:

- `npm run dev`: Starts development servers for all apps.
- `npm run build`: builds all apps.
- `npm run prod`: Runs the production build (builds + runs prod start).

## 📝 License

This project is private and unlicensed.
