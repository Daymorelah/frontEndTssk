import React, { Component } from 'react';
import GameBoard from './gameBoard';

class HomePage extends Component {
  state = {
    width: 4,
    height: 4,
  };

  handleKeyPressEvent = (event) => {
    console.log('handling key press got hit');
  };

  render() {
    const { width, height } = this.state;
    return (
      <div>
        <h1>This is the home page for the app</h1>
        <GameBoard
          KeyPressEvent={this.handleKeyPressEvent}
          width={width}
          height={height}
        />
      </div>
    );
  }
}

export default HomePage;
