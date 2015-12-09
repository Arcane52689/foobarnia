exports.tally = function(votes) {
  // TODO implement tally()

  var polls = {};
  var vote
  for (var i = 0; i < votes.length; i++) {
    vote = votes[i];
    if (polls[vote]) {
      polls[vote] = polls[vote] + 1;
    } else {
      polls[vote] = 1;
    }
  }






  return []
}
