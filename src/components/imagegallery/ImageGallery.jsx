import axios from 'axios';
import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/imagegalleryitem/ImageGalleryItem';
import { Button } from 'components/button/Button';
import { Loader } from 'components/loader/Loader';
import { useState, useEffect } from 'react';

export const ImageGallery = ({
  searchQuery,
  currentPage,
  showLargePicture,
  showNextPage,
}) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(false);

  const fetchGallery = async () => {
    return axios.get('https://pixabay.com/api/', {
      params: {
        key: '36366632-d7829422fb4de051ba6d1d5b4',
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12,
        page: currentPage,
        safesearch: 'true',
      },
    });
  };

  async function doGetImagesData() {
    await getImagesData();
  }

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setImages([]);
      setIsLoading(false);
      setHasNextPage(false);
    } else {
      if (currentPage === 1) {
        setImages([]);
      }
      doGetImagesData();
    }
  }, [searchQuery, currentPage]);

  const getImagesData = async () => {
    setIsLoading(true);
    const responseFromApi = await fetchGallery();
    const totalHits = responseFromApi.data.totalHits;
    const fetchedImages = images.length + responseFromApi.data.hits.length;
    const willHaveNextPage = fetchedImages < totalHits;

    const imagesToShow = responseFromApi.data.hits.map(hit => {
      return {
        id: hit.id,
        webformatURL: hit.webformatURL,
        largeImageURL: hit.largeImageURL,
        tags: hit.tags,
      };
    });

    setImages(prevImages => {
      return [...prevImages, ...imagesToShow];
    });
    setIsLoading(false);
    setHasNextPage(willHaveNextPage);
  };

  return (
    <>
      {isLoading && <Loader />}
      <ul className={css.gallery}>
        {images.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            src={webformatURL}
            alt={tags}
            largeImage={largeImageURL}
            onClick={showLargePicture}
          />
        ))}
      </ul>

      {hasNextPage && <Button showNextPage={showNextPage} />}
    </>
  );
};
