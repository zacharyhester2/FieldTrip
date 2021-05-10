import React, {useState, useEffect} from 'react'
import axios from 'axios';


const ChallengeCheck = ({stamps, challenge, challenges, getStamps, font}) => {
  const [challengeComplete, setChallengeComplete] = useState(false);
  //reset per day

  const addTrophyStamp = () => {
    console.log(challenge, 'challenge from challenge check')
    let today = new Date().toISOString().slice(0, 10)
    axios.post('/challenge', {
      title: challenge,
      category: 'daily challenge',
      date: today,
    })
      .then(() => {
        console.log('added trophy! in Challenge Check')
      })
      .catch();
    }

    let stampCount = {};

    const sortStamps = () => {
      //if there are stamps to check
      stamps.forEach(stamp => {
        //check if date is today
        if(stampCount[stamp.category]){
          //check category
          stampCount[stamp.category]++
        }else {
          stampCount[stamp.category] = 1;
        }
        //check type
        if(stampCount[stamp.type]){
          //check type
          stampCount[stamp.type]++
        }else {
          stampCount[stamp.type] = 1;
        }
      })

    }

  const checkChallenge = (challenge) => {
    if(challenge === challenges[0][0]){
      //Collect a stamp from each category
      if(stampCount['Planet Earth'] >= 1 &&
      stampCount['Outer Space'] >= 1 &&
      stampCount['Natural History'] >= 1
      ){
        setChallengeComplete(true);
      }
    }
    if(challenge === challenges[1][1]){
      //Earn at least 3 \'Earth\' stamps
      if(stampCount['Planet Earth'] >= 3){
        setChallengeComplete(true);
      }
    }
    if(challenge === challenges[2][2]){
      //Read at least 5 news articles
      if(stampCount['article'] >= 5){
        setChallengeComplete(true);
      }
    }
    if(challenge === challenges[3][3]){
      //Earn at least 3 \'Space\' stamps
      if(stampCount['Outer Space'] >= 3){
        setChallengeComplete(true);
      }
    }
    if(challenge === challenges[4][4]){
      //Watch at least 1 documentary in the category of your choice
      if(stampCount['documentary'] >= 1){
        setChallengeComplete(true);
      }
    }
    if(challenge === challenges[5][5]){
      //Earn at least 3 \'Natural History\' stamps
      if(stampCount['Natural History'] >= 3){
        setChallengeComplete(true);
      }
    }
    if(challenge === challenges[6][6]){
      //Watch 1 documentary and read 1 article from any category
      if(stampCount['documentary'] >= 1 && stampCount['article'] >= 1){
        setChallengeComplete(true);
      }
    }

  }

    console.log('ChallengeComplete', challengeComplete)

    if(challengeComplete){
      addTrophyStamp();
    }

useEffect(() => {
  sortStamps();
  checkChallenge(challenge);
}, [])


  return(
    <div>
      {
        challengeComplete ?
          <p className='complete' style={{ fontSize: font, color: "#736bfb"}}>CONGRATS! You've completed the daily challenge!</p> :

          <p style={{color:"#1d1d1d"}}>Keep exploring to meet the daily challenge!</p>
      }
    </div>
  )

}

export default ChallengeCheck;