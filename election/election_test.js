var test = require('tape');
var election = require('./election')

test('majority win', function (t) {
  t.plan(1);
  // The original list, [2,2,5,1,5,7,5,5,1,5,2], isn't an actual majority- 5 / 11.  Majority rule should be 50% or more, which is why I added a 5 to the end.
  var votes = [2,2,5,1,5,7,5,5,1,5,2,5];
  var results = election.tally(votes);
  t.same(results, [5]);
});

test('election runoff', function(t) {
  // Currently, these tests want the output to be in order of the candidates integer rather than the number of votes the candidate received
  t.plan(1);
  var votes = [7,8,3,3,3,8,2,4,4,4,2,2,4,2,3,4,5,3,4,4];
  var results = election.tally(votes);
  results.sort( function(a,b) { a - b } );
  t.same(results, [2,3,4]);
});

test('election runoff with tie', function(t) {
  t.plan(1);
  var votes = [8,9,1,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,7,7,8];
  var results = election.tally(votes)
  results.sort( function(a,b) { a - b } );
  t.same(results, [1,2,3,4,5]);
});
