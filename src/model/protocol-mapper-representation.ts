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
 * @interface ProtocolMapperRepresentation
 */
export interface ProtocolMapperRepresentation {
  /**
   *
   * @type {{ [key: string]: any; }}
   * @memberof ProtocolMapperRepresentation
   */
  config?: { [key: string]: any };
  /**
   *
   * @type {string}
   * @memberof ProtocolMapperRepresentation
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof ProtocolMapperRepresentation
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof ProtocolMapperRepresentation
   */
  protocol?: string;
  /**
   *
   * @type {string}
   * @memberof ProtocolMapperRepresentation
   */
  protocolMapper?: string;
}
