import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  render() {
    return (
      <li className={css.galleryItem}>
        <img
          className={css.image}
          src={this.props.src}
          alt={this.props.alt}
          onClick={() => this.props.onClick(this.props.largeImage)}
        />
      </li>
    );
  }
}
