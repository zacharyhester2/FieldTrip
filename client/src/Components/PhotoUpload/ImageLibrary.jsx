import React from 'react'
import {Image} from '@cloudinary/react';

const ImageLibrary = ({imageIds}) => {


  return(
    <div>
      <h3>Images</h3>
      {/* {imageIds.map((imageId, i) => {
        <Image
          key={i}
          cloudName="dntf1x5a6"
          publicId={imageId}
          width="300"
          crop="scale"
        />
      } )} */}
    </div>
  )
}

export default ImageLibrary;