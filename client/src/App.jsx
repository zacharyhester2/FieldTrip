import React, {useState, useEffect} from 'react';
import axios from 'axios';
// import * as d3 from 'd3';
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
import AppBarHeader from './Components/Home/AppBarHeader.jsx';
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import TextSize from './Components/Accessibility/TextSize.jsx';

// ?SPACE? //
import moonGradient from './themes/space/moonGradient.jpg';
import pinkStars from './themes/space/pinkStars.jpg';
import spaceBlue from './themes/space/spaceBlue.jpg';
import rainbowStars from './themes/space/rainbowStars.jpg';
import rainbowStars2 from './themes/space/rainbowStars2.jpg';
import launch from './themes/space/launch.jpg';
import space2 from './themes/space/space2.jpg';

// *EARTH* //
import earth from './themes/earth/earth.jpg';
import forest from './themes/earth/forest.jpg';
import treetopsAboveEDIT from './themes/earth/treetopsAboveEDIT.jpg';
import treetopsAbove from './themes/earth/treetopsAbove.jpg';
import treetopsBelow from './themes/earth/treetopsBelow.jpg';
import leafBorder from './themes/earth/leafBorder.jpg';
import veryGreen from './themes/earth/veryGreen.jpg';
import contrast from './themes/earth/contrast.jpg';


// !HISTORY! //
import dinos from './themes/history/dinos.jpg';
import dinoBones from './themes/history/dinoBones.jpg';
import dinoTri from './themes/history/dinoTri.jpg';


