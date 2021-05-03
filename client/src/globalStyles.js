import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
  *{
    /* margin: 0; */
    box-sizing: border-box;
  }

  body{
    background-color: #4d194d;
    color: whitesmoke;
  }

  header{
    background-color: rgb(9, 11, 23);
    padding: 10px 10px;
    font-size: 60px;
    margin: 0;
    overflow: hidden;

  }

  .component{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
export default GlobalStyles;