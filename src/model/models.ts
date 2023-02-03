import localVarRequest from 'request';

export * from './accessToken';
export * from './accessTokenAccess';
export * from './accessTokenAuthorization';
export * from './accessTokenCertConf';
export * from './addressClaimSet';
export * from './authenticationExecutionExportRepresentation';
export * from './authenticationExecutionInfoRepresentation';
export * from './authenticationExecutionRepresentation';
export * from './authenticationFlowRepresentation';
export * from './authenticatorConfigInfoRepresentation';
export * from './authenticatorConfigRepresentation';
export * from './certificateRepresentation';
export * from './clientInitialAccessCreatePresentation';
export * from './clientInitialAccessPresentation';
export * from './clientMappingsRepresentation';
export * from './clientPoliciesRepresentation';
export * from './clientPolicyConditionRepresentation';
export * from './clientPolicyExecutorRepresentation';
export * from './clientPolicyRepresentation';
export * from './clientProfileRepresentation';
export * from './clientProfilesRepresentation';
export * from './clientRepresentation';
export * from './clientScopeEvaluateResourceProtocolMapperEvaluationRepresentation';
export * from './clientScopeRepresentation';
export * from './componentExportRepresentation';
export * from './componentRepresentation';
export * from './configPropertyRepresentation';
export * from './credentialRepresentation';
export * from './federatedIdentityRepresentation';
export * from './globalRequestResult';
export * from './groupRepresentation';
export * from './iDToken';
export * from './identityProviderMapperRepresentation';
export * from './identityProviderRepresentation';
export * from './jsonNode';
export * from './keyStoreConfig';
export * from './keysMetadataRepresentation';
export * from './keysMetadataRepresentationKeyMetadataRepresentation';
export * from './managementPermissionReference';
export * from './mappingsRepresentation';
export * from './memoryInfoRepresentation';
export * from './multivaluedHashMap';
export * from './partialImportRepresentation';
export * from './passwordPolicyTypeRepresentation';
export * from './permission';
export * from './policyRepresentation';
export * from './profileInfoRepresentation';
export * from './protocolMapperRepresentation';
export * from './providerRepresentation';
export * from './realmEventsConfigRepresentation';
export * from './realmRepresentation';
export * from './requiredActionProviderRepresentation';
export * from './resourceRepresentation';
export * from './resourceServerRepresentation';
export * from './roleRepresentation';
export * from './roleRepresentationComposites';
export * from './rolesRepresentation';
export * from './scopeMappingRepresentation';
export * from './scopeRepresentation';
export * from './serverInfoRepresentation';
export * from './spiInfoRepresentation';
export * from './systemInfoRepresentation';
export * from './userConsentRepresentation';
export * from './userFederationMapperRepresentation';
export * from './userFederationProviderRepresentation';
export * from './userRepresentation';

import * as fs from 'fs';

