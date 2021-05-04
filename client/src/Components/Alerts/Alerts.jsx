import React, {useState, useEffect, Fragment} from 'react';
import styled from 'styled-components';
import AlertItem from './AlertItem.jsx'
import axios from 'axios';

const Container = styled.div`
    width: fit-content;
    margin: 5px auto;
    padding: 5px 1rem;
    display: block !important;
`

const Alerts = ({user}) => {
  const [alerts, setAlerts] = useState([])

     const getAlerts = () => {
    if (user) {
      axios.get(`/user/${user.id}`)
        .then(({ data }) => {
          console.log('FROM Alerts', data)
          setAlerts(data);
        })
        .catch();
    }
  };

  useEffect(() => {
    // debugger;
    getAlerts();
  }, []);

  return (
    <Fragment>
      <h1>Alerts</h1>
      <Container className="alert-container">
        {alerts.reverse().map((alert, i) =>
          <AlertItem alert={alert} key={i}/>
        )}
      </Container>
    </Fragment>
  );
};

export default Alerts;