import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { URLSearchParams } from 'url';

interface IAuthenticateResponse {
  access_token: string;
}

export class Authenticator {
  private _url: string;
  private _realmID: string;
  private _clientID: string;
  private _clientSecret: string;
  private _accessToken?: string;

  constructor(
    url: string,
    realmID: string,
    clientID: string,
    clientSecret: string
  ) {
    this._url = url;
    this._realmID = realmID;
    this._clientID = clientID;
    this._clientSecret = clientSecret;
  }

  public intercept(axiosInst: AxiosInstance) {
    axiosInst.interceptors.request.use(this._setAuthHeader.bind(this));
  }

  private async _authenticateWithClientCredentials() {
    const resp: AxiosResponse<IAuthenticateResponse, string> = await axios.post(
      `${this._url}/realms/${this._realmID}/protocol/openid-connect/token`,
      new URLSearchParams({
        client_id: this._clientID,
        client_secret: this._clientSecret,
        grant_type: 'client_credentials',
      }).toString()
    );
    this._accessToken = resp.data.access_token;
  }

  private async _setAuthHeader(
    conf: InternalAxiosRequestConfig
  ): Promise<InternalAxiosRequestConfig> {
    if (!this._accessToken) {
      await this._authenticateWithClientCredentials();
    }
    conf.headers.set('Authorization', `Bearer ${this._accessToken}`);
    return conf;
  }
}
