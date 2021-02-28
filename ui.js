'use strict';
const React = require('react');
const {Text, Box} = require('ink');
const importJsx = require('import-jsx');
const Board = importJsx('./Board.jsx');

const App = () => (
  <Box
    flexDirection="column"
  >
		<Text color="green">Starting TicTacToe...</Text>
    <Board />
  </Box>
);

module.exports = App;
