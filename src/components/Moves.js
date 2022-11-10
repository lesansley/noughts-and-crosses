import React from "react";
import PropTypes from "prop-types";
/**
 *
 * @param {Number} 1-9
 * @param {Number} 0-indexed (0-8)
 * @param {Function} callback
 */
function Moves({ historyMoves, currentHistory, selectHistory }) {
  function historyItems() {
    let listItems = [];
    for (let i = 0; i < historyMoves; i++) {
      listItems.push(
        <li key={i}>
          <button
            onClick={() => selectHistory(i)}
            disabled={currentHistory === i}
            className="text-m enabled:hover:text-lg enabled:text-black disabled:text-gray-500"
          >
            {i === 0 ? "Game Start" : `Go to move #${i}`}
          </button>
        </li>
      );
    }
    return listItems;
  }

  return <>{historyItems()}</>;
}

Moves.propTypes = {
  historyMoves: PropTypes.number.isRequired,
  currentHistory: PropTypes.number.isRequired,
  selectHistory: PropTypes.func.isRequired,
};

export default Moves;
