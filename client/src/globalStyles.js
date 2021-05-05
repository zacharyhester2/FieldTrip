import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
  *{
    /* margin: 0; */
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
  }

  body{
    background-color: rgb(9, 11, 23);
    color: whitesmoke;
  }

  header{
    background-color: rgb(9, 11, 23);
    padding: 10px 10px;
    font-size: 60px;
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
  .news-cards{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    background-color: ghostwhite;
  }
  .add-YT-btn{
    color: #736bfb;
    /* background-color: #736bfb; */
  }

  .news-cards{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    background-color: rgb(9, 11, 23);
  }

`;
export default GlobalStyles;