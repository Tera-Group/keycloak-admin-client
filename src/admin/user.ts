import { AxiosResponse } from "axios";
import { UserRepresentation } from "../definitions/UserRepresentation";
import { Endpoint } from "../endpoint";

export class AdminUsersEndpoint extends Endpoint {
  public async list(): Promise<UserRepresentation[]> {
    const resp: AxiosResponse<
      UserRepresentation[],
      null
    > = await this._client.get("");
    return resp.data;
  }

  public async create(user: UserRepresentation): Promise<string> {
    const resp: AxiosResponse<
      null,
      UserRepresentation
    > = await this._client.post("", user);
    return resp.headers.location;
  }
}

export class AdminUserEndpoint extends Endpoint {
  public async delete(): Promise<AxiosResponse<any, null>> {
    return this._client.delete("");
  }
}
