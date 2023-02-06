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

/**
 *
 * @export
 * @interface UserFederationMapperRepresentation
 */
export interface UserFederationMapperRepresentation {
  /**
   *
   * @type {{ [key: string]: any; }}
   * @memberof UserFederationMapperRepresentation
   */
  config?: { [key: string]: any };
  /**
   *
   * @type {string}
   * @memberof UserFederationMapperRepresentation
   */
  federationMapperType?: string;
  /**
   *
   * @type {string}
   * @memberof UserFederationMapperRepresentation
   */
  federationProviderDisplayName?: string;
  /**
   *
   * @type {string}
   * @memberof UserFederationMapperRepresentation
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof UserFederationMapperRepresentation
   */
  name?: string;
}