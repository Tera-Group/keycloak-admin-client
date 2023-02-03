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

export class ClientInitialAccessCreatePresentation {
  'count'?: number;
  'expiration'?: number;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: 'count',
      baseName: 'count',
      type: 'number',
    },
    {
      name: 'expiration',
      baseName: 'expiration',
      type: 'number',
    },
  ];

  static getAttributeTypeMap() {
    return ClientInitialAccessCreatePresentation.attributeTypeMap;
  }
}
