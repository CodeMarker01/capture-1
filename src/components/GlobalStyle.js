import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Lobster&display=swap');

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    background: #1b1b1b;
    font-family: 'Inter', sans-serif;
}

button {
    padding: 1rem 2rem;
    margin: 2rem 0;
    background: transparent;
    border: 3px solid #23D997;
    color: white;
    transition: all 0.5s ease;

    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;

    font-family: 'Inter', sans-serif;

    &:hover {
        background:#23D997;
        color: white;
    }

}

h2 {
    font-size: 3.5rem;
    font-weight:lighter;
}
h3 {
    color: white;
}
h4 {
    font-weight: bold;
    font-size: 2rem;
}
a{
    font-size: 1.1rem;
}
span{
    font-weight: bold;
    color:#23d997;
}
p{
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
}

`;

export default GlobalStyle;
