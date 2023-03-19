import React, { Component } from 'react';
import Notiflix from 'notiflix';
import { getNews } from 'services/getNews';
import { Loader } from 'components/loader/Loader';
import { ImageGallery } from 'components/imageGallery/ImageGallery';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

export class ContentInfo extends Component {
  state = {
    data: null,
    status: STATUS.IDLE,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchText !== this.props.searchText) {
      this.setState({ status: STATUS.PENDING });
      getNews(this.props.searchText)
        .then(response => response.json())
        .then(data => {
          if (data.hits.length === 0) {
            Notiflix.Notify.failure(
              'Sorry, but nothing was found for your search'
            );
          }
          this.setState({ data: data.hits, status: STATUS.RESOLVED });
        })
        .catch(error => {
          console.log(error);
          this.setState({ status: STATUS.REJECTED });
        });
    }
  }

  render() {
    const { data, status } = this.state;

    if (status === 'pending') {
      return <Loader />;
    } else if (status === 'resolved') {
      return <ImageGallery data={data} />;
    }
  }
}
