import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ src, alt, onClick, largeImage }) => {
  return (
    <li className={css.galleryItem}>
      <img
        className={css.image}
        src={src}
        alt={alt}
        onClick={() => onClick(largeImage)}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  onClick: PropTypes.func,
  largeImage: PropTypes.string,
};
