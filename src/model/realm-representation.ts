/* tslint:disable */
/* eslint-disable */
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

// May contain unused imports in some cases
// @ts-ignore
import { AuthenticationFlowRepresentation } from './authentication-flow-representation';
// May contain unused imports in some cases
// @ts-ignore
import { AuthenticatorConfigRepresentation } from './authenticator-config-representation';
// May contain unused imports in some cases
// @ts-ignore
import { ClientRepresentation } from './client-representation';
// May contain unused imports in some cases
// @ts-ignore
import { ClientScopeRepresentation } from './client-scope-representation';
// May contain unused imports in some cases
// @ts-ignore
import { GroupRepresentation } from './group-representation';
// May contain unused imports in some cases
// @ts-ignore
import { IdentityProviderMapperRepresentation } from './identity-provider-mapper-representation';
// May contain unused imports in some cases
// @ts-ignore
import { IdentityProviderRepresentation } from './identity-provider-representation';
// May contain unused imports in some cases
// @ts-ignore
import { JsonNode } from './json-node';
// May contain unused imports in some cases
// @ts-ignore
import { MultivaluedHashMap } from './multivalued-hash-map';
// May contain unused imports in some cases
// @ts-ignore
import { ProtocolMapperRepresentation } from './protocol-mapper-representation';
// May contain unused imports in some cases
// @ts-ignore
import { RequiredActionProviderRepresentation } from './required-action-provider-representation';
// May contain unused imports in some cases
// @ts-ignore
import { RoleRepresentation } from './role-representation';
// May contain unused imports in some cases
// @ts-ignore
import { RolesRepresentation } from './roles-representation';
// May contain unused imports in some cases
// @ts-ignore
import { ScopeMappingRepresentation } from './scope-mapping-representation';
// May contain unused imports in some cases
// @ts-ignore
import { UserFederationMapperRepresentation } from './user-federation-mapper-representation';
// May contain unused imports in some cases
// @ts-ignore
import { UserFederationProviderRepresentation } from './user-federation-provider-representation';
// May contain unused imports in some cases
// @ts-ignore
import { UserRepresentation } from './user-representation';

/**
 *
 * @export
 * @interface RealmRepresentation
 */
