import React from 'react';
import { ImageGalleryItem } from 'components/imageGalleryItem/ImageGalleryItem';
// import { Button } from 'components/button/Button';

export const ImageGallery = ({ data, }) => {
  return (
    <ul>
      {data.map(({ id, webformatURL}) => (
        <ImageGalleryItem key={id} webformatURL={webformatURL}  />
      ))}
      {/* <Button/> */}
    </ul>
  );
};
