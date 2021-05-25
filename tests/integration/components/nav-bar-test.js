import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | nav-bar', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the navbar with all routes', async function (assert) {
    await render(hbs`<NavBar/>`);
    assert.dom('.menu').exists();
    assert.dom('.links').exists();
    assert.dom('.menu .links .menu-about').containsText('Par Mums');
    assert.dom('.menu .links .menu-contact').containsText('Kontakti');
  });
});
