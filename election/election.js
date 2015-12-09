exports.tally = function(votes) {

  var tallyResults = function() {
    var vote
    for (var i = 0; i < votes.length; i++) {
      vote = votes[i];
      if (polls[vote]) {
        polls[vote].tally += 1;
      } else {
        polls[vote] = {
          candidate: vote,
          tally: 1
        };
      }
    }
  };


  var polls = {};
  tallyResults();

  // converts the hash into an array
  var results = [];
  for (key in polls) {
    if (polls.hasOwnProperty(key)) {
      results.push(polls[key])
    }
  }
  // sorting can be changed into a function that iterates through and finds the candidates with the highest tallies instead of a sort.
  results.sort(function(obj1, obj2) {
    if (obj1.tally < obj2.tally) {
      return 1;
    } else if (obj1.tally === obj2.tally) {
      return 0;
    } else {
      return -1;
    }
  })

  //checks for a majority win
  if (results[0].tally >= votes.length / 2) {
    return [results[0].candidate];
  }

  var lastIndex = 2;
  while (results[lastIndex].tally === results[lastIndex + 1].tally) {
    lastIndex += 1;
  }
  //creates the final list of candidates
  var finalCandidates = [];
  results.slice(0, lastIndex + 1).forEach(function(result) {
    finalCandidates.push(result.candidate);
  })
  // sorts the return, because that's what the tests are looking for.
  return finalCandidates.sort();

}
