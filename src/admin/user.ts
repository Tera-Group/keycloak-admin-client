import { AxiosResponse } from "axios";
import { Endpoint } from "../endpoint";

export interface IUserConsent {
  clientId?: string;
  createdDate?: number;
  grantedClientScopes?: string[];
  lastUpdatedDate?: number;
}

export interface ICredential {
  createdDate?: number;
  credentialData?: string;
  id?: string;
  priority?: number;
  secretData?: string;
  temporary?: boolean;
  type?: string;
  userLabel?: string;
  value?: string;
}

export interface IFederatedIdentity {
  identityProvider?: string;
  userId?: string;
  userName?: string;
}

export interface IUser {
  access?: Record<string, boolean>;
  attributes?: Record<string, string>;
  clientConsents?: IUserConsent[];
  clientRoles?: Array<Record<string, string>>;
  createdTimestamp?: number;
  credentials?: ICredential[];
  disableableCredentialTypes?: string[];
  email?: string;
  emailVerified?: boolean;
  enabled?: boolean;
  federatedIdentities?: IFederatedIdentity[];
  federationLink?: string;
  firstName?: string;
  groups?: string[];
  id?: string;
  lastName?: string;
  notBefore?: number;
  origin?: string;
  realmRoles?: string[];
  requiredActions?: string[];
  self?: string;
  serviceAccountClientId?: string;
  username?: string;
}

export class AdminUsersEndpoint extends Endpoint {
  public async list(): Promise<IUser[]> {
    const resp: AxiosResponse<IUser[], null> = await this._client.get("");
    return resp.data;
  }

  public async create(user: IUser): Promise<string> {
    const resp: AxiosResponse<null, IUser> = await this._client.post("", user);
    return resp.headers.location;
  }
}

export class AdminUserEndpoint extends Endpoint {
  public async delete(): Promise<AxiosResponse<any, null>> {
    return this._client.delete("");
  }
}
