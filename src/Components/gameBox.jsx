import React from 'react';
import PropTypes from 'prop-types';

const GameBox = ({ num, KeyPressEvent, position }) => (
  <div
    id={`boardSquare${num}`}
    className="game-box"
    onKeyDown={event => KeyPressEvent(event, num)}
    role="button"
    tabIndex="0"
    data-position={position}
  />
);


GameBox.propTypes = {
  num: PropTypes.number.isRequired,
  KeyPressEvent: PropTypes.func.isRequired,
  position: PropTypes.string.isRequired,
};

export default GameBox;
