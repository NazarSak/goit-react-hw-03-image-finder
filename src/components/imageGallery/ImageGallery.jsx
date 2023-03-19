import React from 'react';
import { ImageGalleryItem } from 'components/imageGalleryItem/ImageGalleryItem';
export const ImageGallery = ({ data }) => {
  return (
    <ul>
      {data.map(({ id, webformatURL }) => (
        <ImageGalleryItem key={id} webformatURL={webformatURL} />
      ))}
    </ul>
  );
};
