# hcard Builder

Live preview for building hcards based on [hCard 1.0 spec](https://microformats.org/wiki/hcard)

Scrum board here for future additions: https://trello.com/invite/b/ZpJFsMMz/ATTI89e2206cce239b821ea2b9795ccba415962E0074/hcard-builder 

## Testing

https://hcard.geekhood.net/ can be used for validating the output of the vcard.

**Note:** Using the "Fragment" validator will cause an error if an image exists. This is due to Vue not putting a closing tag on the <img> element which is only valid in HTML5 and not XHTML. Because of this, for accurate testing you should copy the vcard HTML to a separate file and validate via the Upload tab which supports HTML5.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
yarn install
```

### Compile and Hot-Reload for Development

```sh
yarn dev
```

### Compile and Minify for Production

```sh
yarn build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
yarn test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
yarn test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
yarn build
yarn test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
yarn lint
```
