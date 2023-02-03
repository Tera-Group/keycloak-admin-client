import { AdminEndpoint } from './admin';
import { Client } from './client';
import { Endpoint } from './endpoint';
import { Authenticator } from './interceptors/authenticator';
import { RealmEndpoint, RealmsEndpoint } from './realm';

export class Keycloak extends Endpoint {
  public static authenticate(
    url: string,
    realmID: string,
    clientID: string,
    clientSecret: string
  ): Keycloak {
    const authenticator = new Authenticator(
      url,
      realmID,
      clientID,
      clientSecret
    );
    return new Keycloak(new Client({ baseURL: url }, authenticator));
  }

  private _admin?: AdminEndpoint;
  private _realms?: RealmsEndpoint;

  public get admin() {
    if (this._admin === undefined) {
      this._admin = new AdminEndpoint(
        this._client.clone(config => ({
          ...config,
          baseURL: `${config.baseURL}/admin`,
        }))
      );
    }
    return this._admin;
  }

  public get realms() {
    if (this._realms === undefined) {
      this._realms = new RealmsEndpoint(
        this._client.clone(config => ({
          ...config,
          baseURL: `${config.baseURL}/realms`,
        }))
      );
    }
    return this._realms;
  }

  public realm(realmID: string) {
    return new RealmEndpoint(
      this._client.clone(config => ({
        ...config,
        baseURL: `${config.baseURL}/realms/${realmID}`,
      }))
    );
  }
}
