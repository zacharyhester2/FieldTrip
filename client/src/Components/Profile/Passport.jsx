import React from 'react';
import Stamp from './Stamp.jsx'
import styled from 'styled-components';
const Container = styled.div`
background-color: lavender;
border-radius: 10px !important;
border: 3px !important;
border-color: whitesmoke !important;
margin: 3rem auto;
margin-bottom: 5rem;
padding: 20px;
  display: flex;
  flex-flow: row wrap;
  width: 80%;
  justify-content: center;
h3{
  color: black;
  text-align: center;
  width: 100%;
  margin-bottom: 1rem;
  margin-top: 0.25rem;
}
`
const Passport = ({stamps}) => {
  return (
      <Container className="stamp-container">
        <h3>Passport</h3>
        {stamps.reverse().map((stamp, i) => <Stamp stamp={stamp} key={i}/>)}
      </Container>
  );
};
export default Passport;