import React, { Component } from 'react';
import css from './Button.module.css';

export class Button extends Component {
  render() {
    return (
      <button
        type="button"
        className={css.button}
        onClick={this.props.showNextPage}
      >
        Load more
      </button>
    );
  }
}
