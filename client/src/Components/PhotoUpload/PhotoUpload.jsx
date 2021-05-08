import React, {useState, useEffect} from 'react'
// import {AdvancedImage} from '@cloudinary/react';
// import {Cloudinary} from "@cloudinary/base";
import ImageLibrary from './ImageLibrary.jsx';
import axios from 'axios';
import styled from'styled-components';


const StyledForm = styled.form`
  background-color: purple;
  button{
    color: whitesmoke;

  }
`

const PhotoUpload = () => {
  // console.log('imageIds', imageIds)
  const [fileInputState, setFileInputState] = useState('');
  const [selectedFile, useSelectedFile] = useState('');
  const [previewSource, setPreviewSource] = useState();
  const [imageIds, setImageIds] = useState();

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    }
  }

  const handleSubmitFile = (e) => {
    e.preventDefault();
    if(!previewSource) return;
    uploadImage(previewSource);
  }

  const uploadImage = async (base64EncodedImage) => {
    console.log(base64EncodedImage);
    try {
      await fetch('/api/upload', {
        method: 'POST',
        body: JSON.stringify({data: base64EncodedImage}),
        headers: {'Content-type': 'application/json'}
      })
      loadImages();
    } catch (error) {
      console.log(error);
    }
  }

const loadImages = () => {
  axios.get('/api/images')
  .then(({data}) => {
    console.log('UPLOAD IMAGE DATA', data);
    setImageIds(data);
  })
    .catch ((error) => {
    console.log('image upload threw an error:', error)
  })
}

    useEffect(()=> {
      loadImages();
    }, [])

  return(
    <div>
      <h1>Upload Your Discoveries</h1>
      <StyledForm onSubmit={handleSubmitFile}>
        <input
          type="file" name="image" className="form-input" onChange={handleFileInputChange} value={fileInputState}
        />
        <button className="btn" type="submit" onClick={()=> loadImages()}>Submit</button>
      </StyledForm>
      {previewSource && (
        <img src={previewSource} alt="chosen" style={{height: '300px'}}/>
      )}
      <ImageLibrary imageIds={imageIds} loadImages={loadImages}/>
    </div>
  )
}

export default PhotoUpload;