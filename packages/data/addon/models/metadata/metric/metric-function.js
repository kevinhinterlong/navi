/**
 * Copyright 2020, Yahoo Holdings Inc.
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import EmberObject from '@ember/object';

export default class MetricFunction extends EmberObject {
  /**
   * @property {String} name
   */
  name = undefined;

  /**
   * @property {String} longName
   */
  longName = undefined;

  /**
   * @property {String} description
   */
  description = undefined;

  /**
   * @property {Set<FunctionArgument>} arguments
   */
  arguments = new Set();
}
