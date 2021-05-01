import React from 'react';
import Stamp from './Stamp.jsx'
import styled from 'styled-components';

const Container = styled.div`
background-color: lavender;
border-radius: 10px !important;
border: 3px !important;
border-color: whitesmoke !important;
margin: 50px;
padding: 50px;
  display: flex;
  flex-flow: row wrap;
  width: 90%;
  justify-content: center;
h3{
  color: black;
  text-align: center;
}
`

const Passport = ({stamps}) => {

  return (
    <>
      <Container className="stamp-container">
        <h3>Passport</h3>
        {stamps.map((stamp, i) => <Stamp stamp={stamp} key={i}/>)}
      </Container>
    </>
  );
};



export default Passport;