export interface RequestDetailedFile {
  value: Buffer;
  options?: {
    filename?: string;
    contentType?: string;
  };
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;

import { AccessToken } from './accessToken';
import { AccessTokenAccess } from './accessTokenAccess';
import { AccessTokenAuthorization } from './accessTokenAuthorization';
import { AccessTokenCertConf } from './accessTokenCertConf';
import { AddressClaimSet } from './addressClaimSet';
import { AuthenticationExecutionExportRepresentation } from './authenticationExecutionExportRepresentation';
import { AuthenticationExecutionInfoRepresentation } from './authenticationExecutionInfoRepresentation';
import { AuthenticationExecutionRepresentation } from './authenticationExecutionRepresentation';
import { AuthenticationFlowRepresentation } from './authenticationFlowRepresentation';
import { AuthenticatorConfigInfoRepresentation } from './authenticatorConfigInfoRepresentation';
import { AuthenticatorConfigRepresentation } from './authenticatorConfigRepresentation';
import { CertificateRepresentation } from './certificateRepresentation';
import { ClientInitialAccessCreatePresentation } from './clientInitialAccessCreatePresentation';
import { ClientInitialAccessPresentation } from './clientInitialAccessPresentation';
import { ClientMappingsRepresentation } from './clientMappingsRepresentation';
import { ClientPoliciesRepresentation } from './clientPoliciesRepresentation';
import { ClientPolicyConditionRepresentation } from './clientPolicyConditionRepresentation';
import { ClientPolicyExecutorRepresentation } from './clientPolicyExecutorRepresentation';
import { ClientPolicyRepresentation } from './clientPolicyRepresentation';
import { ClientProfileRepresentation } from './clientProfileRepresentation';
import { ClientProfilesRepresentation } from './clientProfilesRepresentation';
import { ClientRepresentation } from './clientRepresentation';
import { ClientScopeEvaluateResourceProtocolMapperEvaluationRepresentation } from './clientScopeEvaluateResourceProtocolMapperEvaluationRepresentation';
import { ClientScopeRepresentation } from './clientScopeRepresentation';
import { ComponentExportRepresentation } from './componentExportRepresentation';
import { ComponentRepresentation } from './componentRepresentation';
import { ConfigPropertyRepresentation } from './configPropertyRepresentation';
import { CredentialRepresentation } from './credentialRepresentation';
import { FederatedIdentityRepresentation } from './federatedIdentityRepresentation';
import { GlobalRequestResult } from './globalRequestResult';
import { GroupRepresentation } from './groupRepresentation';
import { IDToken } from './iDToken';
import { IdentityProviderMapperRepresentation } from './identityProviderMapperRepresentation';
import { IdentityProviderRepresentation } from './identityProviderRepresentation';
import { JsonNode } from './jsonNode';
import { KeyStoreConfig } from './keyStoreConfig';
import { KeysMetadataRepresentation } from './keysMetadataRepresentation';
import { KeysMetadataRepresentationKeyMetadataRepresentation } from './keysMetadataRepresentationKeyMetadataRepresentation';
import { ManagementPermissionReference } from './managementPermissionReference';
import { MappingsRepresentation } from './mappingsRepresentation';
import { MemoryInfoRepresentation } from './memoryInfoRepresentation';
import { MultivaluedHashMap } from './multivaluedHashMap';
import { PartialImportRepresentation } from './partialImportRepresentation';
import { PasswordPolicyTypeRepresentation } from './passwordPolicyTypeRepresentation';
import { Permission } from './permission';
import { PolicyRepresentation } from './policyRepresentation';
import { ProfileInfoRepresentation } from './profileInfoRepresentation';
import { ProtocolMapperRepresentation } from './protocolMapperRepresentation';
import { ProviderRepresentation } from './providerRepresentation';
import { RealmEventsConfigRepresentation } from './realmEventsConfigRepresentation';
import { RealmRepresentation } from './realmRepresentation';
import { RequiredActionProviderRepresentation } from './requiredActionProviderRepresentation';
import { ResourceRepresentation } from './resourceRepresentation';
import { ResourceServerRepresentation } from './resourceServerRepresentation';
import { RoleRepresentation } from './roleRepresentation';
import { RoleRepresentationComposites } from './roleRepresentationComposites';
import { RolesRepresentation } from './rolesRepresentation';
import { ScopeMappingRepresentation } from './scopeMappingRepresentation';
import { ScopeRepresentation } from './scopeRepresentation';
import { ServerInfoRepresentation } from './serverInfoRepresentation';
import { SpiInfoRepresentation } from './spiInfoRepresentation';
import { SystemInfoRepresentation } from './systemInfoRepresentation';
import { UserConsentRepresentation } from './userConsentRepresentation';
import { UserFederationMapperRepresentation } from './userFederationMapperRepresentation';
import { UserFederationProviderRepresentation } from './userFederationProviderRepresentation';
import { UserRepresentation } from './userRepresentation';

/* tslint:disable:no-unused-variable */
let primitives = [
  'string',
  'boolean',
  'double',
  'integer',
  'long',
  'float',
  'number',
  'any',
];

let enumsMap: { [index: string]: any } = {
  'AccessToken.CategoryEnum': AccessToken.CategoryEnum,
  'IDToken.CategoryEnum': IDToken.CategoryEnum,
  'JsonNode.NodeTypeEnum': JsonNode.NodeTypeEnum,
  'KeysMetadataRepresentationKeyMetadataRepresentation.UseEnum':
    KeysMetadataRepresentationKeyMetadataRepresentation.UseEnum,
  'PartialImportRepresentation.PolicyEnum':
    PartialImportRepresentation.PolicyEnum,
  'PolicyRepresentation.DecisionStrategyEnum':
    PolicyRepresentation.DecisionStrategyEnum,
  'PolicyRepresentation.LogicEnum': PolicyRepresentation.LogicEnum,
  'ResourceServerRepresentation.DecisionStrategyEnum':
    ResourceServerRepresentation.DecisionStrategyEnum,
  'ResourceServerRepresentation.PolicyEnforcementModeEnum':
    ResourceServerRepresentation.PolicyEnforcementModeEnum,
};

let typeMap: { [index: string]: any } = {
  AccessToken: AccessToken,
  AccessTokenAccess: AccessTokenAccess,
  AccessTokenAuthorization: AccessTokenAuthorization,
  AccessTokenCertConf: AccessTokenCertConf,
  AddressClaimSet: AddressClaimSet,
  AuthenticationExecutionExportRepresentation: AuthenticationExecutionExportRepresentation,
  AuthenticationExecutionInfoRepresentation: AuthenticationExecutionInfoRepresentation,
  AuthenticationExecutionRepresentation: AuthenticationExecutionRepresentation,
  AuthenticationFlowRepresentation: AuthenticationFlowRepresentation,
  AuthenticatorConfigInfoRepresentation: AuthenticatorConfigInfoRepresentation,
  AuthenticatorConfigRepresentation: AuthenticatorConfigRepresentation,
  CertificateRepresentation: CertificateRepresentation,
  ClientInitialAccessCreatePresentation: ClientInitialAccessCreatePresentation,
  ClientInitialAccessPresentation: ClientInitialAccessPresentation,
  ClientMappingsRepresentation: ClientMappingsRepresentation,
  ClientPoliciesRepresentation: ClientPoliciesRepresentation,
  ClientPolicyConditionRepresentation: ClientPolicyConditionRepresentation,
  ClientPolicyExecutorRepresentation: ClientPolicyExecutorRepresentation,
  ClientPolicyRepresentation: ClientPolicyRepresentation,
  ClientProfileRepresentation: ClientProfileRepresentation,
  ClientProfilesRepresentation: ClientProfilesRepresentation,
  ClientRepresentation: ClientRepresentation,
  ClientScopeEvaluateResourceProtocolMapperEvaluationRepresentation: ClientScopeEvaluateResourceProtocolMapperEvaluationRepresentation,
  ClientScopeRepresentation: ClientScopeRepresentation,
  ComponentExportRepresentation: ComponentExportRepresentation,
  ComponentRepresentation: ComponentRepresentation,
  ConfigPropertyRepresentation: ConfigPropertyRepresentation,
  CredentialRepresentation: CredentialRepresentation,
  FederatedIdentityRepresentation: FederatedIdentityRepresentation,
  GlobalRequestResult: GlobalRequestResult,
  GroupRepresentation: GroupRepresentation,
  IDToken: IDToken,
  IdentityProviderMapperRepresentation: IdentityProviderMapperRepresentation,
  IdentityProviderRepresentation: IdentityProviderRepresentation,
  JsonNode: JsonNode,
  KeyStoreConfig: KeyStoreConfig,
  KeysMetadataRepresentation: KeysMetadataRepresentation,
  KeysMetadataRepresentationKeyMetadataRepresentation: KeysMetadataRepresentationKeyMetadataRepresentation,
  ManagementPermissionReference: ManagementPermissionReference,
  MappingsRepresentation: MappingsRepresentation,
  MemoryInfoRepresentation: MemoryInfoRepresentation,
  MultivaluedHashMap: MultivaluedHashMap,
  PartialImportRepresentation: PartialImportRepresentation,
  PasswordPolicyTypeRepresentation: PasswordPolicyTypeRepresentation,
  Permission: Permission,
  PolicyRepresentation: PolicyRepresentation,
  ProfileInfoRepresentation: ProfileInfoRepresentation,
  ProtocolMapperRepresentation: ProtocolMapperRepresentation,
  ProviderRepresentation: ProviderRepresentation,
  RealmEventsConfigRepresentation: RealmEventsConfigRepresentation,
  RealmRepresentation: RealmRepresentation,
  RequiredActionProviderRepresentation: RequiredActionProviderRepresentation,
  ResourceRepresentation: ResourceRepresentation,
  ResourceServerRepresentation: ResourceServerRepresentation,
  RoleRepresentation: RoleRepresentation,
  RoleRepresentationComposites: RoleRepresentationComposites,
  RolesRepresentation: RolesRepresentation,
  ScopeMappingRepresentation: ScopeMappingRepresentation,
  ScopeRepresentation: ScopeRepresentation,
  ServerInfoRepresentation: ServerInfoRepresentation,
  SpiInfoRepresentation: SpiInfoRepresentation,
  SystemInfoRepresentation: SystemInfoRepresentation,
  UserConsentRepresentation: UserConsentRepresentation,
  UserFederationMapperRepresentation: UserFederationMapperRepresentation,
  UserFederationProviderRepresentation: UserFederationProviderRepresentation,
  UserRepresentation: UserRepresentation,
};

export class ObjectSerializer {
  public static findCorrectType(data: any, expectedType: string) {
    if (data == undefined) {
      return expectedType;
    } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
      return expectedType;
    } else if (expectedType === 'Date') {
      return expectedType;
    } else {
      if (enumsMap[expectedType]) {
        return expectedType;
      }

      if (!typeMap[expectedType]) {
        return expectedType; // w/e we don't know the type
      }

      // Check the discriminator
      let discriminatorProperty = typeMap[expectedType].discriminator;
      if (discriminatorProperty == null) {
        return expectedType; // the type does not have a discriminator. use it.
      } else {
        if (data[discriminatorProperty]) {
          var discriminatorType = data[discriminatorProperty];
          if (typeMap[discriminatorType]) {
            return discriminatorType; // use the type given in the discriminator
          } else {
            return expectedType; // discriminator did not map to a type
          }
        } else {
          return expectedType; // discriminator was not present (or an empty string)
        }
      }
    }
  }

