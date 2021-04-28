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


const App = () => {
    const [user, setUser] = useState();
    const [isLoggedin, setIsLoggedIn] = useState(false)

  const getUser = () => {
    if (!user) {
      axios
        .get('/user')
        .then(({ data }) => setUser(data))
        // .then(() => setIsLoggedIn(true))
        .catch();
    // } else if (isLoggedIn) {
    //   changeView('home');
    //   setIsLoggedIn(false);
    }
  };


    return (
    <div>
   <Router>
        <div>
            <BottomNav />
            <hr />
            <Switch>
            <Route exact path="/home">
                <Home user={user}/>
            </Route>
            <Route path="/profile">
                <Profile user={user}/>
            </Route>
            <Route path="/discovery">
                <Discovery user={user}/>
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


        {user
          ?
        (<div></div>)
          : (
            <a
              className="login-button"
              href="/auth/google"

            >
            LOGIN WITH GOOGLE
            </a>
          )}
          {/* {getUser()} */}
    </div>
    )
}

export default App;