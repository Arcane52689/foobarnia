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

  results.sort(function(obj1, obj2) {
    if (obj1.tally < obj2.tally) {
      return -1;
    } else if (obj1.tally === obj2.tally) {
      return 0;
    } else {
      return 1;
    }
  })





  return []
}
