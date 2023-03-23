import React, { Component } from 'react';
import { InputValue, FormValue, ButtonValue } from './searchbar.styled';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({ value: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSearch(this.state.value);
    this.reset();
  };

  reset = () => {
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    return (
      <header>
        <FormValue onSubmit={this.handleSubmit}>
          <ButtonValue type="submit">
            <span>Search</span>
          </ButtonValue>

          <InputValue
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={value}
            onChange={this.handleChange}
          />
        </FormValue>
      </header>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  handleSearch:PropTypes.func.isRequired,
}