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

export class UserFederationProviderRepresentation {
  'changedSyncPeriod'?: number;
  'config'?: { [key: string]: any };
  'displayName'?: string;
  'fullSyncPeriod'?: number;
  'id'?: string;
  'lastSync'?: number;
  'priority'?: number;
  'providerName'?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: 'changedSyncPeriod',
      baseName: 'changedSyncPeriod',
      type: 'number',
    },
    {
      name: 'config',
      baseName: 'config',
      type: '{ [key: string]: any; }',
    },
    {
      name: 'displayName',
      baseName: 'displayName',
      type: 'string',
    },
    {
      name: 'fullSyncPeriod',
      baseName: 'fullSyncPeriod',
      type: 'number',
    },
    {
      name: 'id',
      baseName: 'id',
      type: 'string',
    },
    {
      name: 'lastSync',
      baseName: 'lastSync',
      type: 'number',
    },
    {
      name: 'priority',
      baseName: 'priority',
      type: 'number',
    },
    {
      name: 'providerName',
      baseName: 'providerName',
      type: 'string',
    },
  ];

  static getAttributeTypeMap() {
    return UserFederationProviderRepresentation.attributeTypeMap;
  }
}
