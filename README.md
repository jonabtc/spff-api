# TypeScript Express API Bootstrap (base / project starter)

This is a repository intended to serve as a starting point if you want to bootstrap a express API project in TypeScript.

## Features

- [TypeScript](https://www.typescriptlang.org/) (v4)
- [ts-node-dev](https://github.com/wclr/ts-node-dev)
- [Prettier](https://prettier.io/)
- [TSLint](https://palantir.github.io/tslint/) 
- [Jest](https://jestjs.io) (v27)

## Running the app

```
# install dependencies
yarn 

# run in dev mode on port 3000
yarn run dev

# generate production build
yarn run build

# run generated content in dist folder on port 3000
yarn run start
```

## Testing (NOT IMPLEMENTED)

### Jest with supertest watching only no versioned changes

```
yarn run test
```

### Jest with supertest all test

```
yarn run test:all
```
### Postman test
In the \__postman__ directory you will find a file with the requests, you only need to import the file into Postman and run

## Linting

```
# run linter
npm run lint

# fix lint issues
npm run lint:fix
```
