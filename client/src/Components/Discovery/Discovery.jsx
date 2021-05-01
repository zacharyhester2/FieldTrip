import React from 'react';
import Podcast from './Podcast/Podcast.jsx';
import News from './News/News.jsx';
import Documentary from './Documentary/Documentary.jsx';


const Discovery = ({addResource}) => {


  //call the axios.all endpoint
  //set user's query, feed to back
  const query = '';

    return (
        <div>
          <News addResource={addResource}/>
          <Documentary addResource={addResource}/>
          {/* <Podcast /> */}
        </div>
      );
}

export default Discovery;