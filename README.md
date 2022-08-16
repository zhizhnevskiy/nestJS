## NestJS Project
## Documentation
```bash
http://localhost:5000/api/docs
```
## Installation:
```bash
# install Nest
$ npm i -g @nestjs/cli
# Create new project:
$ nest new project-name
# production mode
$ npm run start
# watch mode
$ npm run start:dev
```

## Databases:
```bash
# mysql
$ npm install --save @nestjs/sequelize sequelize sequelize-typescript mysql2
# postgres
$ npm install --save pg pg-hstore 
# sequelize
$ npm install --save-dev @types/sequelize
```

## Command for Nest CLI:
```bash
$ nest generate module users
$ nest generate controller users
$ nest generate service users
```

## Helpers:
```bash
# For Config
$ npm i @nestjs/config
# For ENV generator for package.json
$ npm i cross-env
# For create documentation
$ npm i @nestjs/swagger swagger-ui-express
```