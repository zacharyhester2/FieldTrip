import React, {useState} from 'react';
import Podcast from './Podcast/Podcast.jsx';
import News from './News/News.jsx';
import Documentary from './Documentary/Documentary.jsx';


const Discovery = ({addResource}) => {

  // const [nasaPotD, setNasaPotD] = useState('')

  //call the axios.all endpoint
  //set user's query, feed to back

//   const getNasaPotD = (search) => {
//     axios.get(`/nasaPic/`)
//     .then(({data: url}) => {
//         setNasaPotD(url);
//     }).catch()
// }

// useEffect(() => {
//   getNasaPotD(search);
// }, [])

  const query = '';

    return (
        <div>
          <News addResource={addResource} discView={discView}/>
          <Documentary addResource={addResource} discView={discView}/>
          {/* <Podcast /> */}
        </div>
      );
}

export default Discovery;