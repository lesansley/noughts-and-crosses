import React from "react";
import Board from "./Board";
import Moves from "./Moves";
import * as h from "../utilities/helpers";

function Game() {
  const emptyBoard = [Array(9).fill(null)];

  const [history, setHistory] = h.useLocalStorageState("history", emptyBoard);
  const [currentSquaresIndex, setCurrentSquaresIndex] = React.useState(
    history.length - 1
  );

  const squares = history[history.length - 1];
  const winner = h.calculateWinner(squares);
  const nextValue = h.calculateNextValue(squares);
  const status = h.calculateStatus(winner, squares, nextValue);

  React.useEffect(() => {
    window.localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  function selectHistory(index) {
    setCurrentSquaresIndex(index);
  }

  function selectSquare(square) {
    if (winner || squares[square]) {
      return;
    }
    const copyHistory = [...history];
    const copySquares = [...squares];
    copySquares[square] = nextValue;
    copyHistory.push(copySquares);
    setHistory(copyHistory);
    setCurrentSquaresIndex(copyHistory.length - 1);
  }

  function restart() {
    setHistory(emptyBoard);
    setCurrentSquaresIndex(0);
  }

  return (
    <div className="game">
      <div className="game-info">
        <div className="ml-2">{status}</div>
      </div>
      <div className="game-board">
        <Board
          selectSquare={selectSquare}
          squares={history[currentSquaresIndex]}
          historical={history.length - 1 !== currentSquaresIndex}
        />
        <button
          className="restart rounded bg-green-300 hover:bg-green-500 p-4 ml-2 w-24 mt-4"
          onClick={restart}
        >
          restart
        </button>
      </div>
      <div className="game-history mt-10">
        <h2 className="font-semibold underline text-lg">Game History</h2>
        <ol>
          <Moves
            selectHistory={selectHistory}
            currentHistory={currentSquaresIndex}
            historyMoves={history.length}
          />
        </ol>
      </div>
    </div>
  );
}

export default Game;
