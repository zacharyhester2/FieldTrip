import React, {useEffect} from 'react'
import styled from 'styled-components';
import {Cloudinary} from 'cloudinary-core';
const cloudinaryCore = new Cloudinary({cloud_name: 'dntf1x5a6'});

const ImageContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  /* padding: 1rem; */
  margin: 1rem;
  img{
    border-radius: 10px;
    width: 300px;
    height: grid-auto-flow;
  }
`

const ImageLibrary = ({imageIds}) => {
// console.log('LAST HURRAY imageIds', imageIds)

// useEffect(() => {
//   loadImages()
// }, []);

  return(
    <div>
      <h3>Images Library</h3>
        {imageIds ?
        imageIds.map((imageId, i) => (
          <ImageContainer  key={i}>
            <img src={cloudinaryCore.url(`http://res.cloudinary.com/dntf1x5a6/image/upload/${imageId}.jpg`)}/>
          </ImageContainer >)
         )
      : <p>No images to view</p>}
    </div>
  )
}

export default ImageLibrary;