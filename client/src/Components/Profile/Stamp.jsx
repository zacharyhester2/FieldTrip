import React from 'react';
import styled from 'styled-components';
import stampImg from '../../assets/stampo.jpg';
import trophy from '../../assets/trophy.jpg';


const Img = styled.div`
.flip-card {
  background-color: transparent;
  width: 150px;
  height: 150px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  /* box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); */
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  /* background-color: #bbb; */
  color: black;
}

.flip-card-back {
  background-color: #2980b9;
  color: white;
  border-radius: 10px;
  transform: rotateY(180deg);
  width: fit-content;
  height: auto;
  min-height: 100%;
  text-align: center;
  padding: 10px 0;
  p{
    position: relative;
  }
}
  img{
    border-radius: 10px;
    border: 3px;
    border-color: whitesmoke;
    padding: 2px;
    margin: 10px;
    height: 150px;
    width: 150px;
    object-fit: cover;
  }
`
const Stamp = ({stamp}) => {
  return (
      <Img>
      {stamp.category !== "daily challenge" ?
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={stamp.image} alt="stamp" />
            </div>
            <div className="flip-card-back">
              {
                stamp.type === 'article' ?
                <p>You read an {stamp.type}, <i>{stamp.title}</i> from the {stamp.category} category!</p> :
                stamp.type === 'documentary' ?
                <p>You watched a {stamp.type}, <i>{stamp.title}</i> from the {stamp.category} category!</p> :
                <p>You listened to a podcast!</p>
              }

            </div>
          </div>
        </div>
        :
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div>
                <img src={trophy} alt="trophy"/>

              </div>
            </div>
            <div className="flip-card-back">
              <p>You completed the Daily Challenge!</p>
              <p>{stamp.title}</p>
            </div>
          </div>
        </div>
      //   :
      //   <div className="flip-card">
      //   <div class="flip-card-inner">
      //     <div class="flip-card-front">
      //       <img src={stampImg}/>
      //     </div>
      //     <div class="flip-card-back">
      //       <p>You earned a new stamp!</p>
      //     </div>
      //   </div>
      // </div>
      }
      </Img>
  )
}
export default Stamp;