const App = () => {
    const [user, setUser] = useState();
    const [stamps, setStamps] = useState([])
    const [discView, setDiscView] = useState('')
    const [theme, setTheme] = useState('headerDefault');
    const [search, setSearch] = useState('');
    const [alerts, setAlerts] = useState([]);
    const [font, setFont] = useState(16);
    const [resourceValue, setResourceValue] = useState(1);
    const [saved, setSaved] = useState([]);
    const [badges, setBadges] = useState([]);
    const [nasaPic, setNasaPic] = useState();


    const [stepperCount, setStepperCount] = useState(0);


    const earthThemes = [veryGreen, contrast, treetopsAbove, forest, treetopsBelow, leafBorder, earth];
    const historyThemes = [dinos, dinoBones, dinoTri];
    const spaceThemes = [rainbowStars, spaceBlue, rainbowStars2, moonGradient, pinkStars];

    const themeLength = () => {
      if (theme === 'spaceTheme') {
        return spaceThemes.length;
      } else if (theme === 'earthTheme') {
        return earthThemes.length;
      } else if (theme === 'historyTheme') {
        return historyThemes.length;
      } else {
        return 0;
      }
    }

    const useStyles = makeStyles((theme) => ({
      spaceTheme: {
        backgroundImage: `url(${spaceThemes[stepperCount]})`,
        height: '220vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        paddingBottom: '5rem',
        backgroundSize: 'cover',
      },
      earthTheme: {
        backgroundImage: `url(${earthThemes[stepperCount]})`,
        height: '220vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        paddingBottom: '5rem',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      },
      historyTheme: {
        backgroundImage: `url(${historyThemes[stepperCount]})`,
        height: '220vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        paddingBottom: '5rem',
        backgroundSize: 'cover',
      },
    }));
    const classes = useStyles();
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

  const getNasaPic = () => {
    if (discView === 'Outer Space') {
      axios.get('/nasaPic')
      .then(({ data }) => {

        const { explanation, title, url } = data;
        // console.log('NASA FOTD', explanation, title, url);
        setNasaPic(url);
      })
      .catch();
    }
  };

  useEffect(() => {
    getNasaPic();
  }, [discView]);

//cloudinary
// const loadImages = () => {
//   axios.get('/images')
//   .then(({data}) => {
//     console.log('UPLOAD IMAGE DATA', data);
//     setImageIds(data);
//   })
//     .catch (error) {
//     console.log(error)
//   }
// }


  const addResource = (resource, resType) => {
    let pars = {};
    //if resource is article:
    if(resType === 'article'){
      pars= {
        category: discView,
        date: Date.now,
        title: resource.title,
        author: resource.author,
        image: resource.urlToImage,
        url: resource.url,
        userId: user.id,
        type: resType
      }
    } else if(resType === 'documentary'){
      pars= {
        category: discView,
        date: Date.now,
        title: resource.snippet.title,
        image: resource.snippet.thumbnails.high.url,
        url: `https://www.youtube.com/embed/${resource.id.videoId}`,
        userId: user.id,
        type: resType
      }
    }
    //post request to user table
    axios.post('/resource', pars)
    .then(() => {
      getStamps()
      console.log('add resources worked!', stamps)
    })
    .catch()
  };

 //USED FOR BADGE D3 DATA AS WELL
   const getStamps = () => {
    //  debugger;
    if (user) {
      axios.get(`/user/${user.id}`)
        .then(({ data }) => {
          // console.log('FROM STAMPS', data)
          setStamps(data);
          setAlerts(data);
        })
        .catch();
    }
  };


  const getSaved = () => {
    //  debugger;
    if (user) {
      axios.get(`/saved/${user.id}`)
        .then(({ data }) => {
          // console.log('FROM SAVED', data)
          setSaved(data);
        })
      }
      };

  //DATA FOR BADGE CONSTRUCTION/ D3
  const getBadges = () => {
    if (user) {
      axios.get(`/user/${user.id}`)
        .then(({ data }) => {
          console.log('BADGES DATA', data)
          setBadges(data);
        })
        .catch();
    }
  };

  const addSaved = (resource, resType) => {
    let pars = {};
    //if resource is article:
    if(resType === 'article'){
      pars= {
        category: discView,
        date: Date.now,
        title: resource.title,
        author: resource.author,
        image: resource.urlToImage,
        url: resource.url,
        userId: user.id,
        type: resType
      }
    } else if(resType === 'documentary'){
      pars= {
        category: discView,
        date: Date.now,
        title: resource.snippet.title,
        // author: null,
        image: resource.snippet.thumbnails.high.url,
        url: `https://www.youtube.com/embed/${resource.id.videoId}`,
        userId: user.id,
        type: resType
      }
    }
    axios.post('/saved', pars)
      .then(() => {
        getSaved()
        console.log('SAVED', saved)
      })
      .catch()
  };

  //  const getAlerts = () => {
  //   //  debugger;
  //   if (user) {
  //     axios.get(`/user/${user.id}`)
  //       .then(({ data }) => {
  //         console.log('FROM Alerts', data)
  //         setAlerts(data);
  //       })
  //       .catch();
  //   }
  // };
  const logout = () => {
    axios.get('/logout').then(() => {
      setUser(null);
    });
  };

  useEffect(() => {
    getUser();
    // loadImages();
    // getAlerts();
    getStamps();
  }, [])

    const handleResourceChange = (event, newValue) => {
      setResourceValue(newValue);
    };

    return (
    <div className={currClass} style={{ fontSize: font }}>
      <AppBarHeader user={user} logout={logout} discView={discView} setDiscView={setDiscView} theme={theme} setTheme={setTheme} search={search} setSearch={setSearch} setStepperCount={setStepperCount} themeLength={themeLength} />
      {!user
      ?(
        <div >
          <Home />
          <Button variant="contained" style={{top: '0.25rem', right: '0.25rem', position: 'absolute' }}>
          <a
            className="login-button"
            href="/auth/google"
          >
          LOGIN WITH GOOGLE
          </a>
          </Button>
        </div>
      )
        : (
        <Router>

            <BottomNav />
            <Switch>
              <Route exact path="/">
                  <Home user={user} logout={logout} getStamps={getStamps} stamps={stamps} font={font} getBadges={getBadges}/>
              </Route>
              <Route path="/profile">
                  <Profile user={user} logout={logout} stamps={stamps} getStamps={getStamps} badges={badges} getBadges={getBadges}/>
              </Route>
              <Route path="/discovery">
                  <Discovery addResource={addResource} discView={discView} setDiscView={setDiscView} search={search} setSearch={setSearch} font={font} resourceValue={resourceValue} handleResourceChange={handleResourceChange} saved={saved} addSaved={addSaved} getSaved={getSaved} />
              </Route>
              <Route path="/alerts">
                  <Alerts user={user} alerts={alerts} font={font}/>
              </Route>
              <Route path="/PhotoUpload">
                  <PhotoUpload font={font}/>
              </Route>
            </Switch>

      </Router>
       )}
       <TextSize font={font} setFont={setFont}/>
    </div>
    )
}


export default App;
