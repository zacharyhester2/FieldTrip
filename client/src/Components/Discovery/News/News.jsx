import React from 'react';

const News = () => {
    const [getNasaPotD, setNasaPotD] = useState('');
    

    const getNasaPotD = () => {
        console.log('serching Nasa');
        axios.get(`/nasaPic`).then(({data}) => {
          console.log('data-------', data);
          setNasaPotD(url);
          setView('search');
        }).catch();
      };



    return (
        <div>
        </div>
      );
}

export default News;