  public static serialize(data: any, type: string) {
    if (data == undefined) {
      return data;
    } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
      return data;
    } else if (type.lastIndexOf('Array<', 0) === 0) {
      // string.startsWith pre es6
      let subType: string = type.replace('Array<', ''); // Array<Type> => Type>
      subType = subType.substring(0, subType.length - 1); // Type> => Type
      let transformedData: any[] = [];
      for (let index = 0; index < data.length; index++) {
        let datum = data[index];
        transformedData.push(ObjectSerializer.serialize(datum, subType));
      }
      return transformedData;
    } else if (type === 'Date') {
      return data.toISOString();
    } else {
      if (enumsMap[type]) {
        return data;
      }
      if (!typeMap[type]) {
        // in case we dont know the type
        return data;
      }

      // Get the actual type of this object
      type = this.findCorrectType(data, type);

      // get the map for the correct type.
      let attributeTypes = typeMap[type].getAttributeTypeMap();
      let instance: { [index: string]: any } = {};
      for (let index = 0; index < attributeTypes.length; index++) {
        let attributeType = attributeTypes[index];
        instance[attributeType.baseName] = ObjectSerializer.serialize(
          data[attributeType.name],
          attributeType.type
        );
      }
      return instance;
    }
  }

  public static deserialize(data: any, type: string) {
    // polymorphism may change the actual type.
    type = ObjectSerializer.findCorrectType(data, type);
    if (data == undefined) {
      return data;
    } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
      return data;
    } else if (type.lastIndexOf('Array<', 0) === 0) {
      // string.startsWith pre es6
      let subType: string = type.replace('Array<', ''); // Array<Type> => Type>
      subType = subType.substring(0, subType.length - 1); // Type> => Type
      let transformedData: any[] = [];
      for (let index = 0; index < data.length; index++) {
        let datum = data[index];
        transformedData.push(ObjectSerializer.deserialize(datum, subType));
      }
      return transformedData;
    } else if (type === 'Date') {
      return new Date(data);
    } else {
      if (enumsMap[type]) {
        // is Enum
        return data;
      }

      if (!typeMap[type]) {
        // dont know the type
        return data;
      }
      let instance = new typeMap[type]();
      let attributeTypes = typeMap[type].getAttributeTypeMap();
      for (let index = 0; index < attributeTypes.length; index++) {
        let attributeType = attributeTypes[index];
        instance[attributeType.name] = ObjectSerializer.deserialize(
          data[attributeType.baseName],
          attributeType.type
        );
      }
      return instance;
    }
  }
}

