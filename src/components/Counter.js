import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ index, changeScore, score }) => {
  return (
    <div className="counter">
      <button className="counter-action decrement" onClick = { () => changeScore(index, -1) }> - </button>
      <span className="counter-score">{ score }</span>
      <button className="counter-action increment" onClick = { () => changeScore(index, 1) }> + </button>
    </div>
  );
}

// All the different proptypes available here: https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
Counter.propTypes = {
  index: PropTypes.number,
  score: PropTypes.number,
  changeScore: PropTypes.func
};

export default Counter;
