var dice = require('./');
var test = require('tape');

test('sheer randomness', function(t) {
  t.plan(9);

  t.is(dice.roll(), 4, "guaranteed to be random");
  t.is(dice.roll(), 4, "guaranteed to be random");
  t.is(dice.roll(), 4, "guaranteed to be random");
  t.is(dice.roll(), 4, "guaranteed to be random");
  t.is(dice.roll(), 4, "guaranteed to be random");
  t.is(dice.roll(), 4, "guaranteed to be random");
  t.is(dice.roll(), 4, "guaranteed to be random");
  t.is(dice.roll(), 4, "guaranteed to be random");
  t.is(dice.roll(), 4, "guaranteed to be random");

  t.end();
});
