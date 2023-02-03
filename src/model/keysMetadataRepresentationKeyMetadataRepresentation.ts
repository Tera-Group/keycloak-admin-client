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

export class KeysMetadataRepresentationKeyMetadataRepresentation {
  'algorithm'?: string;
  'certificate'?: string;
  'kid'?: string;
  'providerId'?: string;
  'providerPriority'?: number;
  'publicKey'?: string;
  'status'?: string;
  'type'?: string;
  'use'?: KeysMetadataRepresentationKeyMetadataRepresentation.UseEnum;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: 'algorithm',
      baseName: 'algorithm',
      type: 'string',
    },
    {
      name: 'certificate',
      baseName: 'certificate',
      type: 'string',
    },
    {
      name: 'kid',
      baseName: 'kid',
      type: 'string',
    },
    {
      name: 'providerId',
      baseName: 'providerId',
      type: 'string',
    },
    {
      name: 'providerPriority',
      baseName: 'providerPriority',
      type: 'number',
    },
    {
      name: 'publicKey',
      baseName: 'publicKey',
      type: 'string',
    },
    {
      name: 'status',
      baseName: 'status',
      type: 'string',
    },
    {
      name: 'type',
      baseName: 'type',
      type: 'string',
    },
    {
      name: 'use',
      baseName: 'use',
      type: 'KeysMetadataRepresentationKeyMetadataRepresentation.UseEnum',
    },
  ];

  static getAttributeTypeMap() {
    return KeysMetadataRepresentationKeyMetadataRepresentation.attributeTypeMap;
  }
}

export namespace KeysMetadataRepresentationKeyMetadataRepresentation {
  export enum UseEnum {
    Sig = <any>'SIG',
    Enc = <any>'ENC',
  }
}