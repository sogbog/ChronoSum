import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    transition: color 0.5s;
    transition: background-color 0.5s;
}

:root{
    font-size: 62.5%;
}

body{
    background-color: ${({theme}) => theme.globalBackground};
    color: ${({theme}) => theme.titles}
}

a{
    text-decoration: none;
}

button, a{
    cursor: pointer;
    transition: filter 0.2s;
}

button:hover, a:hover{
    filter: brightness(0.9)
}
`