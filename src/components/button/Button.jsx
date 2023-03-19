import React from 'react';

export const Button = ({ onLoadMore }) => {
  return (
    <div>
      <button type="button" onClick={onLoadMore}>
        Load More
      </button>
    </div>
  );
};
