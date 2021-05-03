import React from 'react';
import styled from 'styled-components';
import stampImg from '../../assets/stampo.jpg'
import trophy from '../../assets/trophy.jpg'
const Img = styled.div`
  img{
    border-radius: 10px;
    border: 3px;
    border-color: whitesmoke;
    padding: 2px;
    margin: 10px;
    height: 150px;
    width: 150px;
    object-fit: cover;
    /* filter: grayscale(100%) */
  }
  img:hover {
  transform: scaleX(-1);
}
`
const Stamp = ({stamp}) => {
  console.log(stamp);
  return (
      <Img>
      {stamp ?
        <img src={stamp}/>
        :
        stamp === "trophy" ?
        <img src={trophy}/>
        :
        <img src={stampImg}/>
      }
      </Img>
  )
}
export default Stamp;