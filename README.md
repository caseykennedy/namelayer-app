> This Project is based on [Obytes starter](https://starter.obytes.com)

## 🔗 Requirements

## Requirements

- [React Native dev environment ](https://reactnative.dev/docs/environment-setup)
- [Node.js LTS release](https://nodejs.org/en/)
- [Git](https://git-scm.com/)
- [Watchman](https://facebook.github.io/watchman/docs/install#buildinstall), required only for macOS or Linux users
- [Yarn](https://classic.yarnpkg.com/en/docs/install)
- [Expo Cli](https://docs.expo.dev/workflow/expo-cli/)
- [VS Code Editor](https://code.visualstudio.com/download) ⚠️ Make sure to install all recommended extension from `.vscode/extensions.json`

## 👋 Quick start

Clone the repo to your machine and install deps :

```sh
git clone https://github.com/user/repo-name

cd ./repo-name

yarn
```

To run the app on ios

```sh
yarn ios
```

To run the app on Android

```sh
yarn android
```

## ✍️ Documentation

- [Rules and Conventions](https://starter.obytes.com/docs/getting-started/rules-and-convetions)
- [Project structure](https://starter.obytes.com/docs/getting-started/project-structure)
- [Environment vars and config](https://starter.obytes.com/docs/getting-started/environment-vars-config)
- [UI and Theming](https://starter.obytes.com/docs/ui-and-theme/ui-theming)
- [Components](https://starter.obytes.com/docs/ui-and-theme/components)
- [Forms](https://starter.obytes.com/docs/ui-and-theme/Forms)
- [Data fetching](https://starter.obytes.com/docs/guides/data-fetching)
- [Contribute to starter](https://starter.obytes.com/docs/contribute)

## Express Server

================================

A simple base for fullstack Typescript projects with a shared completely typed
api. Note that the server allows CORS from everywhere. This project is based on
[Typescript-Node-Starter](https://github.com/Microsoft/TypeScript-Node-Starter)

## Running backend

    cd server; yarn; npm run watch

## Development

In order to add a new api endpoint, it must be added first in
server/api/base.ts. After that, the compiler will throw errors until both
server/controllers/routes.ts and client/src/App.tsx are updated accordingly.
