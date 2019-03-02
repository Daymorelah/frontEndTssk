import React from 'react';
import PropTypes from 'prop-types';
import GameBox from './gameBox';

const GameBoard = ({ KeyPressEvent, width, height }) => {
  let k = 0; const rows = [];
  for (let i = 0; i < height; i += 1) {
    for (let j = 0; j < width; j += 1) {
      k += 1;
      rows.push(
        <GameBox
          key={k}
          KeyPressEvent={KeyPressEvent}
          num={k}
        />
      );
    }
    k += 1;
    rows.push(<br key={k} />);
  }
  return (
    <div id="board">
      {rows}
    </div>
  );
};

GameBoard.propTypes = {
  KeyPressEvent: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default GameBoard;
