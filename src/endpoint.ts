import { Client } from './client';

export class Endpoint {
  protected _client: Client;

  constructor(client: Client) {
    this._client = client;
  }

  public get client() {
    return this._client;
  }
}
