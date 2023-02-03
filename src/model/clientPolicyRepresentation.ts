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
import { ClientPolicyConditionRepresentation } from './clientPolicyConditionRepresentation';

export class ClientPolicyRepresentation {
  'conditions'?: Array<ClientPolicyConditionRepresentation>;
  'description'?: string;
  'enabled'?: boolean;
  'name'?: string;
  'profiles'?: Array<string>;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: 'conditions',
      baseName: 'conditions',
      type: 'Array<ClientPolicyConditionRepresentation>',
    },
    {
      name: 'description',
      baseName: 'description',
      type: 'string',
    },
    {
      name: 'enabled',
      baseName: 'enabled',
      type: 'boolean',
    },
    {
      name: 'name',
      baseName: 'name',
      type: 'string',
    },
    {
      name: 'profiles',
      baseName: 'profiles',
      type: 'Array<string>',
    },
  ];

  static getAttributeTypeMap() {
    return ClientPolicyRepresentation.attributeTypeMap;
  }
}