import React from 'react';
import Podcast from './Podcast/Podcast.jsx';
import News from './News/News.jsx';
import Documentary from './Documentary/Documentary.jsx';
import CategorySelector from '../Navigation/CategorySelector.jsx';

const Discovery = () => {


  //call the axios.all endpoint
  //set user's query, feed to back
  const query = '';

    return (
        <div>
          <News />
          <Documentary />
          <Podcast />
          <CategorySelector />
        </div>
      );
}

export default Discovery;