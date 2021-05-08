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
  }

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
  .top-container{

  }
  .mid-container{

  }
  .bottom-container{

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
    display: flex-inline;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    align-content: space-between;
  }
  .card-top img{
    max-width: 200px;
  }
`;
export default GlobalStyles;