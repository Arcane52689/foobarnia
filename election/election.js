exports.tally = function(votes) {
  // TODO implement tally()

  var polls = {};
  var vote, results
  for (var i = 0; i < votes.length; i++) {
    vote = votes[i];
    if (polls[vote]) {
      polls[vote] = polls[vote] + 1;
    } else {
      polls[vote] = 1;
    }
  }

  results = [];
  for (key in polls) {
    if (polls.hasOwnProperty(key)) {
      results.push({
        canditate: key,
        tally: polls[key]
      })
    }
  }





  return []
}
