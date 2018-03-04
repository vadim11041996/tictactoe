import React, { Component } from 'react';
import './App.css';

class App extends Component {
   clicked(event){
     console.log(event.target);
   }

  render() {
    return (
      <div id="game">
         <div id="head">
            Tic Tac Toe Game
         </div>
         <div id="board" onClick={(e) => this.clicked(e)}>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
         </div>

      </div>
    );
  }
}

export default App;
