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

/**
 *
 * @export
 * @interface JsonNode
 */
export interface JsonNode {
  /**
   *
   * @type {boolean}
   * @memberof JsonNode
   */
  array?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof JsonNode
   */
  bigDecimal?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof JsonNode
   */
  bigInteger?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof JsonNode
   */
  binary?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof JsonNode
   */
  boolean?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof JsonNode
   */
  containerNode?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof JsonNode
   */
  double?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof JsonNode
   */
  empty?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof JsonNode
   */
  float?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof JsonNode
   */
  floatingPointNumber?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof JsonNode
   */
  int?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof JsonNode
   */
  integralNumber?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof JsonNode
   */
  long?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof JsonNode
   */
  missingNode?: boolean;
  /**
   *
   * @type {string}
   * @memberof JsonNode
   */
  nodeType?: JsonNodeNodeTypeEnum;
  /**
   *
   * @type {boolean}
   * @memberof JsonNode
   */
  null?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof JsonNode
   */
  number?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof JsonNode
   */
  object?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof JsonNode
   */
  pojo?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof JsonNode
   */
  short?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof JsonNode
   */
  textual?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof JsonNode
   */
  valueNode?: boolean;
}

export const JsonNodeNodeTypeEnum = {
  Array: 'ARRAY',
  Binary: 'BINARY',
  Boolean: 'BOOLEAN',
  Missing: 'MISSING',
  Null: 'NULL',
  Number: 'NUMBER',
  Object: 'OBJECT',
  Pojo: 'POJO',
  String: 'STRING',
} as const;

export type JsonNodeNodeTypeEnum =
  (typeof JsonNodeNodeTypeEnum)[keyof typeof JsonNodeNodeTypeEnum];
