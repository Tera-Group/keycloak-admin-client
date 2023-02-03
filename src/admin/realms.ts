import { Endpoint } from '../endpoint';
import { AdminUserEndpoint, AdminUsersEndpoint } from './user';

export class AdminRealmsEndpoint extends Endpoint {}

export class AdminRealmEndpoint extends Endpoint {
  private _users?: AdminUsersEndpoint;

  public get users() {
    if (this._users === undefined) {
      this._users = new AdminUsersEndpoint(
        this._client.clone(config => ({
          ...config,
          baseURL: `${config.baseURL}/users`,
        }))
      );
    }
    return this._users;
  }

  public user(userID: string) {
    return new AdminUserEndpoint(
      this._client.clone(config => ({
        ...config,
        baseURL: `${config.baseURL}/users/${userID}`,
      }))
    );
  }
}
