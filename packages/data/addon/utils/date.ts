/**
 * Copyright 2020, Yahoo Holdings Inc.
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import moment, { Moment } from 'moment';
import config from 'ember-get-config';

export const EPOCH_FORMAT_STRING = 'YYYY-MM-DD';
export const MONTH_DATE_FORMAT_STRING = 'M/D';
export const API_DATE_FORMAT_STRING = 'YYYY-MM-DD HH:mm:ss.SSS';
export const PARAM_DATE_FORMAT_STRING = 'YYYY-MM-DD';
export const CAL_DATE_FORMAT_STRING = 'MM-DD-YYYY';
export const CAL_DISPLAY_DATE_FORMAT_STRING = 'M/D/YYYY';

const weekDown = <const>['second', 'minute', 'hour', 'day', 'week'];
const monthUp = <const>['month', 'quarter', 'year'];

export const DateTimePeriods = <const>[...weekDown, ...monthUp];
export const Grains = <const>[...weekDown, 'isoWeek', ...monthUp];

export type DateTimePeriod = typeof DateTimePeriods[number];
export type Grain = typeof Grains[number];

/**
 * Returns a date time period for a gain
 */
export function getPeriodForGrain(grain: Grain): DateTimePeriod {
  if ('isoWeek' === grain) {
    return 'week';
  }
  return grain;
}

/**
 * Returns the epoch date at the start of the given grain
 */
export function getFirstDayEpochForGrain(grain: Grain, dateFormat: string = API_DATE_FORMAT_STRING): string {
  const period = getPeriodForGrain(grain);
  const epochDate = moment(config.navi.dataEpoch, EPOCH_FORMAT_STRING);

  return epochDate.add(1, period).subtract(1, 'day').startOf(grain).format(dateFormat);
}

/**
 * Returns last day of grain for a given date
 */
export function getLastDayOfGrain(date: Moment, grain: Grain, dateFormat: string = API_DATE_FORMAT_STRING): string {
  return moment(date).endOf(grain).format(dateFormat);
}

/**
 * Returns first day of grain for a given date
 */
export function getFirstDayOfGrain(date: Moment, grain: Grain, dateFormat: string = API_DATE_FORMAT_STRING): string {
  return moment(date).startOf(grain).format(dateFormat);
}
