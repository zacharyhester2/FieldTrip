import React, {useState} from 'react';
import { Carousel, Container, Row, Col, Jumbotron } from 'react-bootstrap/';
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
          
          <Container fluid>
              <Row display="flex">      
                  <News addResource={addResource} discView={discView}
                  className="d-flex justify-content-center text-center"/>
              </Row>
              <Row>
                <Col>
                  <Documentary addResource={addResource} discView={discView}/>
                </Col>
                <Col>
                 
                </Col>
              </Row>
          </Container>
        </div>
      );
}

export default Discovery;