var fs = require('fs-extra');
var path = require('path');
var config = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'config.json')));
var args = process.argv[2];

fs.copySync(
	path.join(__dirname, 'templates', 'container.js'),
	path.join(__dirname, '..', config.componentPath)
);