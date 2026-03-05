# Gifts and Merch — Fullstack Application

Monorepo: NestJS backend, React client app, and React admin panel.

## Project structure

| Folder       | Description                          |
|-------------|--------------------------------------|
| `backend/`  | API (NestJS)                         |
| `frontend/` | Client application (React, Vite)     |
| `admin/`    | Admin panel (React, Vite)            |

## Tech stack

- **Backend:** NestJS
- **Frontend:** React, TypeScript, Vite
- **Admin:** React, TypeScript, Vite

## Requirements

- Node.js 18+
- npm 7+ (workspaces support)

## Installation

Clone the repository and install dependencies from the **project root**:

```bash
git clone <repository-url>
cd gifts-and-merch
npm install
```

Dependencies will be installed for all apps (admin, backend, frontend).

## Running the apps

All commands are run from the project root.

### Development

Run a single app:

```bash
npm run dev:frontend   # client app
npm run dev:admin      # admin panel
npm run dev:backend    # backend (NestJS in watch mode)
```

Run all apps at once:

```bash
npm run dev:all
```

By default, `npm run dev` starts only the backend.

### Build

Build all apps:

```bash
npm run build
```

Build individually:

```bash
npm run build:frontend
npm run build:admin
npm run build:backend
```
