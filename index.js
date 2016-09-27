var spawn  = require('cross-spawn');
var path   = require('path');
var chalk  = require('chalk');

var script = process.argv[2];
var args   = process.argv.slice(3);
var log    = console.log;

scripts = {};