import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as d3 from 'd3';
import BottomNav from './Components/Navigation/BottomNav.jsx';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Profile from './Components/Profile/Profile.jsx'
import Discovery from './Components/Discovery/Discovery.jsx'
import Alerts from './Components/Alerts/Alerts.jsx'
import PhotoUpload from './Components/PhotoUpload/PhotoUpload.jsx'
// import logo from './assets/LogoNoBack.png'
import AppBarHeader from './Components/Home/AppBarHeader.jsx';
import { Button } from '@material-ui/core'

import galaxy from './themes/space2.jpg';
import earth from './themes/earth.jpg';
import dinos from './themes/dinos.jpg';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  spaceTheme: {
    backgroundImage: `url(${galaxy})`,
    backgroundPosition: 'center',
    backGroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  earthTheme: {
    backgroundImage: `url(${earth})`,
    backgroundPosition: 'center',
    backGroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  historyTheme: {
    backgroundImage: `url(${dinos})`,
    backgroundPosition: 'center',
    backGroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
}))



const App = () => {
  const classes = useStyles();
    const [user, setUser] = useState();
    const [isLoggedin, setIsLoggedIn] = useState(false)
    const [stamps, setStamps] = useState([])
    const [discView, setDiscView] = useState('')
    const [theme, setTheme] = useState('headerDefault');

    const currClass = classes[`${theme}`];

    
  const getUser = () => {
    if (!user) {
      axios
        .get('/user')
        .then(({ data }) => {
          setUser(data)
        })
        .catch();
    }
  };

  const addResource = (resource, resType) => {
    let params= {}
    //if resource is artiles:
    if(resType === 'article'){
      params= {
        category: view,
        date: Date.now,
        title: resource.title,
        author: resource.author,
        image: resource.urlToImage,
        url: resource.url,
        userId: user.id
      }
    } else if(resType === 'youTube'){
      params= {
        category: view,
        date: Date.now,
        title: resource.snippet.title,
        author: null,
        image: resource.snippet.thumbnails.high.url,
        url: `https://www.youtube.com/embed/${resource.id.videoId}`,
        userId: user.id
      }
    }
    //post request to user table
    axios.post('/resource', params)
    .then(() => {
      getStamps()
    })
    .catch()
  };


   const getStamps = () => {
    if (user) {
      axios.get(`/user/${user.id}`)
        .then(({ data }) => {
          // console.log('FROM STAMPS', data)
          setStamps(data)
        })
        .catch();
    }
  };

  const logout = () => {
    axios.get('/logout').then(() => {
      setUser(null);
    });
  };

  useEffect(() => {
    getUser()
  }, [])

    return (
    <div className={currClass}>
      {/* <header>
        <div>
          <a href="/" >
            <img className="logo" src={logo} alt="" width="300px"/>
          </a>
        </div>
      </header> */}
      <AppBarHeader user={user} logout={logout} discView={discView} setDiscView={setDiscView} theme={theme} setTheme={setTheme}/>
      {!user
      ?(
        <div >
          <Home />
          <Button variant="contained">
          <a
            className="login-button"
            href="/auth/google"
          >
          LOGIN WITH GOOGLE
          </a>
          </Button>
        </div>
      )
      :(

        <Router>
        <div>
            <BottomNav />
            <Switch>
              <Route exact path="/">
                  <Home user={user} logout={logout}/>
              </Route>
              <Route path="/profile">
                  <Profile user={user} logout={logout} stamps={stamps} getStamps={getStamps}/>
              </Route>
              <Route path="/discovery">
                  <Discovery addResource={addResource} discView={discView} setDiscView={setDiscView}/>
              </Route>
              <Route path="/alerts">
                  <Alerts />
              </Route>
              <Route path="/PhotoUpload">
                  <PhotoUpload />
              </Route>
            </Switch>
        </div>
      </Router>
       )}
    </div>
    )
}

export default App;