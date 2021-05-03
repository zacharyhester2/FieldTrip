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

import space1 from './themes/space1.jpg';
import space2 from './themes/space2.jpg';
import space3 from './themes/space3.jpg';
import space4 from './themes/space4.jpg';
import space5 from './themes/space5.jpg';
import earth from './themes/earth.jpg';
import dinos from './themes/dinos.jpg';
import { makeStyles } from '@material-ui/core/styles';


const themeShuffle = array => {
    const newThemeArray = array.slice();
    for (let i = newThemeArray.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));
        [newThemeArray[i], newThemeArray[random]] = [newThemeArray[random], newThemeArray[i]];
    }
    return newThemeArray;
};

const spaceThemes = [space1, space2, space3, space4, space5];

const randomizeTheme = (arr) => {
  const randomIndex = Math.floor((Math.random() * arr.length));
  return arr[randomIndex];
};

let randomSpaceTheme = randomizeTheme(spaceThemes);


const useStyles = makeStyles((theme) => ({
  spaceTheme: {
    backgroundImage: `url(${randomSpaceTheme})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    paddingBottom: '5rem',
  },
  earthTheme: {
    backgroundImage: `url(${earth})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    paddingBottom: '5rem',
  },
  historyTheme: {
    backgroundImage: `url(${dinos})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    paddingBottom: '5rem',
  },
}))



const App = () => {
  const classes = useStyles();
    const [user, setUser] = useState();
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

          console.log('FROM STAMPS', data)
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
          <Button variant="contained" style={{ marginLeft: "25px" }}>
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
                  <Home user={user} logout={logout} getStamps={getStamps}/>
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