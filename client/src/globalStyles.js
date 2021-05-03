import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
  *{
    /* margin: 0; */
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
`;
export default GlobalStyles;