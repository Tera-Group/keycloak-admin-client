/* tslint:disable */
/* eslint-disable */
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

// May contain unused imports in some cases
// @ts-ignore
import { CredentialRepresentation } from './credential-representation';
// May contain unused imports in some cases
// @ts-ignore
import { FederatedIdentityRepresentation } from './federated-identity-representation';
// May contain unused imports in some cases
// @ts-ignore
import { UserConsentRepresentation } from './user-consent-representation';

/**
 *
 * @export
 * @interface UserRepresentation
 */
export interface UserRepresentation {
  /**
   *
   * @type {{ [key: string]: any; }}
   * @memberof UserRepresentation
   */
  access?: { [key: string]: any };
  /**
   *
   * @type {{ [key: string]: any; }}
   * @memberof UserRepresentation
   */
  attributes?: { [key: string]: any };
  /**
   *
   * @type {Array<UserConsentRepresentation>}
   * @memberof UserRepresentation
   */
  clientConsents?: Array<UserConsentRepresentation>;
  /**
   *
   * @type {{ [key: string]: any; }}
   * @memberof UserRepresentation
   */
  clientRoles?: { [key: string]: any };
  /**
   *
   * @type {number}
   * @memberof UserRepresentation
   */
  createdTimestamp?: number;
  /**
   *
   * @type {Array<CredentialRepresentation>}
   * @memberof UserRepresentation
   */
  credentials?: Array<CredentialRepresentation>;
  /**
   *
   * @type {Array<string>}
   * @memberof UserRepresentation
   */
  disableableCredentialTypes?: Array<string>;
  /**
   *
   * @type {string}
   * @memberof UserRepresentation
   */
  email?: string;
  /**
   *
   * @type {boolean}
   * @memberof UserRepresentation
   */
  emailVerified?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof UserRepresentation
   */
  enabled?: boolean;
  /**
   *
   * @type {Array<FederatedIdentityRepresentation>}
   * @memberof UserRepresentation
   */
  federatedIdentities?: Array<FederatedIdentityRepresentation>;
  /**
   *
   * @type {string}
   * @memberof UserRepresentation
   */
  federationLink?: string;
  /**
   *
   * @type {string}
   * @memberof UserRepresentation
   */
  firstName?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof UserRepresentation
   */
  groups?: Array<string>;
  /**
   *
   * @type {string}
   * @memberof UserRepresentation
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof UserRepresentation
   */
  lastName?: string;
  /**
   *
   * @type {number}
   * @memberof UserRepresentation
   */
  notBefore?: number;
  /**
   *
   * @type {string}
   * @memberof UserRepresentation
   */
  origin?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof UserRepresentation
   */
  realmRoles?: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof UserRepresentation
   */
  requiredActions?: Array<string>;
  /**
   *
   * @type {string}
   * @memberof UserRepresentation
   */
  self?: string;
  /**
   *
   * @type {string}
   * @memberof UserRepresentation
   */
  serviceAccountClientId?: string;
  /**
   *
   * @type {string}
   * @memberof UserRepresentation
   */
  username?: string;
}