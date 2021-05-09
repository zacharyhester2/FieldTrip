import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const ResourceTabs = ({ resourceValue, handleResourceChange }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root} id='news-card-paper'>
      <Tabs
        value={resourceValue}
        onChange={handleResourceChange}
        indicatorColor="primary"
        centered
        id='basicTabs'
      >
        <Tab id='tab' label='read' />
        <Tab id='tab' label='saved' />
        <Tab id='tab' label='watch' />
      </Tabs>
    </Paper>
  );
}

export default ResourceTabs;