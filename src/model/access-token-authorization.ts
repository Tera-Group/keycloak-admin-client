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
import { Permission } from './permission';

/**
 *
 * @export
 * @interface AccessTokenAuthorization
 */
export interface AccessTokenAuthorization {
  /**
   *
   * @type {Array<Permission>}
   * @memberof AccessTokenAuthorization
   */
  permissions?: Array<Permission>;
}