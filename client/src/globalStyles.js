import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
  }

  body{
    font-family: 'Spartan', sans-serif;
    background-color: rgb(9, 11, 23);
    color: whitesmoke;
    min-height: 110vh;
  }

  //test
  header{
    background-color: rgb(9, 11, 23);
    padding: 10px 10px;
    margin: 0;
    overflow: hidden;
    box-shadow: 0px 0px 7px 0px #736bfb;
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
  .news-container{
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
      color: whitesmoke;
      backdrop-filter: blur(8px);
    }
    #news-card-paper{
      background-color: rgb(9, 11, 23);
      opacity: 87%;
    }
    .MuiMobileStepper-dot{
      width: 6px;
      height: 6px;
      margin: 0 2px;
      border-radius: 50%;
      background-color: #5e5e5e;
    }
    .MuiMobileStepper-dotActive{
      background-color: #736bfb;
    }
    .MuiButton-root.Mui-disabled{
      color: #5e5e5e;
    }
    #arrows{
      font-size: 1.75rem;
    }
    .container, .container-lg, .container-md, .container-sm, .container-xl{
      max-width: 80%;
      padding-bottom: 6.5rem;
    }
`;
export default GlobalStyles;
