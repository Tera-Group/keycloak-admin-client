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
import { KeysMetadataRepresentationKeyMetadataRepresentation } from './keys-metadata-representation-key-metadata-representation';

/**
 *
 * @export
 * @interface KeysMetadataRepresentation
 */
export interface KeysMetadataRepresentation {
  /**
   *
   * @type {{ [key: string]: any; }}
   * @memberof KeysMetadataRepresentation
   */
  active?: { [key: string]: any };
  /**
   *
   * @type {Array<KeysMetadataRepresentationKeyMetadataRepresentation>}
   * @memberof KeysMetadataRepresentation
   */
  keys?: Array<KeysMetadataRepresentationKeyMetadataRepresentation>;
}
