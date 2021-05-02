import React, {useEffect} from 'react';
import styled from 'styled-components';
import AlertItem from './AlertItem.jsx'

const Container = styled.div`
    width: fit-content;
    margin: 5px auto;
    padding: 5px 1rem;
    display: block !important;
`

const Alerts = ({alerts, getAlerts}) => {
  console.log('alerts in Alerts.jsx', alerts);

  useEffect(() => {
    getAlerts();
  }, []);

  return (
    <>
      <h1>Alerts</h1>
      <Container className="alert-container">
        {alerts.map((alert, i) =>
          <AlertItem alert={alert} key={i}/>
        )}
      </Container>
    </>
  );
};



export default Alerts;