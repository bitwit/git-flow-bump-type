var git = require('./lib/git');
var _ = require('lodash');

module.exports = function (opts) {
  var options = _.extend({
    //Branch versioning rules related
    majorBranch: 'remotes/origin/release',
    minorBranch: 'remotes/origin/develop',
    masterOnly: true
  }, opts || {});

  // First check if the commit is already tagged
  return git.isCommitTagged()
  // Next, if tagged exit quietly
  // Otherwise, look at the
  .then(function (isTagged) {
      if (isTagged) {
          console.log('Commit is already tagged');
          throw new Error('Commit is already tagged');
      } else {
          return git.getCommitHash();
      }
  })
  .then(function (hash) {
    return git.determineBumpType(options, hash);
  });
};
