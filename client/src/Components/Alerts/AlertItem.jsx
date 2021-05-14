import React, {useEffect} from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap/';
import Trophy from '../../assets/trophy.jpg';

const AlertContainer = styled(Container)`
    background: rgba(25, 25, 25, 0.6) !important;
    border-radius: 10px;
    margin: 1rem;
    padding: 1rem 2rem;
    width: 100%;
    height: auto;
  img{
    height: 50px;
    width: 50px;
    object-fit: cover;
    border-radius: 5px;
    margin: 0px;
    filter: grayscale(100%);
  }
`

const AlertItem = ({alert, font}) => {
  // console.log('alerts in Alerts.jsx', alerts);

  return (
    <div>
      <AlertContainer>
        <div className="img-container">
          <img src={!alert.image ? Trophy : alert.image}/>
        </div>
        <p style={{ fontSize: font }}>You earned a stamp in your passport!</p>
      {/* <p>{`You ${alert.action} a ${alert.resource}!`}</p> */}
        <p>{alert.date.slice(0, 10)}</p>
      </AlertContainer>
    </div>
  );
};



export default AlertItem;


