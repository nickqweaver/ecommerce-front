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


:root {
  --light-box-shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.08);
  --primary-brand-color: #0099ff;
  --secondary-font-color: #9e9e9e;
  --small-font-size: 0.70rem;
  --default-border-radius: 6px;
  --circle-border-radius: 1000rem;
  --space-x0: 0rem;
  --space-x_25: 0.125rem;
  --space-x_5: 0.25rem;
  --space-x1: 0.5rem;
  --space-x1_5: 0.75rem;
  --space-x2: 1rem;
  --space-x3: 1.5rem;
  --space-x4: 2.0rem;
  --space-x5: 2.5rem;
  --space-x6: 3.0rem;
  --space-x7: 3.5rem;
  --space-x8: 4.0rem;
}
`
