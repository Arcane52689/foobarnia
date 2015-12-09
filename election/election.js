exports.tally = function(votes) {
  // TODO implement tally()

  var polls = {};
  var vote, results
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

  results = [];
  for (key in polls) {
    if (polls.hasOwnProperty(key)) {
      results.push(polls[key])
    }
  }
  results.sort(function(obj1, obj2) {
    if (obj1.tally < obj2.tally) {
      return -1;
    } else if (obj1.tally === obj2.tally) {
      return 0;
    } else {
      return 1;
    }
  })
  console.log(results)

  if (results[results.length - 1].tally >= votes.length / 2) {
    return [results[results.length - 1].candidate];
  }

  var lastIndex = results.length - 4 ;
  while (results[lastIndex].tally === results[lastIndex - 1].tally) {
    lastIndex -= 1;
  }

  var finalCandidates = [];
  results.slice(lastIndex, -1).forEach(function(result) {
    finalCandidates.push(result.candidate);
  })

  return finalCandidates;

}
