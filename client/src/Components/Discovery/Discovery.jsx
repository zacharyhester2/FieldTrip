import React from 'react';
import Podcast from './Podcast/Podcast.jsx';
import News from './News/News.jsx';
import Documentary from './Documentary/Documentary.jsx';


const Discovery = ({ addResource, discView, setDiscView }) => {
  // console.log('FROM DISCOVERY COMPONENT', discView);

  //call the axios.all endpoint
  //set user's query, feed to back
  const query = '';

    return (
        <div>
          <News addResource={addResource} discView={discView}/>
          <Documentary />
          {/* <Podcast /> */}
        </div>
      );
}

export default Discovery;