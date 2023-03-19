import React, { Component } from 'react';
import Searchbar from './searchbar/Searchbar';
import { ContentInfo } from './contentInfo/ContentInfo';
import { getNews } from 'services/getNews';
import { Button } from './button/Button';
import { isVisible } from '@testing-library/user-event/dist/utils';

export class App extends Component {
  state = {
    searchText: '',
    page: 1,
    arrayImg: [],
    isLoading: false,
    isVisible: false,
  };

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
    this.setState({
      isLoading: true,
    });
  };

  async componentDidUpdate(_, prevState) {
    const prevQuery = prevState.searchText;
    const currentQuery = this.state.searchText;

    if (currentQuery !== prevQuery || this.state.page !== prevState.page) {
      try {
        this.setState({ isLoading: true });
        const response = await getNews.fetchImages(
          currentQuery,
          this.setState.page
        );
        console.log(response);

        if (response.totalHits < 12) {
          this.setState({ isVisible: false });
        } else {
          this.setState({ isVisible: true });
        }

        this.setState({ isVisible: false });
        this.setState(prev => ({
          arrayImg: [...prev.arrayImg, ...response.hits],
        }));
      } catch (error) {
        console.log(error);
      }
    }

    // if (prevState.page < this.state.page) {
    //   getNews(this.props.searchText,this.state.page)
    //   .then((response) => {response.json()})
    //   .then((data) => {
    //     this.setState({
    //       arrayImg: [data.hits],
    //     }));
    //   });
    // }
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.searchText !== this.props.searchText) {
  //     getNews(this.props.searchText)
  //       .then(response => response.json())
  //       .then(data => {

  //         this.setState({ arrayImg: data.hits, });
  //       })
  //       .catch(error => {
  //         console.log(error);

  //       });
  //   }
  // }

  handleSearch = searchText => {
    this.setState({ searchText });
  };

  render() {
    const { handleSearch } = this;
    const { searchText } = this.state;
    return (
      <>
        <Searchbar handleSearch={handleSearch} />
        <ContentInfo searchText={searchText} />
        {isVisible && <Button onClick={this.onLoadMore} />}
      </>
    );
  }
}
