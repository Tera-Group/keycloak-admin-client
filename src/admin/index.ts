import { Endpoint } from '../endpoint';
import { AdminRealmEndpoint, AdminRealmsEndpoint } from './realms';

export class AdminEndpoint extends Endpoint {
  private _realms?: AdminRealmsEndpoint;

  public get realms() {
    if (this._realms === undefined) {
      this._realms = new AdminRealmsEndpoint(
        this._client.clone(config => ({
          ...config,
          baseURL: `${config.baseURL}/realms`,
        }))
      );
    }
    return this._realms;
  }

  public realm(realmID: string) {
    return new AdminRealmEndpoint(
      this._client.clone(config => ({
        ...config,
        baseURL: `${config.baseURL}/realms/${realmID}`,
      }))
    );
  }
}
