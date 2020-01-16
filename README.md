# koa-apollo-graphql-playground

[![Build Status](https://travis-ci.org/alexanderVu/koa-apollo-graphql-playground.svg?branch=master)](https://travis-ci.org/alexanderVu/koa-apollo-graphql-playground)
[![Coverage Status](https://coveralls.io/repos/github/alexanderVu/koa-apollo-graphql-playground/badge.svg?branch=master)](https://coveralls.io/github/alexanderVu/koa-apollo-graphql-playground?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/alexanderVu/koa-apollo-graphql-playground/badge.svg?targetFile=package.json)](https://snyk.io/test/github/alexanderVu/koa-apollo-graphql-playground?targetFile=package.json)

> Template or playground for Apollo-Server (GraphQL) on KoaJS.


This project is not for teaching GraphQL neither nor KoaJS. It is a help to quickly set up a API based on KoaJS with Apollo GraphQL Server.

[![js-standard-style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](http://standardjs.com)

## Install

Use git to clone the repository.

```bash
git clone git@github.com:alexanderVu/koa-apollo-graphql-playground.git
```

## Usage

```bash
cd koa-apollo-graphql-playground
npm install
npm run serve
```

## CLI

* *serve* - Start the API with nodemon for hot reload during development
* *start* - Node default start script to start api in production
* *test* - Run jest test utility with coverall
* *test:unit* - Run jest test utility only
* *lint* - Run eslint standard
* *lint:fix* - Run eslint with fix option

## A top-level directory layout

> Folder structure options for software project

    .
    ├── lib
    │   ├── apollo              # Apollo Server settings
    │   ├── middleware          # Koa middleware settings
    │   ├── routes              # API routes
    │   ├── api.js              # HTTP API settings
    │   ├── log.js              # Custom logging output
    │   ├── wsApi.js            # WebSockets API settings
    ├── .env                    # loads environment variables into process.env
    ├── index.js                # API start script
    ├── LICENSE
    └── README.md

## Apollo directory layout

> Folder structure options for Apollo Server

    .
    ├── ...
    ├── apollo                  # Apollo Server settings
    │   ├── datasources         # Data sources encapsulate fetching data
    │   ├── directives          # Schema custom directives
    │   ├── schemas             # GraphQL schemas and resolvers
    │   ├── util                # Helper files
    │   ├── context.js          # Settings for Apollo Server context object
    │   ├── index.js            # Initiate Apollo Server
    │   └── schema.js           # Join and init all schema definitions
    └── ...

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
