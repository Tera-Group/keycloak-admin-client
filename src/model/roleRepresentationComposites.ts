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

export class RoleRepresentationComposites {
  'client'?: { [key: string]: any };
  'realm'?: Array<string>;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: 'client',
      baseName: 'client',
      type: '{ [key: string]: any; }',
    },
    {
      name: 'realm',
      baseName: 'realm',
      type: 'Array<string>',
    },
  ];

  static getAttributeTypeMap() {
    return RoleRepresentationComposites.attributeTypeMap;
  }
}
