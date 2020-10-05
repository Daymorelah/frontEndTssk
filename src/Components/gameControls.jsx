import mario from '../../styles/mario.jpeg';

/**
  * moves our player one box to the right
  */
export const moveUp = (currentRow, currentColumn, width) => {
  // Check if we are at the extreme top of the game box
  if (currentRow !== 1) {
    const newPosition = (((currentRow - 2) * width) + currentColumn);
    // Remove image at current position
    document.getElementById(`boardSquare${newPosition + width}`)
      .innerHTML = '';
    // Add image at new position
    document.getElementById(`boardSquare${newPosition}`)
      .innerHTML = `<img src=${mario} id="mario" alt="mario" />`;
    // Focus on the new position
    document.getElementById(`boardSquare${newPosition}`).focus();
    return newPosition;
  }
};

/**
 * moves our player one box down
 */
export const moveDown = (currentRow, currentColumn, height, width) => {
  // Check if we are at the extreme bottom of the game box
  if (currentRow !== height) {
    const newPosition = ((currentRow * width) + currentColumn);
    // Remove image at current position
    document.getElementById(`boardSquare${newPosition - width}`)
      .innerHTML = '';
    // Add image at new position
    document.getElementById(`boardSquare${newPosition}`)
      .innerHTML = `<img src=${mario} id="mario" alt="mario" />`;
    // Focus on the new position
    document.getElementById(`boardSquare${newPosition}`).focus();
    return newPosition;
  }
};

/**
 * moves our player one box to the left
 */
export const moveLeft = (currentRow, currentColumn, width) => {
  // Check if we are at the extreme left of the game box
  if (currentColumn !== 1) {
    const newPosition = (((currentRow - 1) * width) + currentColumn) - 1;
    // Remove image at current position
    document.getElementById(`boardSquare${newPosition + 1}`).innerHTML = '';
    // Add image at new position
    document.getElementById(`boardSquare${newPosition}`)
      .innerHTML = `<img src=${mario} id="mario" alt="mario" />`;
    // Focus on the new position
    document.getElementById(`boardSquare${newPosition}`).focus();
    return newPosition;
  }
};

/**
 * moves our player one box to the right
 */
export const moveRight = (currentRow, currentColumn, width) => {
  // Check if we are at the extreme right of the game box
  if (currentColumn !== width) {
    const newPosition = (((currentRow - 1) * width) + currentColumn) + 1;
    // Remove image at current position
    document.getElementById(`boardSquare${newPosition - 1}`).innerHTML = '';
    // Add image at new position
    document.getElementById(`boardSquare${newPosition}`)
      .innerHTML = `<img src=${mario} id="mario" alt="mario" />`;
    // Focus on the new position
    document.getElementById(`boardSquare${newPosition}`).focus();
    return newPosition;
  }
};
