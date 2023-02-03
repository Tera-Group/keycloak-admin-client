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

export class IdentityProviderMapperRepresentation {
  'config'?: { [key: string]: any };
  'id'?: string;
  'identityProviderAlias'?: string;
  'identityProviderMapper'?: string;
  'name'?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
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
    {
      name: 'identityProviderAlias',
      baseName: 'identityProviderAlias',
      type: 'string',
    },
    {
      name: 'identityProviderMapper',
      baseName: 'identityProviderMapper',
      type: 'string',
    },
    {
      name: 'name',
      baseName: 'name',
      type: 'string',
    },
  ];

  static getAttributeTypeMap() {
    return IdentityProviderMapperRepresentation.attributeTypeMap;
  }
}
