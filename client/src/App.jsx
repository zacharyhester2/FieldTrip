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


const App = () => {
    const [user, setUser] = useState();
    const [isLoggedin, setIsLoggedIn] = useState(false)
    const [stamps, setStamps] = useState([])
    const [view, setView] = useState('plants')

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

  const addResource = (resource) => {
    //post request to user table
    axios.post('/resource', {
      category: view,
      date: Date.now,
      title: resource.title,
      author: resource.author,
      image: resource.urlToImage,
      url: resource.url,
      userId: user.id
    })
    .then(() => {
      getStamps()
    })
    .catch()
  };

   //in progress
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
    <div>
      {/* <header>
        <div>
          <a href="/" >
            <img className="logo" src={logo} alt="" width="300px"/>
          </a>
        </div>
      </header> */}
      <AppBarHeader user={user} />
      {!user
      ?(
        <div>
          <Home />
          <a
            className="login-button"
            href="/auth/google"

          >
          LOGIN WITH GOOGLE
          </a>
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
                  <Discovery addResource={addResource}/>
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