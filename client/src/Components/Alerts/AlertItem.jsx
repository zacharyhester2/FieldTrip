import React, {useEffect} from 'react';
import styled from 'styled-components';

const Img = styled.div`
    background: rgba(25, 25, 25, 0.6) !important;
    border-radius: 10px;
    margin: 10px;
    padding: 10px 20px;
    border: 3px;
    border-color: whitesmoke;
  img{
    border-radius: 5px;
    margin: 0px;
    height: 50px;
    width: 50px;
    /* object-fit: cover; */
    filter: grayscale(100%);

  }
`

const AlertItem = ({alert}) => {
  // console.log('alerts in Alerts.jsx', alerts);

  return (
    <div>
      {/* <p key={i}>{`You ${alert.action} a ${alert.resource}!`}</p> */}
      <Img>
      <p>You earned a stamp in your passport!</p>
        <img src={alert}/>
      </Img>
    </div>
  );
};



export default AlertItem;


