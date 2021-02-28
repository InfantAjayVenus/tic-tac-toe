'use strict';
const React = require('react');
const {Text, Box, useFocus} = require('ink');

const valueRepresentation = {
  0: '-',
  1: 'O',
  2: 'X'
};

const Cell = ({value}) => {
  const {isFocused} = useFocus();
  return (
    <Box
      color={isFocused ? "greenBright" : "white"}
      borderColor={isFocused ? "greenBright" : "white"}
      borderStyle={isFocused ? "bold" : "round"}
      width={4}
      justifyContent="center"
      alignItems="center"
    >
      <Text bold>{valueRepresentation[value]}</Text>
    </Box>
  )
}

module.exports = Cell;
