export * from './attackDetectionApi';
import { AttackDetectionApi } from './attackDetectionApi';
export * from './authenticationManagementApi';
import { AuthenticationManagementApi } from './authenticationManagementApi';
export * from './clientAttributeCertificateApi';
import { ClientAttributeCertificateApi } from './clientAttributeCertificateApi';
export * from './clientInitialAccessApi';
import { ClientInitialAccessApi } from './clientInitialAccessApi';
export * from './clientRegistrationPolicyApi';
import { ClientRegistrationPolicyApi } from './clientRegistrationPolicyApi';
export * from './clientRoleMappingsApi';
import { ClientRoleMappingsApi } from './clientRoleMappingsApi';
export * from './clientScopesApi';
import { ClientScopesApi } from './clientScopesApi';
export * from './clientsApi';
import { ClientsApi } from './clientsApi';
export * from './componentApi';
import { ComponentApi } from './componentApi';
export * from './groupsApi';
import { GroupsApi } from './groupsApi';
export * from './identityProvidersApi';
import { IdentityProvidersApi } from './identityProvidersApi';
export * from './keyApi';
import { KeyApi } from './keyApi';
export * from './protocolMappersApi';
import { ProtocolMappersApi } from './protocolMappersApi';
export * from './realmsAdminApi';
import { RealmsAdminApi } from './realmsAdminApi';
export * from './roleMapperApi';
import { RoleMapperApi } from './roleMapperApi';
export * from './rolesApi';
import { RolesApi } from './rolesApi';
export * from './rolesByIDApi';
import { RolesByIDApi } from './rolesByIDApi';
export * from './rootApi';
import { RootApi } from './rootApi';
export * from './scopeMappingsApi';
import { ScopeMappingsApi } from './scopeMappingsApi';
export * from './usersApi';
import { UsersApi } from './usersApi';
import * as http from 'http';

export class HttpError extends Error {
  constructor(
    public response: http.IncomingMessage,
    public body: any,
    public statusCode?: number
  ) {
    super('HTTP request failed');
    this.name = 'HttpError';
  }
}

export { RequestFile } from '../model/models';

export const APIS = [
  AttackDetectionApi,
  AuthenticationManagementApi,
  ClientAttributeCertificateApi,
  ClientInitialAccessApi,
  ClientRegistrationPolicyApi,
  ClientRoleMappingsApi,
  ClientScopesApi,
  ClientsApi,
  ComponentApi,
  GroupsApi,
  IdentityProvidersApi,
  KeyApi,
  ProtocolMappersApi,
  RealmsAdminApi,
  RoleMapperApi,
  RolesApi,
  RolesByIDApi,
  RootApi,
  ScopeMappingsApi,
  UsersApi,
];
