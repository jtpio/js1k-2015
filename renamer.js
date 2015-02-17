#!/usr/bin/env node

'use strict';

var fs = require('fs');
var path = require('path');
var argv = process.argv.slice(2);

if (argv.length < 1) {
	console.error('The first parameter must be a file');
	process.exit(1);
}

fs.readFile(path.resolve(__dirname, argv[0]), function (err, file) {
	if (err) {
		console.error('File ' + file + ' does not exist: ' + err);
		return;
	}

	var input = file.toString();
	var mapping = argv.slice(1);

	mapping.forEach(function (rep) {
		var replace = rep.split('=');
		if (replace.length !== 2) {
			return;
		}

		input = input.replace(new RegExp(replace[0], 'g'), replace[1]);

	});

	process.stdout.write(input);
});
