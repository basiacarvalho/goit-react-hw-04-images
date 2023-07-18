import React, { Component } from 'react';
import { SearchBar } from './searchbar/SearchBar';
import css from './App.module.css';
import { ImageGallery } from './imagegallery/ImageGallery';
import { Modal } from 'components/modal/Modal';

export class App extends Component {
  state = {
    searchQuery: '',
    pageNumber: 1,
    largePicture: null,
  };

  updateSearchQuery = newSearchQuery => {
    if (this.state.searchQuery !== newSearchQuery) {
      this.setState({ searchQuery: newSearchQuery, pageNumber: 1 });
    }
  };

  showNextPage = () => {
    this.setState(prevState => ({ pageNumber: prevState.pageNumber + 1 }));
  };

  showLargePicture = picture => {
    this.setState({ largePicture: picture });
  };

  hideLargePicture = () => {
    this.setState({ largePicture: null });
  };

  render() {
    return (
      <div className={css.app}>
        <SearchBar handleSubmit={this.updateSearchQuery} />
        <ImageGallery
          searchQuery={this.state.searchQuery}
          currentPage={this.state.pageNumber}
          showNextPage={this.showNextPage}
          showLargePicture={this.showLargePicture}
        />
        {this.state.largePicture !== null && (
          <Modal
            picture={this.state.largePicture}
            hideModal={this.hideLargePicture}
          />
        )}
      </div>
    );
  }
}
