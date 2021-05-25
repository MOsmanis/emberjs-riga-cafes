import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | cafe', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:cafe');
    assert.ok(route);
  });
});
