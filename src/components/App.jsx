import './App.css';
import React, { Component } from "react";
import PropTypes from 'prop-types';
import Statistics from "components/Statistics/Statistics";
import FeedbackOptions from "components/FeedbackOptions";
import Notification from "components/Notification";
import Section from "components/Section";

class App extends Component {
state = {
    good: 0,
    neutral: 0,
    bad: 0,
};
  
  onLeaveFeedback = stateName => {
    this.setState(prevState => {
      const value = prevState[stateName];
        return {
          [stateName]: value + 1
         }
       })
  };

  render() {
    const { good, neutral, bad } = this.state;
    const objectKey = Object.keys(this.state);
    const total = good + neutral + bad;
    

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={objectKey}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        {total === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}/>
          </Section>
        )}
        </div>
      )
  }
};

App.propTypes = {
    Good : PropTypes.number,
    Neutral :PropTypes.number,
    Bad: PropTypes.number,
    Total: PropTypes.number,
    PositiveFeedback: PropTypes.number,
}

export default App