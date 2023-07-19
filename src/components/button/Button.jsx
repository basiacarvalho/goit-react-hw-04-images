import css from './Button.module.css';

export const Button = () => {
  return (
    <button type="button" className={css.button} onClick={showNextPage}>
      Load more
    </button>
  );
};
