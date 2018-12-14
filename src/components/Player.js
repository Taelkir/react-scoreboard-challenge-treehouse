import React, { PureComponent } from 'react';
import PropTypes from "prop-types";
import Counter from './Counter';
import CrownIcon from "./CrownIcon";


class Player extends PureComponent {

  static propTypes = {
    changeScore: PropTypes.func,
    removePlayer: PropTypes.func,
    highestScorer: PropTypes.bool,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number,
    index: PropTypes.number
  };

  render() {

    const {
      name,
      removePlayer,
      highestScorer,
      id,
      score,
      changeScore,
      index
    } = this.props;



    return (
      <div className="player">

        <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>

        <span className="player-name">
          <CrownIcon
            yellow = { highestScorer ? true : false }
          />

          { name }

        </span>

        <Counter
          score = { score }
          changeScore ={ changeScore }
          index = { index }
        />
      </div>
    );
  }
}

export default Player;
