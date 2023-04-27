import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    transition: background-color 0.5s;
}

:root{
    font-size: 62.5%;
}

body{
    height: 100vh;
    background: ${({theme}) => theme.backgroundGradient};
    background-color: ${({theme}) => theme.globalBackground};
    color: ${({theme}) => theme.titles}
}

a{
    text-decoration: none;
}

svg{
    transition: none;
}

button, a{
    cursor: pointer;
    transition: filter 0.2s, color 0.5s, background-color 0.5s;
}

button:hover, a:hover{
    filter: brightness(0.9)
}

//------------------ Media Queries ------------------

@media(max-width: 1500px){
    body{
        background: radial-gradient(circle at 50% 60%, rgba(0,242,80,0.1) 0%, rgba(100,5,255,0.1) 14%, rgba(19,0,25,0) 35%);
        background-color: ${({theme}) => theme.globalBackground};
    }
}

@media(max-width: 1200px){
    body{
        background: radial-gradient(circle at 50% 60%, rgba(0,242,80,0.1) 0%, rgba(100,5,255,0.1) 14%, rgba(19,0,25,0) 35%);
        background-color: ${({theme}) => theme.globalBackground};
    }
}

@media(max-width: 1000px){
    body{
        background: radial-gradient(circle at 50% 62.5%, rgba(0,242,80,0.1) 0%, rgba(100,5,255,0.1) 12%, rgba(19,0,25,0) 30%);
        background-color: ${({theme}) => theme.globalBackground};
    }
}
`