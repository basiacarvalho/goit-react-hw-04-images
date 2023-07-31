import css from './SearchBar.module.css';
import PropTypes from 'prop-types';

export const SearchBar = ({ handleSubmit }) => {
  const searchImages = evt => {
    evt.preventDefault();
    handleSubmit(evt.target.searchQuery.value);
  };

  return (
    <header className={css.searchBar}>
      <form className={css.form} onSubmit={searchImages}>
        <button type="submit" className={css.button}>
          <span className={css.buttonLabel}>Search</span>
        </button>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="searchQuery"
        />
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  handleSubmit: PropTypes.func,
};
