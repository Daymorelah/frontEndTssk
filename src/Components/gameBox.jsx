import React from 'react';
import PropTypes from 'prop-types';

const GameBox = ({ num, KeyPressEvent }) => (
  <div
    id={`boardSquare${num}`}
    className=".game-box"
    onKeyPress={event => KeyPressEvent(event, num)}
    role="button"
    tabIndex="0"
  />
);


GameBox.propTypes = {
  num: PropTypes.number.isRequired,
  KeyPressEvent: PropTypes.func.isRequired,
};

export default GameBox;
