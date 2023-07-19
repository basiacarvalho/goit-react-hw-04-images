import { SearchBar } from './searchbar/SearchBar';
import css from './App.module.css';
import { ImageGallery } from './imagegallery/ImageGallery';
import { Modal } from 'components/modal/Modal';
import { useState } from 'react';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [largePicture, setLargePicture] = useState(null);

  const updateSearchQuery = newSearchQuery => {
    if (searchQuery !== newSearchQuery) {
      setSearchQuery(newSearchQuery);
      setPageNumber(1);
    }
  };

  const showNextPage = () => {
    setPageNumber(prevPageNumber => prevPageNumber + 1);
  };

  const hideLargePicture = () => {
    setLargePicture(null);
  };

  return (
    <div className={css.app}>
      <SearchBar handleSubmit={updateSearchQuery} />
      <ImageGallery
        searchQuery={searchQuery}
        currentPage={pageNumber}
        showNextPage={showNextPage}
        showLargePicture={setLargePicture}
      />
      {largePicture !== null && (
        <Modal picture={largePicture} hideModal={hideLargePicture} />
      )}
    </div>
  );
};
