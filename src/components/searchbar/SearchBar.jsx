import React, { Component } from 'react';
import css from './SearchBar.module.css';

export class SearchBar extends Component {
  searchImages = evt => {
    evt.preventDefault();
    this.props.handleSubmit(evt.target.searchQuery.value);
  };

  render() {
    return (
      <header className={css.searchBar}>
        <form className={css.form} onSubmit={this.searchImages}>
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
  }
}
