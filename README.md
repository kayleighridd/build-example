# 📦 webpack Boilerplate

Webpack is based on this [Webpack Boilerplate](https://github.com/taniarascia/webpack-boilerplate) by [Tania Rascia](https://www.taniarascia.com)

# Installation

Clone this repo and npm install.

```bash
npm i
```

# Usage

## Development server

```bash
npm run storybook
```

## Production build

```bash
npm run build
```

# Known Issues

- The Storybook runs on uncompiled css, but should run the bundled version
- We currently need to run the `dev` task as well as the storybook in order to compile css for development use
- The css bundle that is created does not maintain classnames
- The documentation does not show Markdown in the "View code" feature
-
