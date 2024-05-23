import React, { useState } from 'react';
import { FeedbackHeader } from '../../components/FeedbackHeader/FeedbackHeader';
import { FeedbackOptions } from '../../components/FeedbackOptions/FeedbackOptions';
import { FeedbackNotifications } from '../../components/FeedbackNotifications/FeedbackNotifications';
import { Statistics } from '../../components/Statistics/Statistics';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const countTotalFeedback = () => {
    return feedback.good + feedback.neutral + feedback.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((feedback.good / countTotalFeedback()) * 100) || 0;
  };

  const handleLeaveFeedback = event => {
    const { name } = event.target;
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [name]: prevFeedback[name] + 1,
    }));
  };

  const { good, neutral, bad } = feedback;
  const total = countTotalFeedback();
  const positiveFeedback = countPositiveFeedbackPercentage();

  return (
    <>
      <FeedbackHeader title="Please leave feedback">
        <FeedbackOptions
          options={feedback}
          onLeaveFeedback={handleLeaveFeedback}
        />
        {total === 0 ? (
          <FeedbackNotifications message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positiveFeedback}
          />
        )}
      </FeedbackHeader>
    </>
  );
};

export default App;