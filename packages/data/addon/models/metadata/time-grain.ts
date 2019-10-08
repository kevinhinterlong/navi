/**
 * Copyright 2019, Yahoo Holdings Inc.
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 *
 * Time Grain Fragment Object
 */
import EmberObject, { computed } from '@ember/object';
import { getOwner } from '@ember/application';

export default class TimeGrain extends EmberObject {
  /**
   * @property name
   */
  name?: string = undefined;

  /**
   * @property longName
   */
  longName?: string = undefined;

  /**
   * @property description
   */
  description?: string = undefined;

  /**
   * @property retention
   */
  retention?: string = undefined;

  /**
   * @property metricIds - array of metric ids
   */
  metricIds?: Array<string> = undefined;

  /**
   * @property dimensionIds - array of dimension ids
   */
  dimensionIds?: Array<string> = undefined;

  /**
   * @property {Array} metrics - array of metric models
   */
  @computed()
  get metrics() {
    if (!this.metricIds) {
      return [];
    }

    const keg = getOwner(this).lookup('service:keg');
    return this.metricIds.map(metricId => keg.getById('metadata/metric', metricId));
  }

  /**
   * @property {Array} dimensions - array of dimension models
   */
  @computed()
  get dimensions() {
    if (!this.dimensionIds) {
      return [];
    }

    const keg = getOwner(this).lookup('service:keg');
    return this.dimensionIds.map(dimensionId => keg.getById('metadata/dimension', dimensionId));
  }
}
