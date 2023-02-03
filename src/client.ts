import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Authenticator } from './interceptors/authenticator';
import { intercept } from './interceptors/errorHandler';

export class Client {
  private _config: AxiosRequestConfig;
  private _axiosInst: AxiosInstance;
  private _authenticator: Authenticator;

  constructor(config: AxiosRequestConfig, authenticator: Authenticator) {
    this._config = config;
    this._authenticator = authenticator;
    this._axiosInst = axios.create({ ...this._config });
    this._authenticator.intercept(this._axiosInst);
    intercept(this._axiosInst);
  }

  public clone(
    editConfig: (config: AxiosRequestConfig) => AxiosRequestConfig
  ): Client {
    return new Client(editConfig(this._config), this._authenticator);
  }

  public getUri(config?: AxiosRequestConfig): string {
    return this._axiosInst.getUri(config);
  }

  public request<T = any, R = AxiosResponse<T>, D = any>(
    config: AxiosRequestConfig<D>
  ): Promise<R> {
    return this._axiosInst.request(config);
  }

  public get<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<R> {
    return this._axiosInst.get(url, config);
  }

  public delete<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<R> {
    return this._axiosInst.delete(url, config);
  }

  public head<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<R> {
    return this._axiosInst.head(url, config);
  }

  public options<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<R> {
    return this._axiosInst.options(url, config);
  }

  public post<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ): Promise<R> {
    return this._axiosInst.post(url, data, config);
  }

  public put<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ): Promise<R> {
    return this._axiosInst.put(url, data, config);
  }

  public patch<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ): Promise<R> {
    return this._axiosInst.patch(url, data, config);
  }

  public postForm<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ): Promise<R> {
    return this._axiosInst.postForm(url, data, config);
  }

  public putForm<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ): Promise<R> {
    return this._axiosInst.putForm(url, data, config);
  }

  public patchForm<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ): Promise<R> {
    return this._axiosInst.patchForm(url, data, config);
  }
}
