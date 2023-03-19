import React from 'react';

export const ImageGalleryItem = ({ id, webformatURL }) => {
  return (
    <li key={id}>
      <img src={webformatURL} alt="describe" />
    </li>
  );
};
