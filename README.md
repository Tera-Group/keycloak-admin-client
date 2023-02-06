[![Build Status](https://travis-ci.org/Tera-Group/keycloak-admin-client.svg?branch=main)](https://travis-ci.org/Tera-Group/keycloak-admin-client.svg?branch=main)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

# Keycloak Admin JS client

Keycloak admin client generated from [keycloak-openapi](https://github.com/ccouzens/keycloak-openapi).

## Install

```bash
npm i keycloak-admin-client simple-oauth2
npm i --save-dev @types/simple-oauth2
```

## Usage

```ts
import { ClientCredentials } from "simple-oauth2";
import {
  createAxiosInstance,
  UsersApi,
  Configuration,
  UserRepresentation
} from "../src";

const keycloakURL = "<keycloak_url>";
const realm = "<realm>";

// acquire access token. Make sure the client has sufficient roles to call
// admin apis
const client = new ClientCredentials({
  client: {
    id: "<client_id>",
    secret: "<client_secret>"
  },
  auth: {
    tokenHost: keycloakURL,
    tokenPath: `/realms/${realm}/protocol/openid-connect/token`
  }
});
const accessToken = (await client.getToken({})).token["access_token"] as string;

// create the users api
const api = new UsersApi(
  new Configuration({
    accessToken
  }),
  `${keycloakURL}/admin/realms`,
  createAxiosInstance()
);

// create a new user
const resp = await api.realmUsersPost(realm, {
  email: "john.doe@domain.com",
  username: "johnd",
  firstName: "John",
  lastName: "Doe",
  enabled: true
});
```

## Upgrade the library to a new Keycloak version

1. Update field `inputSpec` from [keycloak_admin_api_codegen.yml](keycloak_admin_api_codegen.yml)
2. Regenerate client code
   ```
   openapi-generator generate -c keycloak_admin_api_codegen.yml
   ```

## Setting travis and coveralls badges

1. Sign in to [travis](https://travis-ci.org/) and activate the build for your project.
2. Sign in to [coveralls](https://coveralls.io/) and activate the build for your project.
