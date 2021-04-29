import React from 'react';
import Podcast from './Podcast/Podcast.jsx';
import News from './News/News.jsx';

const Discovery = () => {


  //call the axios.all endpoint
  //set user's query, feed to back
  const query = '';

    return (
        <div>
          <News />
          <Podcast />
        </div>
      );
}

export default Discovery;