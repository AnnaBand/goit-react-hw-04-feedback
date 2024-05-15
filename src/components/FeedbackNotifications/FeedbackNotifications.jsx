import PropTypes from 'prop-types';
import css from '../FeedbackNotifications/FeedbackNotifications.module.css';

export const FeedbackNotifications = ({message}) => (
    <p className={css.notification_text}>
        {message}
    </p>
)

Notification.propTypes = {
    message: PropTypes.string.isRequired
}