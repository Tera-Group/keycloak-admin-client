/**
 * Keycloak Admin REST API
 * This is a REST API reference for the Keycloak Admin REST API.
 *
 * The version of the OpenAPI document: 1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { ClientScopeRepresentation } from '../model/clientScopeRepresentation';

import {
  ObjectSerializer,
  Authentication,
  VoidAuth,
  Interceptor,
} from '../model/models';
import {
  HttpBasicAuth,
  HttpBearerAuth,
  ApiKeyAuth,
  OAuth,
} from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'http://localhost';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum ClientScopesApiApiKeys {}

export class ClientScopesApi {
  protected _basePath = defaultBasePath;
  protected _defaultHeaders: any = {};
  protected _useQuerystring: boolean = false;

  protected authentications = {
    default: <Authentication>new VoidAuth(),
    access_token: new HttpBearerAuth(),
  };

  protected interceptors: Interceptor[] = [];

  constructor(basePath?: string);
  constructor(
    basePathOrUsername: string,
    password?: string,
    basePath?: string
  ) {
    if (password) {
      if (basePath) {
        this.basePath = basePath;
      }
    } else {
      if (basePathOrUsername) {
        this.basePath = basePathOrUsername;
      }
    }
  }

  set useQuerystring(value: boolean) {
    this._useQuerystring = value;
  }

  set basePath(basePath: string) {
    this._basePath = basePath;
  }

  set defaultHeaders(defaultHeaders: any) {
    this._defaultHeaders = defaultHeaders;
  }

  get defaultHeaders() {
    return this._defaultHeaders;
  }

  get basePath() {
    return this._basePath;
  }

  public setDefaultAuthentication(auth: Authentication) {
    this.authentications.default = auth;
  }

  public setApiKey(key: ClientScopesApiApiKeys, value: string) {
    (this.authentications as any)[ClientScopesApiApiKeys[key]].apiKey = value;
  }

  set accessToken(accessToken: string | (() => string)) {
    this.authentications.access_token.accessToken = accessToken;
  }

  public addInterceptor(interceptor: Interceptor) {
    this.interceptors.push(interceptor);
  }

  /**
   *
   * @summary Get client scopes belonging to the realm   Returns a list of client scopes belonging to the realm
   * @param realm realm name (not id!)
   */
  public async realmClientScopesGet(
    realm: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: Array<{ [key: string]: any }>;
  }> {
    const localVarPath =
      this.basePath +
      '/{realm}/client-scopes'.replace(
        '{' + 'realm' + '}',
        encodeURIComponent(String(realm))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ['application/json'];
    // give precedence to 'application/json'
    if (produces.indexOf('application/json') >= 0) {
      localVarHeaderParams.Accept = 'application/json';
    } else {
      localVarHeaderParams.Accept = produces.join(',');
    }
    let localVarFormParams: any = {};

    // verify required parameter 'realm' is not null or undefined
    if (realm === null || realm === undefined) {
      throw new Error(
        'Required parameter realm was null or undefined when calling realmClientScopesGet.'
      );
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    let authenticationPromise = Promise.resolve();
    if (this.authentications.access_token.accessToken) {
      authenticationPromise = authenticationPromise.then(() =>
        this.authentications.access_token.applyToRequest(localVarRequestOptions)
      );
    }
    authenticationPromise = authenticationPromise.then(() =>
      this.authentications.default.applyToRequest(localVarRequestOptions)
    );

    let interceptorPromise = authenticationPromise;
    for (const interceptor of this.interceptors) {
      interceptorPromise = interceptorPromise.then(() =>
        interceptor(localVarRequestOptions)
      );
    }

    return interceptorPromise.then(() => {
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: Array<{ [key: string]: any }>;
      }>((resolve, reject) => {
        localVarRequest(localVarRequestOptions, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            if (
              response.statusCode &&
              response.statusCode >= 200 &&
              response.statusCode <= 299
            ) {
              body = ObjectSerializer.deserialize(
                body,
                'Array<{ [key: string]: any; }>'
              );
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
  }
  /**
   *
   * @summary Delete the client scope
   * @param realm realm name (not id!)
   * @param id id of client scope (not name)
   */
  public async realmClientScopesIdDelete(
    realm: string,
    id: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: any }> {
    const localVarPath =
      this.basePath +
      '/{realm}/client-scopes/{id}'
        .replace('{' + 'realm' + '}', encodeURIComponent(String(realm)))
        .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    let localVarFormParams: any = {};

    // verify required parameter 'realm' is not null or undefined
    if (realm === null || realm === undefined) {
      throw new Error(
        'Required parameter realm was null or undefined when calling realmClientScopesIdDelete.'
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling realmClientScopesIdDelete.'
      );
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: 'DELETE',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    let authenticationPromise = Promise.resolve();
    if (this.authentications.access_token.accessToken) {
      authenticationPromise = authenticationPromise.then(() =>
        this.authentications.access_token.applyToRequest(localVarRequestOptions)
      );
    }
    authenticationPromise = authenticationPromise.then(() =>
      this.authentications.default.applyToRequest(localVarRequestOptions)
    );

    let interceptorPromise = authenticationPromise;
    for (const interceptor of this.interceptors) {
      interceptorPromise = interceptorPromise.then(() =>
        interceptor(localVarRequestOptions)
      );
    }

    return interceptorPromise.then(() => {
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body?: any }>(
        (resolve, reject) => {
          localVarRequest(localVarRequestOptions, (error, response, body) => {
            if (error) {
              reject(error);
            } else {
              if (
                response.statusCode &&
                response.statusCode >= 200 &&
                response.statusCode <= 299
              ) {
                resolve({ response: response, body: body });
              } else {
                reject(new HttpError(response, body, response.statusCode));
              }
            }
          });
        }
      );
    });
  }
  /**
   *
   * @summary Get representation of the client scope
   * @param realm realm name (not id!)
   * @param id id of client scope (not name)
   */
  public async realmClientScopesIdGet(
    realm: string,
    id: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{
    response: http.IncomingMessage;
    body: ClientScopeRepresentation;
  }> {
    const localVarPath =
      this.basePath +
      '/{realm}/client-scopes/{id}'
        .replace('{' + 'realm' + '}', encodeURIComponent(String(realm)))
        .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ['application/json'];
    // give precedence to 'application/json'
    if (produces.indexOf('application/json') >= 0) {
      localVarHeaderParams.Accept = 'application/json';
    } else {
      localVarHeaderParams.Accept = produces.join(',');
    }
    let localVarFormParams: any = {};

    // verify required parameter 'realm' is not null or undefined
    if (realm === null || realm === undefined) {
      throw new Error(
        'Required parameter realm was null or undefined when calling realmClientScopesIdGet.'
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling realmClientScopesIdGet.'
      );
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    let authenticationPromise = Promise.resolve();
    if (this.authentications.access_token.accessToken) {
      authenticationPromise = authenticationPromise.then(() =>
        this.authentications.access_token.applyToRequest(localVarRequestOptions)
      );
    }
    authenticationPromise = authenticationPromise.then(() =>
      this.authentications.default.applyToRequest(localVarRequestOptions)
    );

    let interceptorPromise = authenticationPromise;
    for (const interceptor of this.interceptors) {
      interceptorPromise = interceptorPromise.then(() =>
        interceptor(localVarRequestOptions)
      );
    }

    return interceptorPromise.then(() => {
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: ClientScopeRepresentation;
      }>((resolve, reject) => {
        localVarRequest(localVarRequestOptions, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            if (
              response.statusCode &&
              response.statusCode >= 200 &&
              response.statusCode <= 299
            ) {
              body = ObjectSerializer.deserialize(
                body,
                'ClientScopeRepresentation'
              );
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
  }
  /**
   *
   * @summary Update the client scope
   * @param realm realm name (not id!)
   * @param id id of client scope (not name)
   * @param clientScopeRepresentation
   */
  public async realmClientScopesIdPut(
    realm: string,
    id: string,
    clientScopeRepresentation: ClientScopeRepresentation,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: any }> {
    const localVarPath =
      this.basePath +
      '/{realm}/client-scopes/{id}'
        .replace('{' + 'realm' + '}', encodeURIComponent(String(realm)))
        .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    let localVarFormParams: any = {};

    // verify required parameter 'realm' is not null or undefined
    if (realm === null || realm === undefined) {
      throw new Error(
        'Required parameter realm was null or undefined when calling realmClientScopesIdPut.'
      );
    }

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling realmClientScopesIdPut.'
      );
    }

    // verify required parameter 'clientScopeRepresentation' is not null or undefined
    if (
      clientScopeRepresentation === null ||
      clientScopeRepresentation === undefined
    ) {
      throw new Error(
        'Required parameter clientScopeRepresentation was null or undefined when calling realmClientScopesIdPut.'
      );
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: 'PUT',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(
        clientScopeRepresentation,
        'ClientScopeRepresentation'
      ),
    };

    let authenticationPromise = Promise.resolve();
    if (this.authentications.access_token.accessToken) {
      authenticationPromise = authenticationPromise.then(() =>
        this.authentications.access_token.applyToRequest(localVarRequestOptions)
      );
    }
    authenticationPromise = authenticationPromise.then(() =>
      this.authentications.default.applyToRequest(localVarRequestOptions)
    );

    let interceptorPromise = authenticationPromise;
    for (const interceptor of this.interceptors) {
      interceptorPromise = interceptorPromise.then(() =>
        interceptor(localVarRequestOptions)
      );
    }

    return interceptorPromise.then(() => {
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body?: any }>(
        (resolve, reject) => {
          localVarRequest(localVarRequestOptions, (error, response, body) => {
            if (error) {
              reject(error);
            } else {
              if (
                response.statusCode &&
                response.statusCode >= 200 &&
                response.statusCode <= 299
              ) {
                resolve({ response: response, body: body });
              } else {
                reject(new HttpError(response, body, response.statusCode));
              }
            }
          });
        }
      );
    });
  }
  /**
   *
   * @summary Create a new client scope   Client Scope’s name must be unique!
   * @param realm realm name (not id!)
   * @param clientScopeRepresentation
   */
  public async realmClientScopesPost(
    realm: string,
    clientScopeRepresentation: ClientScopeRepresentation,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body?: any }> {
    const localVarPath =
      this.basePath +
      '/{realm}/client-scopes'.replace(
        '{' + 'realm' + '}',
        encodeURIComponent(String(realm))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    let localVarFormParams: any = {};

    // verify required parameter 'realm' is not null or undefined
    if (realm === null || realm === undefined) {
      throw new Error(
        'Required parameter realm was null or undefined when calling realmClientScopesPost.'
      );
    }

    // verify required parameter 'clientScopeRepresentation' is not null or undefined
    if (
      clientScopeRepresentation === null ||
      clientScopeRepresentation === undefined
    ) {
      throw new Error(
        'Required parameter clientScopeRepresentation was null or undefined when calling realmClientScopesPost.'
      );
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: 'POST',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(
        clientScopeRepresentation,
        'ClientScopeRepresentation'
      ),
    };

    let authenticationPromise = Promise.resolve();
    if (this.authentications.access_token.accessToken) {
      authenticationPromise = authenticationPromise.then(() =>
        this.authentications.access_token.applyToRequest(localVarRequestOptions)
      );
    }
    authenticationPromise = authenticationPromise.then(() =>
      this.authentications.default.applyToRequest(localVarRequestOptions)
    );

    let interceptorPromise = authenticationPromise;
    for (const interceptor of this.interceptors) {
      interceptorPromise = interceptorPromise.then(() =>
        interceptor(localVarRequestOptions)
      );
    }

    return interceptorPromise.then(() => {
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body?: any }>(
        (resolve, reject) => {
          localVarRequest(localVarRequestOptions, (error, response, body) => {
            if (error) {
              reject(error);
            } else {
              if (
                response.statusCode &&
                response.statusCode >= 200 &&
                response.statusCode <= 299
              ) {
                resolve({ response: response, body: body });
              } else {
                reject(new HttpError(response, body, response.statusCode));
              }
            }
          });
        }
      );
    });
  }
}
