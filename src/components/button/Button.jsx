import css from './Button.module.css';
import PropTypes from 'prop-types';

export const Button = ({ showNextPage }) => {
  return (
    <button type="button" className={css.button} onClick={showNextPage}>
      Load more
    </button>
  );
};

Button.propTypes = {
  showNextPage: PropTypes.func,
};
