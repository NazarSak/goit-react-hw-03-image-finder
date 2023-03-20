import React from 'react';

export const ImageGalleryItem = ({ id, webformatURL,largeImageURL,openModal }) => {
  return (
    <li key={id} 
    onClick = {() => {
      openModal(largeImageURL)
    }}>
      <img src={webformatURL} alt="describe" />
    </li>
  );
};
