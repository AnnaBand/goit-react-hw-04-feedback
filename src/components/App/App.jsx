import React, { Component } from 'react';
import { FeedbackHeader } from '../../components/FeedbackHeader/FeedbackHeader'
import { FeedbackOptions } from '../../components/FeedbackOptions/FeedbackOptions'
import { FeedbackNotifications } from '../../components/FeedbackNotifications/FeedbackNotifications'
import { Statistics } from '../../components/Statistics/Statistics'

export class App extends Component {
  constructor() {
    super();
    this.state = {
      good:0,
      neutral: 0,
      bad: 0,
    };
  }

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  handleLeaveFeedback = event => {
   const {name} = event.target;
   this.setState(state => ({ [name]: state[name] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    return (
      <>
        <FeedbackHeader title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleLeaveFeedback} 
            />
            { total === 0 ? (
              <FeedbackNotifications message="There is no feedback"></FeedbackNotifications>) : (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positiveFeedback}
            />)}
        </FeedbackHeader>
        
      </>  
    );
  }
}