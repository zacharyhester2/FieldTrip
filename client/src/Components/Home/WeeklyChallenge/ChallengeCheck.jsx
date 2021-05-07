import React, {useState, useEffect} from 'react'
import axios from 'axios';


const ChallengeCheck = ({stamps, challenge, challenges, getStamps}) => {
  const [challengeComplete, setChallengeComplete] = useState(false);
  //reset per day

  const addTrophyStamp = () => {
    console.log(challenge, 'challn from challnege check')
    //conditional about changing from complete to not complete;
    let today = new Date().toISOString().slice(0, 10)
    axios.post('/challenge', {
      title: challenge,
      category: 'daily challenge',
      date: today,
    })
      .then(() => {
        // console.log('added trophy! in Challenge Check')
        // getStamps();
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
      //'Collect a stamp from each category.'
      if(stampCount['Earth'] >= 1 &&
      stampCount['Outer Space'] >= 1 &&
      stampCount['Natural History'] >= 1
      ){
        setChallengeComplete(true);
      }
    }
    if(challenge === challenges[1][1]){
      //'Collect a stamp from each category.'
      if(stampCount['Earth'] >= 3){
        setChallengeComplete(true);
      }
    }
    if(challenge === challenges[2][2]){
      //'Collect a stamp from each category.'
      if(stampCount['article'] >= 5){
        setChallengeComplete(true);
      }
    }
    if(challenge === challenges[3][3]){
      debugger;
      // //'Collect a stamp from each category.'
      if(stampCount['Outer Space'] >= 3){
        setChallengeComplete(true);
      }
    }
    if(challenge === challenges[4][4]){
      //'Collect a stamp from each category.'
      if(stampCount['documentary'] >= 1){
        setChallengeComplete(true);
      }
    }
    if(challenge === challenges[5][5]){
      //'Collect a stamp from each category.'
      if(stampCount['Natural History'] >= 3){
        setChallengeComplete(true);
      }
    }
    if(challenge === challenges[6][6]){
      //'Collect a stamp from each category.'
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
          <p className='complete'>CONGRATS! You've completed the daily challenge!</p> :

          <p>Keep exploring to meet the daily challenge!</p>
      }
    </div>
  )

}

export default ChallengeCheck;