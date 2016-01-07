#!/usr/bin/env node
'use strict';
var meow = require('meow');
var fetchman = require('./');

var cli = meow([
	'Usage',
	'  $ fetchman [username/repo]',
	'',
	'Options',
	'  --help  Show this help',
]);

console.log(fetchman(cli.input[0] || 'unicorns'));
