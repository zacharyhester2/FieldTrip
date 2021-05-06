import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import IconButtons from '../../Navigation/IconButtons.jsx';
import ChallengeCheck from './ChallengeCheck.jsx'

const Container = styled.div`
  background-color: lavender;
  border-radius: 10px !important;
  border: 3px !important;
  border-color: whitesmoke !important;
  margin: 50px;
  padding: 50px;
  display: flex;
  /* flex-flow: column; */
  width: 50%;
  justify-content: center;
  position: absolute;
  top: 130%;
  left: 47%;
  transform: translate(-50%, -50%);
  opacity: 85%;
.challenge-header{
  color: #1d1d1d;
  text-align: start;
  /* text-decoration: underline; */
  /* font-weight: bold; */
  font-size: 44px;
}
.challenge{
  color: #1d1d1d;
  text-align: center;
  font-size: 38px;
}
.complete{
  color: #736bfb;
  font-size: 20px;
  text-align: center;

}
`

const ParDiv = styled.div`
  top: 150%;
  margin: 40px;
  display: flex;
  text-align: left!important;
  justify-content: left;
  position: absolute;
`

const challenges = [
  { 0: 'Collect a stamp from each category.' },
  { 1: 'Earn at least 3 \'Earth\' stamps.' },
  { 2: 'Read at least 5 news articles, and view your 5 new stamps in your passport.' },
  { 3: 'Earn at least 3 \'Space\' stamps.' },
  { 4: 'Watch at least 1 documentary in the category of your choice.' },
  { 5: 'Earn at least 3 \'Natural History\' stamps.' },
  { 6: 'Watch 1 documentary and read 1 article from any category' },
];

const WeeklyChallenge = ({ getStamps, user, stamps }) => {
  const [daily, setDaily] = useState(() => {
    let date = new Date();
    const day = date.getDay();
    return day;
  });
  const [challenge, setChallenge] = useState(challenges[daily][daily]);

    useEffect(() => {
      let date = new Date();
      const day = date.getDay();
      console.log('DAY from wekkChal useEffect', day);
      setChallenge(challenges[day][day])
    }, []);


    useEffect(() => {
      getStamps();
    }, []);

    console.log('CHALLENGE', challenge);

  return (
    <>
      <Container>
        <p className='challenge-header'>Daily Challenge:</p>
        <br/>
        <p className='challenge'>
          {challenge}
        </p>
        { !stamps.length ?
          <p>Explore on the Discovery Tab to earn stamps!</p> :
          // <p>SHOULD BE CHALLENGE CHECK</p>
        <ChallengeCheck stamps={stamps} challenge={challenge} challenges={challenges} getStamps={getStamps}/>
        }
      </Container>
      <ParDiv>
        <h3>Where can I get some?
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
        </h3>

      </ParDiv>
    </>
  );
};

export default WeeklyChallenge;