export interface Authentication {
  /**
   * Apply authentication settings to header and query params.
   */
  applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
  public username: string = '';
  public password: string = '';

  applyToRequest(requestOptions: localVarRequest.Options): void {
    requestOptions.auth = {
      username: this.username,
      password: this.password,
    };
  }
}

export class HttpBearerAuth implements Authentication {
  public accessToken: string | (() => string) = '';

  applyToRequest(requestOptions: localVarRequest.Options): void {
    if (requestOptions && requestOptions.headers) {
      const accessToken =
        typeof this.accessToken === 'function'
          ? this.accessToken()
          : this.accessToken;
      requestOptions.headers['Authorization'] = 'Bearer ' + accessToken;
    }
  }
}

export class ApiKeyAuth implements Authentication {
  public apiKey: string = '';

  constructor(private location: string, private paramName: string) {}

  applyToRequest(requestOptions: localVarRequest.Options): void {
    if (this.location == 'query') {
      (<any>requestOptions.qs)[this.paramName] = this.apiKey;
    } else if (
      this.location == 'header' &&
      requestOptions &&
      requestOptions.headers
    ) {
      requestOptions.headers[this.paramName] = this.apiKey;
    } else if (
      this.location == 'cookie' &&
      requestOptions &&
      requestOptions.headers
    ) {
      if (requestOptions.headers['Cookie']) {
        requestOptions.headers['Cookie'] +=
          '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
      } else {
        requestOptions.headers['Cookie'] =
          this.paramName + '=' + encodeURIComponent(this.apiKey);
      }
    }
  }
}

export class OAuth implements Authentication {
  public accessToken: string = '';

  applyToRequest(requestOptions: localVarRequest.Options): void {
    if (requestOptions && requestOptions.headers) {
      requestOptions.headers['Authorization'] = 'Bearer ' + this.accessToken;
    }
  }
}

export class VoidAuth implements Authentication {
  public username: string = '';
  public password: string = '';

  applyToRequest(_: localVarRequest.Options): void {
    // Do nothing
  }
}

export type Interceptor = (
  requestOptions: localVarRequest.Options
) => Promise<void> | void;
