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
 * @interface CertificateRepresentation
 */
export interface CertificateRepresentation {
  /**
   *
   * @type {string}
   * @memberof CertificateRepresentation
   */
  certificate?: string;
  /**
   *
   * @type {string}
   * @memberof CertificateRepresentation
   */
  kid?: string;
  /**
   *
   * @type {string}
   * @memberof CertificateRepresentation
   */
  privateKey?: string;
  /**
   *
   * @type {string}
   * @memberof CertificateRepresentation
   */
  publicKey?: string;
}
