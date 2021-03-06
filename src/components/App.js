import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from "./AddPlayerForm";

class App extends Component {
  state = {
    players: [
      {
        name: "Tom",
        score: 0,
        id: 1
      },
      {
        name: "James",
        score: 0,
        id: 2
      },
      {
        name: "Jacob",
        score: 0,
        id: 3
      },
      {
        name: "Garrie",
        score: 0,
        id: 4
      },
      {
        name: "Adam",
        score: 0,
        id: 5
      }
    ]
  };

  // player id counter
  prevPlayerid = 4;

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  handleScoreChange = (index, delta) => {
    this.setState( prevState => ({
      score: prevState.players[index].score += delta
    }));
  }

  handleAddPlayer = (name) => {
    this.setState( prevState => (
      {
        players: [
          ...prevState.players,
          {
            name,
            score: 0,
            id: this.prevPlayerid += 1
          }
        ]
      }
    ));
  }

  // Returns the highest score on the board
  highestScore = () => {
    const scores = this.state.players.map(p => p.score);
    const highestScore = Math.max(...scores);
    if (highestScore > 0) {
      return highestScore;
    } else {
      return null;
    }
  }

  render() {

    return (
      <div className="scoreboard">
        <Header
          players={this.state.players}
        />

        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player
            name = { player.name }
            score = { player.score }
            id = { player.id }
            key = { player.id.toString() }
            highestScorer = { this.highestScore() === player.score ? true : false }
            index = { index }
            removePlayer = { this.handleRemovePlayer }
            changeScore = { this.handleScoreChange }
          />
        )}
        <AddPlayerForm
          addPlayer = { this.handleAddPlayer }
        />
      </div>
    );
  }
}

export default App;
