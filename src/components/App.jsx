import React, { Component } from 'react';
import Notiflix from 'notiflix';
import Searchbar from './searchbar/Searchbar';
import { getNews } from 'services/getNews';
import { Button } from './button/Button';
import { Loader } from 'components/loader/Loader';
import { ImageGallery } from 'components/imageGallery/ImageGallery';
import { Modal } from './modal/Modal';

export class App extends Component {
  state = {
    searchText: '',
    page: 1,
    img: [],
    isLoading: false,
    buttonTogle: false,
    data: null,
    isModal: false,
    currenPreview: '',
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.searchText !== this.state.searchText ||
      this.state.page !== prevState.page
    ) {
      this.setState({ isLoading: true });

      getNews(this.state.searchText, this.state.page)
        .then(response => response.json())
        .then(data => {
          if (data.hits.length === 0) {
            Notiflix.Notify.failure(
              'Sorry, but nothing was found for your search'
            );
          }

          const hits = data.hits;
          this.buttonTogle(hits.length);
          this.setState({ data: data.hits });
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  openModal = url => {
    this.setState({ currenPreview: url });
  };

  closeModal = () => {
    this.setState({ currenPreview: '' });
  };

  showModal = () => {
    this.setState({ isModal: true });
  };

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  buttonTogle = length => {
    if (length >= 12) {
      return this.setState({ buttonTogle: true });
    }
    return this.setState({ buttonTogle: false });
  };

  handleSearch = searchText => {
    this.setState({ searchText });
  };

  render() {
    const { handleSearch } = this;
    const { data, isLoading, buttonTogle } = this.state;
    return (
      <>
        <Searchbar handleSearch={handleSearch} />
        {isLoading && <Loader />}
        {data && <ImageGallery data={data} openModal={this.openModal}  />}
        {buttonTogle && <Button />}
        {this.state.isModal && (
          <Modal onClose={this.closeModal} showModal={this.showModal} openModal={this.openModal()} />
        )}
      </>
    );
  }
}
