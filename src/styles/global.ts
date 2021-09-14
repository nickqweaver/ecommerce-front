import { createGlobalStyle } from "styled-components"

const fontFamily =
  "https://fonts.googleapis.com/css2?family=Poppins&display=swap"

export default createGlobalStyle`
    @font-face {
        font-family: 'Poppins';
        src: url(${fontFamily});
        font-weight: 400;
        font-style: normal;
    }
`
