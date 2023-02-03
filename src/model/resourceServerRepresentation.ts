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
import { PolicyRepresentation } from './policyRepresentation';
import { ResourceRepresentation } from './resourceRepresentation';
import { ScopeRepresentation } from './scopeRepresentation';

export class ResourceServerRepresentation {
  'allowRemoteResourceManagement'?: boolean;
  'clientId'?: string;
  'decisionStrategy'?: ResourceServerRepresentation.DecisionStrategyEnum;
  'id'?: string;
  'name'?: string;
  'policies'?: Array<PolicyRepresentation>;
  'policyEnforcementMode'?: ResourceServerRepresentation.PolicyEnforcementModeEnum;
  'resources'?: Array<ResourceRepresentation>;
  'scopes'?: Array<ScopeRepresentation>;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: 'allowRemoteResourceManagement',
      baseName: 'allowRemoteResourceManagement',
      type: 'boolean',
    },
    {
      name: 'clientId',
      baseName: 'clientId',
      type: 'string',
    },
    {
      name: 'decisionStrategy',
      baseName: 'decisionStrategy',
      type: 'ResourceServerRepresentation.DecisionStrategyEnum',
    },
    {
      name: 'id',
      baseName: 'id',
      type: 'string',
    },
    {
      name: 'name',
      baseName: 'name',
      type: 'string',
    },
    {
      name: 'policies',
      baseName: 'policies',
      type: 'Array<PolicyRepresentation>',
    },
    {
      name: 'policyEnforcementMode',
      baseName: 'policyEnforcementMode',
      type: 'ResourceServerRepresentation.PolicyEnforcementModeEnum',
    },
    {
      name: 'resources',
      baseName: 'resources',
      type: 'Array<ResourceRepresentation>',
    },
    {
      name: 'scopes',
      baseName: 'scopes',
      type: 'Array<ScopeRepresentation>',
    },
  ];

  static getAttributeTypeMap() {
    return ResourceServerRepresentation.attributeTypeMap;
  }
}

export namespace ResourceServerRepresentation {
  export enum DecisionStrategyEnum {
    Affirmative = <any>'AFFIRMATIVE',
    Unanimous = <any>'UNANIMOUS',
    Consensus = <any>'CONSENSUS',
  }
  export enum PolicyEnforcementModeEnum {
    Enforcing = <any>'ENFORCING',
    Permissive = <any>'PERMISSIVE',
    Disabled = <any>'DISABLED',
  }
}