/**
 * Copyright 2021, Yahoo Holdings Inc.
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import Route from '@ember/routing/route';
import type ReportModel from 'navi-core/models/report';

export default class ReportsPrintReportsReportIndexRoute extends Route {
  /**
   * @overide
   * @param model - report model record
   */
  redirect(model: ReportModel) {
    this.replaceWith('reports-print.reports.report.view', model.id);
  }
}
