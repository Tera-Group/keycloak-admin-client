[![Build Status](https://travis-ci.org/Tera-Group/keycloak-admin-js.svg?branch=main)](https://travis-ci.org/Tera-Group/keycloak-admin-js.svg?branch=main)
[![Coverage Status](https://coveralls.io/repos/github/Tera-Group/keycloak-admin-js/badge.svg?branch=main)](https://coveralls.io/github/Tera-Group/keycloak-admin-js?branch=main)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

# Keycloak Admin JS client

## Usage

- Use in Typescript

```ts
import { Keycloak } from "keycloak-admin-js";

// create an authenticated keycloak client
const kc = Keycloak.authenticate(url, realmID, clientID, clientSecret);

// list users
const users = await kc.admin.realm(realmID).users.list();
```

- Use in Javascript

```js
const Keycloak = require("keycloak-admin-js").Keycloak;

// create an authenticated keycloak client
const kc = Keycloak.authenticate(url, realmID, clientID, clientSecret);

// list users
const users = await kc.admin.realm(realmID).users.list();
```

## Setting travis and coveralls badges

1. Sign in to [travis](https://travis-ci.org/) and activate the build for your project.
2. Sign in to [coveralls](https://coveralls.io/) and activate the build for your project.
