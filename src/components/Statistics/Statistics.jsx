import React from 'react';
import PropTypes from 'prop-types';


  const Statistics = ({ good, neutral, bad }) => {
    const total = good + neutral + bad;
    const percentage = Math.round(good * 100 / total)
   
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>TOTAL: {total}</p>
      <p>Positive Feedback: {percentage} %</p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;