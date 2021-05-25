import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | riga cafes', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('nav').exists();
    assert.dom('h1').hasText('RigaCafes');
    assert.dom('h2').hasText('Sveicināti Riga Cafes!');

    assert.dom('.jumbo a.button').hasText('Par Mums');
    await click('.jumbo a.button');

    assert.equal(currentURL(), '/about');
  });
});
