import * as React from "react";
import PropTypes from "prop-types";

function Board({ historical, selectSquare, squares }) {
  function renderSquare(i) {
    return (
      <button
        className="bg-red-300 enabled:hover:bg-red-500 text-black font-bold p-4 rounded opacity-50 h-24 w-24 m-2 text-xl disabled:hover:bg-red-300"
        onClick={() => selectSquare(i)}
        disabled={historical}
      >
        {squares[i]}
      </button>
    );
  }

  return (
    <div>
      <div className="board-row flex">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row flex">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row flex">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

Board.propTypes = {
  historical: PropTypes.bool.isRequired,
  selectSquare: PropTypes.func.isRequired,
  squares: PropTypes.array.isRequired,
};

export default Board;
