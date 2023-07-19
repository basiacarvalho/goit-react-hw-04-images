import css from './ImageGalleryItem.module.css';

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