export interface RealmRepresentation {
  /**
   *
   * @type {number}
   * @memberof RealmRepresentation
   */
  accessCodeLifespan?: number;
  /**
   *
   * @type {number}
   * @memberof RealmRepresentation
   */
  accessCodeLifespanLogin?: number;
  /**
   *
   * @type {number}
   * @memberof RealmRepresentation
   */
  accessCodeLifespanUserAction?: number;
  /**
   *
   * @type {number}
   * @memberof RealmRepresentation
   */
  accessTokenLifespan?: number;
  /**
   *
   * @type {number}
   * @memberof RealmRepresentation
   */
  accessTokenLifespanForImplicitFlow?: number;
  /**
   *
   * @type {string}
   * @memberof RealmRepresentation
   */
  accountTheme?: string;
  /**
   *
   * @type {number}
   * @memberof RealmRepresentation
   */
  actionTokenGeneratedByAdminLifespan?: number;
  /**
   *
   * @type {number}
   * @memberof RealmRepresentation
   */
  actionTokenGeneratedByUserLifespan?: number;
  /**
   *
   * @type {boolean}
   * @memberof RealmRepresentation
   */
  adminEventsDetailsEnabled?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof RealmRepresentation
   */
  adminEventsEnabled?: boolean;
  /**
   *
   * @type {string}
   * @memberof RealmRepresentation
   */
  adminTheme?: string;
  /**
   *
   * @type {{ [key: string]: any; }}
   * @memberof RealmRepresentation
   */
  attributes?: { [key: string]: any };
  /**
   *
   * @type {Array<AuthenticationFlowRepresentation>}
   * @memberof RealmRepresentation
   */
  authenticationFlows?: Array<AuthenticationFlowRepresentation>;
  /**
   *
   * @type {Array<AuthenticatorConfigRepresentation>}
   * @memberof RealmRepresentation
   */
  authenticatorConfig?: Array<AuthenticatorConfigRepresentation>;
  /**
   *
   * @type {string}
   * @memberof RealmRepresentation
   */
  browserFlow?: string;
  /**
   *
   * @type {{ [key: string]: any; }}
   * @memberof RealmRepresentation
   */
  browserSecurityHeaders?: { [key: string]: any };
  /**
   *
   * @type {boolean}
   * @memberof RealmRepresentation
   */
  bruteForceProtected?: boolean;
  /**
   *
   * @type {string}
   * @memberof RealmRepresentation
   */
  clientAuthenticationFlow?: string;
  /**
   *
   * @type {number}
   * @memberof RealmRepresentation
   */
  clientOfflineSessionIdleTimeout?: number;
  /**
   *
   * @type {number}
   * @memberof RealmRepresentation
   */
  clientOfflineSessionMaxLifespan?: number;
  /**
   *
   * @type {JsonNode}
   * @memberof RealmRepresentation
   */
  clientPolicies?: JsonNode;
  /**
   *
   * @type {JsonNode}
   * @memberof RealmRepresentation
   */
  clientProfiles?: JsonNode;
  /**
   *
   * @type {{ [key: string]: any; }}
   * @memberof RealmRepresentation
   */
  clientScopeMappings?: { [key: string]: any };
  /**
   *
   * @type {Array<ClientScopeRepresentation>}
   * @memberof RealmRepresentation
   */
  clientScopes?: Array<ClientScopeRepresentation>;
  /**
   *
   * @type {number}
   * @memberof RealmRepresentation
   */
  clientSessionIdleTimeout?: number;
  /**
   *
   * @type {number}
   * @memberof RealmRepresentation
   */
  clientSessionMaxLifespan?: number;
  /**
   *
   * @type {Array<ClientRepresentation>}
   * @memberof RealmRepresentation
   */
  clients?: Array<ClientRepresentation>;
  /**
   *
   * @type {MultivaluedHashMap}
   * @memberof RealmRepresentation
   */
  components?: MultivaluedHashMap;
  /**
   *
   * @type {Array<string>}
   * @memberof RealmRepresentation
   */
  defaultDefaultClientScopes?: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof RealmRepresentation
   */
  defaultGroups?: Array<string>;
  /**
   *
   * @type {string}
   * @memberof RealmRepresentation
   */
  defaultLocale?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof RealmRepresentation
   */
  defaultOptionalClientScopes?: Array<string>;
  /**
   *
   * @type {RoleRepresentation}
   * @memberof RealmRepresentation
   */
  defaultRole?: RoleRepresentation;
  /**
   *
   * @type {string}
   * @memberof RealmRepresentation
   */
  defaultSignatureAlgorithm?: string;
  /**
   *
   * @type {string}
   * @memberof RealmRepresentation
   */
  directGrantFlow?: string;
  /**
   *
   * @type {string}
   * @memberof RealmRepresentation
   */
  displayName?: string;
  /**
   *
   * @type {string}
   * @memberof RealmRepresentation
   */
  displayNameHtml?: string;
  /**
   *
   * @type {string}
   * @memberof RealmRepresentation
   */
  dockerAuthenticationFlow?: string;
  /**
   *
   * @type {boolean}
   * @memberof RealmRepresentation
   */
  duplicateEmailsAllowed?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof RealmRepresentation
   */
  editUsernameAllowed?: boolean;
  /**
   *
   * @type {string}
   * @memberof RealmRepresentation
   */
  emailTheme?: string;
  /**
   *
   * @type {boolean}
   * @memberof RealmRepresentation
   */
  enabled?: boolean;
  /**
   *
   * @type {Array<string>}
   * @memberof RealmRepresentation
   */
  enabledEventTypes?: Array<string>;
  /**
   *
   * @type {boolean}
   * @memberof RealmRepresentation
   */
  eventsEnabled?: boolean;
  /**
   *
   * @type {number}
   * @memberof RealmRepresentation
   */
  eventsExpiration?: number;
  /**
   *
   * @type {Array<string>}
   * @memberof RealmRepresentation
   */
  eventsListeners?: Array<string>;
  /**
   *
   * @type {number}
   * @memberof RealmRepresentation
   */
  failureFactor?: number;
  /**
   *
   * @type {Array<UserRepresentation>}
   * @memberof RealmRepresentation
   */
  federatedUsers?: Array<UserRepresentation>;
  /**
   *
   * @type {Array<GroupRepresentation>}
   * @memberof RealmRepresentation
   */
  groups?: Array<GroupRepresentation>;
  /**
   *
   * @type {string}
   * @memberof RealmRepresentation
   */
  id?: string;
  /**
   *
   * @type {Array<IdentityProviderMapperRepresentation>}
   * @memberof RealmRepresentation
   */
  identityProviderMappers?: Array<IdentityProviderMapperRepresentation>;
  /**
   *
   * @type {Array<IdentityProviderRepresentation>}
   * @memberof RealmRepresentation
   */
  identityProviders?: Array<IdentityProviderRepresentation>;
  /**
   *
   * @type {boolean}
   * @memberof RealmRepresentation
   */
  internationalizationEnabled?: boolean;
  /**
   *
   * @type {string}
   * @memberof RealmRepresentation
   */
  keycloakVersion?: string;
  /**
   *
   * @type {string}
   * @memberof RealmRepresentation
   */
  loginTheme?: string;
  /**
   *
   * @type {boolean}
   * @memberof RealmRepresentation
   */
  loginWithEmailAllowed?: boolean;
  /**
   *
   * @type {number}
   * @memberof RealmRepresentation
   */
  maxDeltaTimeSeconds?: number;
  /**
   *
   * @type {number}
   * @memberof RealmRepresentation
   */
  maxFailureWaitSeconds?: number;
  /**
   *
   * @type {number}
   * @memberof RealmRepresentation
   */
  minimumQuickLoginWaitSeconds?: number;
  /**
   *
   * @type {number}
   * @memberof RealmRepresentation
   */
  notBefore?: number;
  /**
   *
   * @type {number}
   * @memberof RealmRepresentation
   */
  oAuth2DeviceCodeLifespan?: number;
  /**
   *
   * @type {number}
   * @memberof RealmRepresentation
   */
  oAuth2DevicePollingInterval?: number;
  /**
   *
   * @type {number}
   * @memberof RealmRepresentation
   */
  oauth2DeviceCodeLifespan?: number;
  /**
   *
   * @type {number}
   * @memberof RealmRepresentation
   */
  oauth2DevicePollingInterval?: number;
  /**
   *
   * @type {number}
   * @memberof RealmRepresentation
   */
  offlineSessionIdleTimeout?: number;
  /**
   *
   * @type {number}
   * @memberof RealmRepresentation
   */
  offlineSessionMaxLifespan?: number;
  /**
   *
   * @type {boolean}
   * @memberof RealmRepresentation
   */
  offlineSessionMaxLifespanEnabled?: boolean;
  /**
   *
   * @type {string}
   * @memberof RealmRepresentation
   */
  otpPolicyAlgorithm?: string;
  /**
   *
   * @type {number}
   * @memberof RealmRepresentation
   */
  otpPolicyDigits?: number;
  /**
   *
   * @type {number}
   * @memberof RealmRepresentation
   */
  otpPolicyInitialCounter?: number;
  /**
   *
   * @type {number}
   * @memberof RealmRepresentation
   */
  otpPolicyLookAheadWindow?: number;
  /**
   *
   * @type {number}
   * @memberof RealmRepresentation
   */
  otpPolicyPeriod?: number;
  /**
   *
   * @type {string}
   * @memberof RealmRepresentation
   */
  otpPolicyType?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof RealmRepresentation
   */
  otpSupportedApplications?: Array<string>;
  /**
   *
   * @type {string}
   * @memberof RealmRepresentation
   */
  passwordPolicy?: string;
  /**
   *
   * @type {boolean}
   * @memberof RealmRepresentation
   */
  permanentLockout?: boolean;
  /**
   *
   * @type {Array<ProtocolMapperRepresentation>}
   * @memberof RealmRepresentation
   */
  protocolMappers?: Array<ProtocolMapperRepresentation>;
  /**
   *
   * @type {number}
   * @memberof RealmRepresentation
   */
  quickLoginCheckMilliSeconds?: number;
  /**
   *
   * @type {string}
   * @memberof RealmRepresentation
   */
  realm?: string;
  /**
   *
   * @type {number}
   * @memberof RealmRepresentation
   */
  refreshTokenMaxReuse?: number;
  /**
   *
   * @type {boolean}
   * @memberof RealmRepresentation
   */
  registrationAllowed?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof RealmRepresentation
   */
  registrationEmailAsUsername?: boolean;
  /**
   *
   * @type {string}
   * @memberof RealmRepresentation
   */
  registrationFlow?: string;
  /**
   *
   * @type {boolean}
   * @memberof RealmRepresentation
   */
  rememberMe?: boolean;
  /**
   *
   * @type {Array<RequiredActionProviderRepresentation>}
   * @memberof RealmRepresentation
   */
  requiredActions?: Array<RequiredActionProviderRepresentation>;
  /**
   *
   * @type {string}
   * @memberof RealmRepresentation
   */
  resetCredentialsFlow?: string;
  /**
   *
   * @type {boolean}
   * @memberof RealmRepresentation
   */
  resetPasswordAllowed?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof RealmRepresentation
   */
  revokeRefreshToken?: boolean;
  /**
   *
   * @type {RolesRepresentation}
   * @memberof RealmRepresentation
   */
  roles?: RolesRepresentation;
  /**
   *
   * @type {Array<ScopeMappingRepresentation>}
   * @memberof RealmRepresentation
   */
  scopeMappings?: Array<ScopeMappingRepresentation>;
  /**
   *
   * @type {{ [key: string]: any; }}
   * @memberof RealmRepresentation
   */
  smtpServer?: { [key: string]: any };
  /**
   *
   * @type {string}
   * @memberof RealmRepresentation
   */
  sslRequired?: string;
  /**
   *
   * @type {number}
   * @memberof RealmRepresentation
   */
  ssoSessionIdleTimeout?: number;
  /**
   *
   * @type {number}
   * @memberof RealmRepresentation
   */
  ssoSessionIdleTimeoutRememberMe?: number;
  /**
   *
   * @type {number}
   * @memberof RealmRepresentation
   */
  ssoSessionMaxLifespan?: number;
  /**
   *
   * @type {number}
   * @memberof RealmRepresentation
   */
  ssoSessionMaxLifespanRememberMe?: number;
  /**
   *
   * @type {Array<string>}
   * @memberof RealmRepresentation
   */
  supportedLocales?: Array<string>;
  /**
   *
   * @type {Array<UserFederationMapperRepresentation>}
   * @memberof RealmRepresentation
   */
  userFederationMappers?: Array<UserFederationMapperRepresentation>;
  /**
   *
   * @type {Array<UserFederationProviderRepresentation>}
   * @memberof RealmRepresentation
   */
  userFederationProviders?: Array<UserFederationProviderRepresentation>;
  /**
   *
   * @type {boolean}
   * @memberof RealmRepresentation
   */
  userManagedAccessAllowed?: boolean;
  /**
   *
   * @type {Array<UserRepresentation>}
   * @memberof RealmRepresentation
   */
  users?: Array<UserRepresentation>;
  /**
   *
   * @type {boolean}
   * @memberof RealmRepresentation
   */
  verifyEmail?: boolean;
  /**
   *
   * @type {number}
   * @memberof RealmRepresentation
   */
  waitIncrementSeconds?: number;
  /**
   *
   * @type {Array<string>}
   * @memberof RealmRepresentation
   */
  webAuthnPolicyAcceptableAaguids?: Array<string>;
  /**
   *
   * @type {string}
   * @memberof RealmRepresentation
   */
  webAuthnPolicyAttestationConveyancePreference?: string;
  /**
   *
   * @type {string}
   * @memberof RealmRepresentation
   */
  webAuthnPolicyAuthenticatorAttachment?: string;
  /**
   *
   * @type {boolean}
   * @memberof RealmRepresentation
   */
  webAuthnPolicyAvoidSameAuthenticatorRegister?: boolean;
  /**
   *
   * @type {number}
   * @memberof RealmRepresentation
   */
  webAuthnPolicyCreateTimeout?: number;
  /**
   *
   * @type {Array<string>}
   * @memberof RealmRepresentation
   */
  webAuthnPolicyPasswordlessAcceptableAaguids?: Array<string>;
  /**
   *
   * @type {string}
   * @memberof RealmRepresentation
   */
  webAuthnPolicyPasswordlessAttestationConveyancePreference?: string;
  /**
   *
   * @type {string}
   * @memberof RealmRepresentation
   */
  webAuthnPolicyPasswordlessAuthenticatorAttachment?: string;
  /**
   *
   * @type {boolean}
   * @memberof RealmRepresentation
   */
  webAuthnPolicyPasswordlessAvoidSameAuthenticatorRegister?: boolean;
  /**
   *
   * @type {number}
   * @memberof RealmRepresentation
   */
  webAuthnPolicyPasswordlessCreateTimeout?: number;
  /**
   *
   * @type {string}
   * @memberof RealmRepresentation
   */
  webAuthnPolicyPasswordlessRequireResidentKey?: string;
  /**
   *
   * @type {string}
   * @memberof RealmRepresentation
   */
  webAuthnPolicyPasswordlessRpEntityName?: string;
  /**
   *
   * @type {string}
   * @memberof RealmRepresentation
   */
  webAuthnPolicyPasswordlessRpId?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof RealmRepresentation
   */
  webAuthnPolicyPasswordlessSignatureAlgorithms?: Array<string>;
  /**
   *
   * @type {string}
   * @memberof RealmRepresentation
   */
  webAuthnPolicyPasswordlessUserVerificationRequirement?: string;
  /**
   *
   * @type {string}
   * @memberof RealmRepresentation
   */
  webAuthnPolicyRequireResidentKey?: string;
  /**
   *
   * @type {string}
   * @memberof RealmRepresentation
   */
  webAuthnPolicyRpEntityName?: string;
  /**
   *
   * @type {string}
   * @memberof RealmRepresentation
   */
  webAuthnPolicyRpId?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof RealmRepresentation
   */
  webAuthnPolicySignatureAlgorithms?: Array<string>;
  /**
   *
   * @type {string}
   * @memberof RealmRepresentation
   */
  webAuthnPolicyUserVerificationRequirement?: string;
}
