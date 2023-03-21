import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ onLoadMore }) => {
  return (
    <div>
      <button type="button" onClick={onLoadMore}>
        Load More
      </button>
    </div>
  );
};

Button.propTypes = {
  onLoadMore:PropTypes.func.isRequired,
}