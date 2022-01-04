# Job Application

Auto-deployment via vercel is active, find here the [Live Application](https://job-application.vercel.app/). This is a spontaneous project experiment for explorative experimentation with different frameworks and technologies to achieve an acceptable result pragmatically.

## Prerequisites

> This project was tested and setup on MacOS and makes no claim to run under Windows.

The following installations are required before running the project on your machine:

- [node 12+ LTS](https://nodejs.org/en/)

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build-ssr
$ yarn start

# generate static project (renamed for vercel hosting)
$ yarn build
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Dev Setup

> This project was tested and setup on MacOS and makes no claim to run under Windows.

For great TypeScript support [VS Code](https://code.visualstudio.com/) is recommended as your code editor. Furthermore the following extensions might be useful for this project:

- Babel JavaScript _VSCode syntax highlighting for today's JavaScript_
- EditorCOnfig for VS Code _EditorConfig Support for Visual Studio Code_
- ESLint _Integrates ESLint JavaScript into VS Code_
- Vetur _Vue tooling for VS Code_
- Prettier _Code formatter using prettier_

## TODOs

[ ] Migrate all scripts to `lang='ts'`  
[ ] Move scoped styles to global custom theme (variables.scss)  
[ ] Load all static JSON data via graphQL backend  
[ ] Add simple canvas animation / etc. made with wasmand rust
