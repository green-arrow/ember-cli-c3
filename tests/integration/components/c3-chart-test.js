import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('c3-chart', 'Integration | Component | c3 chart', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.set('data', {
    columns: [
      ['data1', 30],
      ['data2', 120]
    ],
    type : 'donut'
  });

  this.set('config', {
    donut: {
      title: "Iris Petal Width"
    }
  });

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{c3-chart data=data config=config}}`);

  assert.equal(this.$().find('svg').length, 1, 'one svg element rendered');
});
