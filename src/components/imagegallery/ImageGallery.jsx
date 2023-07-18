import React, { Component } from 'react';
import axios from 'axios';
import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/imagegalleryitem/ImageGalleryItem';
import { Button } from 'components/button/Button';
import { Loader } from 'components/loader/Loader';

export class ImageGallery extends Component {
  state = {
    images: [],
    isLoading: false,
    hasNextPage: false,
  };

  fetchGallery = async () => {
    return axios.get('https://pixabay.com/api/', {
      params: {
        key: '36366632-d7829422fb4de051ba6d1d5b4',
        q: this.props.searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12,
        page: this.props.currentPage,
        safesearch: 'true',
      },
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      if (this.props.searchQuery.trim() === '') {
        this.setState({ images: [], hasNextPage: false, isLoading: false });
      } else {
        await this.getImagesData(true);
      }
    } else if (prevProps.currentPage !== this.props.currentPage) {
      await this.getImagesData();
    }
  }

  getImagesData = async shouldClearImages => {
    this.setState({ isLoading: true });
    const responseFromApi = await this.fetchGallery();
    const totalHits = responseFromApi.data.totalHits;
    const fetchedImages =
      this.state.images.length + responseFromApi.data.hits.length;
    const hasNextPage = fetchedImages < totalHits;

    const imagesToShow = responseFromApi.data.hits.map(hit => {
      return {
        id: hit.id,
        webformatURL: hit.webformatURL,
        largeImageURL: hit.largeImageURL,
        tags: hit.tags,
      };
    });

    if (shouldClearImages) {
      this.setState({ images: [] });
    }

    this.setState(prevState => ({
      images: [...prevState.images, ...imagesToShow],
      hasNextPage: hasNextPage,
      isLoading: false,
    }));
  };

  render() {
    return (
      <>
        {this.state.isLoading && <Loader />}
        <ul className={css.gallery}>
          {this.state.images.map(
            ({ id, webformatURL, largeImageURL, tags }) => (
              <ImageGalleryItem
                key={id}
                src={webformatURL}
                alt={tags}
                largeImage={largeImageURL}
                onClick={this.props.showLargePicture}
              />
            )
          )}
        </ul>

        {this.state.hasNextPage && (
          <Button showNextPage={this.props.showNextPage} />
        )}
      </>
    );
  }
}
