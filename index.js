var git = require('./lib/git');
var _ = require('lodash');

module.exports = function (opts) {
  var defaultOpts = _.extend({
    //Branch versioning rules related
    majorBranch: 'remotes/origin/release',
    minorBranch: 'remotes/origin/develop',
    masterOnly: true
  }, opts || {});

  // First check if the commit is already tagged
  return git.isCommitTagged(grunt, opts);
  // Next, if tagged exit quietly
  // Otherwise, look at the
  .then(function (isTagged) {
      if (isTagged) {
          console.log('Commit is already tagged');
          return throw new Error('Commit it already tagged');
      } else {
          return git.getCommitHash(opts);
      }
  })
  .then(function (hash) {
    return git.determineBumpType(opts, hash);
  });
};
