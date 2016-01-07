#!/usr/bin/env node
'use strict';
var meow = require('meow');
var fetchman = require('./');

var cli = meow([
	'Usage',
	'  $ fetchman [input]',
	'',
	'Options',
	'  --foo  Lorem ipsum. [Default: false]',
	'',
	'Examples',
	'  $ fetchman',
	'  unicorns & rainbows',
	'  $ fetchman ponies',
	'  ponies & rainbows'
]);

console.log(fetchman(cli.input[0] || 'unicorns'));
