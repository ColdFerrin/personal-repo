# personal-repo

Personal portfolio site built with **Vite + React + TypeScript**, deployed to [ferrinkatz.com](https://ferrinkatz.com).

## Tech Stack

- [React 18](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [React Router v6](https://reactrouter.com/)

## Getting Started

### Install dependencies

```bash
npm install
```

### Run in development mode

```bash
npm start
```

Opens at [http://localhost:5173](http://localhost:5173).

### Build for production

```bash
npm run build
```

Output goes to the `build` folder.

### Preview production build

```bash
npm run preview
```

## Deployment

Pushes to `master` automatically trigger the [Deploy to Pages](.github/workflows/DeployToPages.yml) GitHub Actions workflow, which:

1. Installs dependencies and runs `tsc && vite build`
2. Copies the build output to the [ColdFerrin.github.io](https://github.com/ColdFerrin/ColdFerrin.github.io) repository
3. Commits and pushes the new build with an auto-generated timestamp message
