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

import { RequestFile } from './models';

export class AuthenticatorConfigRepresentation {
  'alias'?: string;
  'config'?: { [key: string]: any };
  'id'?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: 'alias',
      baseName: 'alias',
      type: 'string',
    },
    {
      name: 'config',
      baseName: 'config',
      type: '{ [key: string]: any; }',
    },
    {
      name: 'id',
      baseName: 'id',
      type: 'string',
    },
  ];

  static getAttributeTypeMap() {
    return AuthenticatorConfigRepresentation.attributeTypeMap;
  }
}