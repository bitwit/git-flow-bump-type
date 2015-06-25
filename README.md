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

#####Defaults
```js
gitFlowBumpType({
  masterOnly: true,
  majorBranch: 'remotes/origin/release',
  minorBranch: 'remotes/origin/develop',
  patchBranch: '*'
});
```

### options.masterOnly - Boolean
Fail to determine a bump type if you aren't currently checked out on master

### options.minorBranch

### options.majorBranch

