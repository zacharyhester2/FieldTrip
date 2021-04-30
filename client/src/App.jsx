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
import logo from './assets/LogoNoBack.png'


const App = () => {
    const [user, setUser] = useState();
    const [isLoggedin, setIsLoggedIn] = useState(false)
    const [stamps, setStamps] = useState([])

  const getUser = () => {
    if (!user) {
      axios
        .get('/user')
        .then(({ data }) => {
          // console.log('data from GET USER', data)
          setUser(data)
        })
        // .then(() => setIsLoggedIn(true))
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
      <header>
        <div>
          <img className="logo" src={logo} alt="" width="300px"/>
        </div>
      </header>
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
                  <Profile user={user} logout={logout} stamps={stamps}/>
              </Route>
              <Route path="/discovery">
                  <Discovery />
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