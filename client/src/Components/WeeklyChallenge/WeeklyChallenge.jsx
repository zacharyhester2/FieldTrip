import React, { useState } from 'react';
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

const WeeklyChallenge = () => {
  return (
    <>
      <Container>
        <h3>Weekly Challenge</h3>
      </Container>
    </>
  );
};

export default WeeklyChallenge;