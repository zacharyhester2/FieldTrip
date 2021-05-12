import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
  *{
    /* margin: 0; */
    box-sizing: border-box;
  }

  body{
    font-family: 'Spartan', sans-serif;
    /* font-family: 'Comfortaa', cursive; */
    background-color: rgb(9, 11, 23);
    color: whitesmoke;
    min-height: 110vh;
  }

  //test
  header{
    background-color: rgb(9, 11, 23);
    padding: 10px 10px;
    /* font-size: 60px; */
    margin: 0;
    overflow: hidden;
    /* box-shadow: 0px 0px 7px 0px rgb(255,255,255); */
    box-shadow: 0px 0px 7px 0px #736bfb;
    /* box-shadow: 0px 30px 22px -2px #736bfb; */
    /* box-shadow: 0px 30px 22px -15px rgba(148,148,148,0.42); */
    /* box-shadow: 0px 43px 11px -26px rgba(115,107,251,0.44); */
    opacity: 87%;
    backdrop-filter: blur(8px);
  }

  .logo{
    opacity: 100% !important;
  }

  .component{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .video-responsive{
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;
  }
  .video-responsive iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
  .youtube{
    padding-bottom: 250px;
  }
  /* .news-cards{
    display: flex;
    position: center;
    align-items: center;
  } */
  /* .news-cards{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: stretch;
    align-content: center;
  } */
  /* .news-container{
    display: grid;
    flex-flow: row wrap !important;
    justify-content: space-evenly;
    align-items: center;
    align-content: space-between;
  } */
  .news-container{
    /* display: flex-inline; */
    /* position: center;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    left: 52%; */
    display: flex;
    position: center;
    align-items: center;
    padding-top: 3rem;
  }
  .card-top img{
    max-width: 200px;
  }

  #basicTabs{
      background: rgb(9, 11, 23);
      color: #736bfb;

      margin-top: 0;
      opacity: 100%;
      box-shadow: 0px 0px 7px 0px #736bfb;

    }
    #tab{
      /* color: #736bfb; */
      color: whitesmoke;
      backdrop-filter: blur(8px);
    }
    /* #news-container{
      width: 100%;
      height: auto;
    } */
    #news-card-paper{
      background-color: rgb(9, 11, 23);
      opacity: 87%;
    }
    .MuiMobileStepper-dot{
      width: 8px;
      height: 8px;
      margin: 0 2px;
      border-radius: 50%;
      background-color: #bfbfbf;
    }
    .MuiMobileStepper-dotActive{
      background-color: #736bfb;
    }
    .MuiButton-root.Mui-disabled{
      color: rgb(109 109 109);
    }
    #arrows{
      font-size: 3rem;
    }
    .container, .container-lg, .container-md, .container-sm, .container-xl{
      max-width: 80%;
    }
`;
export default GlobalStyles;