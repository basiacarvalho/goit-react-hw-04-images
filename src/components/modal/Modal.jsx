import React, { Component } from 'react';
import css from './Modal.module.css';

export class Modal extends Component {
  handleKeyDown = evt => {
    if (evt.keyCode === 27) {
      this.props.hideModal();
    }
  };

  componentDidMount() {
    this.overlay.focus();
  }

  render() {
    return (
      <div
        ref={input => {
          this.overlay = input;
        }}
        tabIndex={0}
        className={css.overlay}
        onClick={this.props.hideModal}
        onKeyDown={this.handleKeyDown}
      >
        <div className={css.modal} tabIndex={0} onKeyDown={this.handleKeyDown}>
          <img src={this.props.picture} alt="" />
        </div>
      </div>
    );
  }
}
