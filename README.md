#Git Flow Bump Type
> This determines the semver bump type (major, minor, patch) of your git project according to an opinionated git workflow.

> Set up your `major`, and `minor` branch names in the options, from which merges will trigger according versions and
all other branch merges will be considered `patch`.

> Never concern yourself with what kind of bumping to give your next version again. Let your workflow
do the talking.

## Getting Started

```shell
npm install --save git-flow-bump-type
```

Use it from Node.js

```js
var gitFlowBumpType = require('git-flow-bump-type');
gitFlowBumpType({/* options */})
.then(function (bumpTo) {
  console.log('Bump to: ' bumpTo);
  // Would log 'major', 'minor', or 'patch'
});
```

### Options

#### Defaults
```js
gitFlowBumpType({
  masterOnly: true,
  majorBranch: 'remotes/origin/release',
  minorBranch: 'remotes/origin/develop'
});
```

### options.masterOnly - Boolean
Fail to determine a bump type if you aren't currently checked out on master
If you determine versions from a branch other than `master`, make this false

### options.majorBranch
The branch that should contain the current commit if a Major bump

### options.minorBranch
The branch that should contain the current commit if a Major bump

### How it is intended to work

There are a few assumptions being made when using this module:

1. The commit you are determining a bump for has been merged and pushed to `master`
2. You are trying to use automation, such as a continuous delivery server, to bump for you. Where only an individual commit is being examined and not all the code can be expected to be local.

If that's not the case and you want to determine bumps from your local repository, simply override the defaults to 
```
{
  majorBranch: 'release', //or whatever you call it
  minorBranch: 'develop'
}
```

