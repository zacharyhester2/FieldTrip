import React, {useEffect} from 'react'
import {Image} from 'cloudinary-react';

const ImageLibrary = ({imageIds}) => {
console.log('LAST HURRAY imageIds', imageIds)

const dangArray = imageIds;
// useEffect(() => {

// }, [])
  return(
    <div>
      <h3>Images</h3>
        {dangArray ?
        dangArray.map((imageId, i) => {
          <Image
            key={i}
            cloudName="dntf1x5a6"
            publicId={imageId}
            width="300"
            crop="scale"
          />
        } )
      : <p>No Images to view</p>}
    </div>
  )
}

export default ImageLibrary;