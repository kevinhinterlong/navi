import { run } from '@ember/runloop';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled, click, fillIn } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

let Template = hbs`
  <NumberFormatSelector
    @format={{this.format}}
    @onUpdateFormat={{this.onUpdateFormat}}
  />`;

module('Integration | Component | number format selector', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.set('format', '$0,0[.]00');
    this.set('onUpdateFormat', (newFormat) => this.set('format', newFormat));
  });

  test('updateFormat from radio button', async function (assert) {
    assert.expect(1);

    this.set('onUpdateFormat', (result) => {
      assert.equal(result, '0,0.00', 'onUpdateFormat action is called by radio button');
    });

    await render(Template);

    await click('.number-format-selector__radio-number input');
  });

  test('clearFormat', async function (assert) {
    assert.expect(1);

    this.set('onUpdateFormat', (result) => {
      assert.equal(result, '', 'onUpdateFormat action is called by custom format radio button');
    });

    await render(Template);

    await run(() => click('.number-format-selector__radio-custom input'));
  });

  test('highlight correct format when customFormat is changed', async function (assert) {
    assert.expect(2);

    await render(Template);

    await run(async () => {
      await fillIn('.number-format-selector__format-input', '$0,0[.]00a');
    });

    await settled();

    assert
      .dom('.number-format-selector__radio-custom input')
      .isChecked('custom format correctly highlighted when user enters custom format');

    await run(async () => {
      await fillIn('.number-format-selector__format-input', '0,0.00');
    });

    await settled();

    assert
      .dom('.number-format-selector__radio-number input')
      .isChecked('number format correctly highlighted when user enters number format');
  });
});
