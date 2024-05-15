import PropTypes from 'prop-types';
import css from '../FeedbackHeader/FeedbackHeader.module.css';

export const FeedbackHeader = ({ title, children }) => (
  <section className={css.feedback}>
    <h2 className={css.feedback_title}> {title}</h2>
    {children}
  </section>
);

FeedbackHeader.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};