import React, {useState, useEffect, Fragment} from 'react';
import styled from 'styled-components';
import AlertItem from './AlertItem.jsx';
import axios from 'axios';

const Container = styled.div`
    width: fit-content;
    margin: 5px auto;
    padding: 5px 1rem;
    display: inline !important;
`

const Alerts = ({user, font}) => {
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
    getAlerts();
  }, []);

  return (
    <Fragment>
      <Container className="alert-container">
        {alerts.reverse().map((alert, i) =>
          <AlertItem alert={alert} key={i} font={font}/>
        )}
      </Container>
    </Fragment>
  );
};

export default Alerts;