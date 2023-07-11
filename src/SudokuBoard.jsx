import "./sudokuboard.css";

const SudokuBoard = ({ board, setBoard }) => {
  const handleChange = (e, row, col) => {
    const newValue = e.target.value

    if (newValue.length > 1) return
    
    const newBoard = [...board]
    newBoard[row][col] = newValue
    setBoard(newBoard)
  }

  return (
    <form id="sudoku-board">
        <table>
          <tbody>
            {board.map((row, rowIndex) => (
              <tr className="table-row" key={rowIndex}>
                {row.map((cellValue, columnIndex) => (
                  <td className="table-col" key={columnIndex}>
                    <input
                      type="number"
                      min={1}
                      max={9}
                      value={cellValue || ""}
                      onChange={(e) => handleChange(e, rowIndex, columnIndex)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
    </form>
  );
};

export default SudokuBoard;
