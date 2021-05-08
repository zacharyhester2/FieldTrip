import React, {useEffect} from 'react'
// import {Image, CloudinaryContext, Transformation} from 'cloudinary-react';
import {Cloudinary} from 'cloudinary-core';
const cloudinaryCore = new Cloudinary({cloud_name: 'dntf1x5a6'});
// const SampleImg = () => (
//     <img src={cloudinaryCore.url('http://res.cloudinary.com/dntf1x5a6/image/upload/${imageId}.jpg')} />
// );
import styled from 'styled-components';

const ImageContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  padding: 1rem;
  margin: 1rem;
  img{
    border-radius: 10px;
    width: 300px;
    height: grid-auto-flow;

  }

`

const ImageLibrary = ({imageIds}) => {
console.log('LAST HURRAY imageIds', imageIds)

const dangArray = imageIds;
// useEffect(() => {

// }, [])
  return(
    <div>
      <h3>Images</h3>
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