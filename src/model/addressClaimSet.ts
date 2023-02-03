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

export class AddressClaimSet {
  'country'?: string;
  'formatted'?: string;
  'locality'?: string;
  'postalCode'?: string;
  'region'?: string;
  'streetAddress'?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: 'country',
      baseName: 'country',
      type: 'string',
    },
    {
      name: 'formatted',
      baseName: 'formatted',
      type: 'string',
    },
    {
      name: 'locality',
      baseName: 'locality',
      type: 'string',
    },
    {
      name: 'postalCode',
      baseName: 'postal_code',
      type: 'string',
    },
    {
      name: 'region',
      baseName: 'region',
      type: 'string',
    },
    {
      name: 'streetAddress',
      baseName: 'street_address',
      type: 'string',
    },
  ];

  static getAttributeTypeMap() {
    return AddressClaimSet.attributeTypeMap;
  }
}