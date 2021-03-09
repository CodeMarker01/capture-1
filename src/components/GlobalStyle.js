import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    background: #1b1b1b
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

    &:hover {
        background:#23D997;
        color: white;
    }

}

h2 {
    font-size: 4rem;
    font-weight:lighter;
}
h3 {
    color: white;
}
h4 {
    font-weight: bold;
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
