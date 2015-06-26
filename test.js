var gitFlowBumpType = require('./index');

gitFlowBumpType()
.then(function (bumpAs) {
	console.log('bumpAs:', bumpAs);
});
