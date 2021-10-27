import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
   @import url('https://fonts.googleapis.com/css?family=Poppins:300,400, 500, 600');

html, body {font-size: 100%; margin: 0; padding: 0} /*16px*/

body {
  background: white;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  line-height: 1.75;
  color: #000000;
  box-sizing: border-box;
}

p {margin-bottom: 1rem;}

h1, h2, h3, h4, h5 {
  margin: 3rem 0 1.38rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  line-height: 1.3;
}

h1 {
  margin-top: 0;
  font-size: 3.052rem;
}

h2 {font-size: 2.441rem;}

h3 {font-size: 1.953rem;}

h4 {font-size: 1.563rem;}

h5 {font-size: 1.25rem;}

small, .text_small {font-size: 0.8rem;}

.secondary-font-color {
  color: #9e9e9e;
}
`
