/**
 * Copyright 2020, Yahoo Holdings Inc.
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import EmberObject from '@ember/object';

class Column extends EmberObject {
  /**
   * @property {String} identifierField - field used as the id
   */
  identifierField = 'name';

  /**
   * @property {String} name
   */
  name = undefined;

  /**
   * @property {String} longName - Display name
   */
  longName = undefined;

  /**
   * @property {String} description
   */
  description = undefined;

  /**
   * @property {String} category
   */
  category = undefined;

  /**
   * @property {DataType} valueType - enum value describing what type the values of this column hold
   */
  valueType = undefined;

  /**
   * @property {Set} columnTags
   */
  columnTags = new Set();
}

export default Column;
