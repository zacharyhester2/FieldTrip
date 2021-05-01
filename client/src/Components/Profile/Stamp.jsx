import React from 'react';
import styled from 'styled-components';

const Img = styled.div`
  img{
    border-radius: 10px;
    border: 3px;
    border-color: whitesmoke;
    padding: 2px;
    margin: 10px;
    height: 150px;
    width: auto;
    /* filter: grayscale(100%) */

  }
  img:hover {
  transform: scaleX(-1);
}
`

const Stamp = ({stamp}) => {

  return (
    // <div>
      <Img>
        <img src={stamp}/>
      </Img>
    // </div>
  )
}

export default Stamp;