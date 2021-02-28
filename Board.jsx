const React = require('react');
const {Box, Text, useFocusManager, useInput, useStdin} = require('ink');
const importJsx = require('import-jsx');
const Cell = importJsx('./Cell.jsx');


const Board = () => {
  const {isRawModeSupported, setRawMode} = useStdin();
  const focusManager = useFocusManager();
  const [point, setPoint] = React.useState({x: 0, y: 0});
  const [board, setBoard] = React.useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ])

  if(!isRawModeSupported) {
    setRawMode(false);
  }

  useInput(() => {})
  React.useEffect(() => {
    focusManager.focusNext();
  },[point])

  

  return (
    <Box
      flexDirection="column"
    >
    {
      board.map((row, rowIndex) => (
        <Box
        key={rowIndex}
        >
        {
          row.map((cell, cellIndex) => <Cell key={`${rowIndex}${cellIndex}`} value={cell} />)
        }
        </Box>
      ))
    }
    </Box>
  )
}

const navigate = (key, point) => {
  
}

module.exports = Board;
