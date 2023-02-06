import { beforeAll, describe, expect, it } from '@jest/globals';
import { ClientCredentials } from 'simple-oauth2';

import {
  createAxiosInstance,
  UsersApi,
  Configuration,
  UserRepresentation,
} from '../src';

describe('APIs', () => {
  const keycloakURL = 'http://localhost:8080';
  const realm = 'test-realm';
  let accessToken: string;

  beforeAll(async () => {
    const client = new ClientCredentials({
      client: {
        id: 'admin-client',
        secret: 'my-secret',
      },
      auth: {
        tokenHost: keycloakURL,
        tokenPath: `/realms/${realm}/protocol/openid-connect/token`,
      },
    });
    return (await client.getToken({})).token['access_token'] as string;
  });

  describe('UsersApi', () => {
    let api: UsersApi;

    beforeAll(async () => {
      api = new UsersApi(
        new Configuration({
          accessToken,
        }),
        `${keycloakURL}/admin/realms`,
        createAxiosInstance()
      );
    });

    it('should allow adding user', async () => {
      let getResp = await api.realmUsersCountGet(realm);
      expect(getResp.data).toEqual(0);

      const postResp = await api.realmUsersPost(realm, {
        email: 'john.doe@domain.com',
        username: 'johnd',
        firstName: 'John',
        lastName: 'Doe',
        enabled: true,
      });
      expect(postResp.status).toEqual(201);

      getResp = await api.realmUsersCountGet(realm);
      expect(getResp.data).toEqual(1);

      const listUserResp = await api.realmUsersGet(
        realm,
        true,
        'john.doe@domain.com'
      );
      expect(listUserResp.data).toHaveLength(1);
      const userResp = listUserResp.data[0] as UserRepresentation;
      expect(userResp.id).toBeTruthy();

      const deleteResp = await api.realmUsersIdDelete(
        realm,
        userResp.id as string
      );
      expect(deleteResp.status).toEqual(204);
    });
  });
});
