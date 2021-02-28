#!/usr/bin/env node
'use strict';
const React = require('react');
const importJsx = require('import-jsx');
const {render} = require('ink');
const meow = require('meow');

const ui = importJsx('./ui');

const cli = meow(`
	Usage
	  $ tic-tac-toe

	Options
		--name  Your name

	Examples
	  $ tic-tac-toe --name=Jane
	  Hello, Jane
`);

render(React.createElement(ui, cli.flags));
