import css from './Button.module.css';

export const Button = ({ showNextPage }) => {
  return (
    <button type="button" className={css.button} onClick={showNextPage}>
      Load more
    </button>
  );
};
