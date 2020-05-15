# Webpack 5 Module Federation with ts-loader

This is a version of the Basic One-Way example at the repository below, modified to use ts-loader.

https://github.com/module-federation/module-federation-examples


# Basic One-Way Example

This example demos a basic host application loading remote component.

- `app1` is the host application.
- `app2` standalone application which exposes `Button` component.

# Running Demo

Run `yarn start`. This will build and serve both `app1` and `app2` on ports 3001 and 3002 respectively.

- [localhost:3001](http://localhost:3001/) (HOST)
- [localhost:3002](http://localhost:3002/) (STANDALONE REMOTE)
