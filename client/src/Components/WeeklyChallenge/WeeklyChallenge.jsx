import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import axios from 'axios';

import IconButtons from '../Navigation/IconButtons.jsx';

const Container = styled.div`
background-color: lavender;
border-radius: 10px !important;
border: 3px !important;
border-color: whitesmoke !important;
margin: 50px;
padding: 50px;
display: flex;
flex-flow: column;
width: 90%;
justify-content: center;
h2{
  color: #1d1d1d;
  text-align: center;
  text-decoration: underline;
  /* font-weight: bold; */
}
.challenge{
  color: #1d1d1d;
  text-align: center;
}
.complete{
  color: #736bfb;
  font-size: 20px;
  text-align: center;
}
`

const challenges = [
  { 0: 'zero' },
  { 1: 'Read at least 5 news articles, and view your 5 new stamps in your passport!' },
  { 2: 'two' },
  { 3: 'three' },
  { 4: 'four' },
  { 5: 'five' },
  { 6: 'six' },
];

const WeeklyChallenge = ({ getStamps, user }) => {
  const [daily, setDaily] = useState(0);
  const [challenge, setChallenge] = useState(challenges[daily][daily]);
  const [clicked, setClicked] = useState(false);
  const [completed, setCompleted] = useState([{ daily: challenge, complete: clicked }]);

    useEffect(() => {
      let date = new Date();
      const day = date.getDay();
      setDaily(day);
    }, []);

    useEffect(() => {
      setChallenge(challenges[daily][daily])
    }, [daily]);


    const handleClick = () => {
      setClicked(!clicked);
      let today = new Date().toISOString().slice(0, 10)

      axios.post('/challenge', {
        title: 'trophy',
        category: 'daily challenge',
        date: today,

      })
        .then(() => {
          console.log('trophy worked');
          getStamps()

        })
        .catch();
      console.log('CLICKED', clicked);
    };

    useEffect(() => {
       setCompleted((prev) => {
        if (prev.daily === completed.daily) {
          return [ { daily: challenge, completed: !clicked } ]
        } else {
          return [...prev, { daily: challenge, complete: !clicked }];
        }
      });
      console.log('COMPLETED', completed);
    }, [clicked]);


  return (
    <>
      <Container>
        <h2>Daily Challenge:</h2>
        <br/>
        <h3 className='challenge'>
          {challenge}
        </h3>
        <div className='complete'>
          <IconButtons clicked={clicked} handleClick={handleClick} completed={completed} setCompleted={setCompleted} challenge={challenge} />
          {
            clicked ?
            <div style={{textAlign: 'center' }}>Completed!</div> : null
          }
        </div>
      </Container>
    </>
  );
};

export default WeeklyChallenge;
