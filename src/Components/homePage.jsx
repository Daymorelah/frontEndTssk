import React, { Component } from 'react';
import GameBoard from './gameBoard';
import princess from '../../styles/princess.jpeg';
import mario from '../../styles/mario.jpeg';
import {
  moveDown, moveUp, moveLeft, moveRight
} from './gameControls';

class HomePage extends Component {
  state = {
    width: 0,
    height: 0,
    numberOfMoves: 0,
    generatedRandomNumbers: [],
  };

  componentDidMount() {
    this.shouldAskForBoardDimensions();
  }

  /* eslint-disable no-alert */
  shouldAskForBoardDimensions = () => {
    this.setState({
      width: parseInt(window.prompt('Please enter width of the board'), 10),
      height: parseInt(window.prompt('Please enter height of the board'), 10)
    }, () => {
      const position = this.startGameHere();
      this.generatePicturesOnGameBoard(position);
      document.getElementById(`boardSquare${position}`).focus();
    });
  }
  /* eslint-enable no-alert */

  /**
   * Checks to see if our player caught the horse on each move made
   */
  checkIfPlayerCaughtTheHorse = (newPosition) => {
    const { generatedRandomNumbers } = this.state;
    if (generatedRandomNumbers.indexOf(newPosition) !== -1) {
      const newNumberArray = generatedRandomNumbers
        .filter(number => number !== newPosition);
      this.setState({ generatedRandomNumbers: [...newNumberArray] });
    }
  }

  /**
   * Listens for and handles when the arrow keys are pressed
   */
  handleKeyPressEvent = (event) => {
    const {
      generatedRandomNumbers, width, numberOfMoves, height
    } = this.state;
    if (generatedRandomNumbers.length === 0) return;
    const CurrentBox = event.target;
    const currentRow = parseInt(CurrentBox.getAttribute('data-position')
      .split(',')[0], 10);
    const currentColumn = parseInt(CurrentBox.getAttribute('data-position')
      .split(',')[1], 10);
    switch (event.keyCode) {
      case 37:
        this.checkIfPlayerCaughtTheHorse(
          moveLeft(currentRow, currentColumn, width)
        );
        this.setState({ numberOfMoves: numberOfMoves + 1 });
        break;
      case 38:
        this.checkIfPlayerCaughtTheHorse(
          moveUp(currentRow, currentColumn, width, numberOfMoves)
        );
        this.setState({ numberOfMoves: numberOfMoves + 1 });
        break;
      case 39:
        this.checkIfPlayerCaughtTheHorse(
          moveRight(currentRow, currentColumn, width)
        );
        this.setState({ numberOfMoves: numberOfMoves + 1 });
        break;
      case 40:
        this.checkIfPlayerCaughtTheHorse(
          moveDown(currentRow, currentColumn, height, width)
        );
        this.setState({ numberOfMoves: numberOfMoves + 1 });
        break;
      default:
    }
  };

  /**
   * This method adds the horses pictures randomly on the game board
   * @param {number} position - current position where the game starts
   */
  generatePicturesOnGameBoard = (position) => {
    const { height, width } = this.state;
    const range = (width * height);
    const numberOfRandomNumbersToGenerate = (width > height) ? width : height;
    const generatedRandomNumbers = [];
    for (; generatedRandomNumbers.length < numberOfRandomNumbersToGenerate;) {
      const randomNumber = Math.floor((Math.random() * (range)) + 1);
      // Check to prevent duplicated random number generated to be stored
      if (generatedRandomNumbers.indexOf(randomNumber) === -1) {
      // Check if random number does not coincide with the position
      // where our player will start our game from
        if (position !== randomNumber) {
          generatedRandomNumbers.push(randomNumber);
        }
      }
    }
    // Add the picture to the board based on the random number generated
    generatedRandomNumbers.forEach((randomNumber) => {
      document.getElementById(`boardSquare${randomNumber}`)
        .innerHTML = `<img src=${princess} id="princess" alt="princess" />`;
    });
    // Add the random number generated to the state so that we can monitor
    // which horse has been caught.
    this.setState({ generatedRandomNumbers: [...generatedRandomNumbers] });
  };

  /**
   * Calculates the position where we will start our game from.
   * The position is roughly at the center of the game board as instructed
   */
  startGameHere = () => {
    const { width, height } = this.state;
    const widthPosition = Math.round(width / 2);
    const heightPosition = Math.round(height / 2);
    const position = (heightPosition - 1) * width + widthPosition;
    document.getElementById(`boardSquare${position}`)
      .innerHTML = `<img src=${mario} id="mario" alt="mario" />`;
    return position;
  };

  render() {
    const {
      width, height, numberOfMoves, generatedRandomNumbers
    } = this.state;
    const randomNumbersLeft = generatedRandomNumbers.length;
    const numberOfHorses = randomNumbersLeft === 1 ? 'horse' : 'horses';

    return (
      <div>
        <div id="game-intro">
          <h1>Welcome to the catch-the-horse game</h1>
          <p>
            Use the arrow keys to navigate through the maze to catch a horse
          </p>
          <p>
            Click on Dazmarlah, the player, to start the game.
          </p>
        </div>
        <div>
          <GameBoard
            KeyPressEvent={this.handleKeyPressEvent}
            width={width}
            height={height}
          />
          <div id="game-details">
            <p>
              {`Number of moves is: ${numberOfMoves}`}
            </p>
            <p>
              {
            randomNumbersLeft === 0 ? 'Game Over'
              : `You have ${randomNumbersLeft} ${numberOfHorses} to catch`
          }
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
