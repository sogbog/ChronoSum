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
    background-repeat: no-repeat;
    color: ${({theme}) => theme.titles};

        ::-webkit-scrollbar {
            width: 8px;
        }

        ::-webkit-scrollbar-track {
            background: ${({theme}) => theme.bigInputBackground};
        }

        ::-webkit-scrollbar-thumb {
            background: ${({theme}) => theme.buttonBackground};
            border-radius: 8px;
        }
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
        background: ${({theme}) => theme.backgroundGradient1500};
        background-color: ${({theme}) => theme.globalBackground};
    }
}

@media(max-width: 1250px){
    body{
        background: ${({theme}) => theme.backgroundGradient1200};
        background-color: ${({theme}) => theme.globalBackground};
    }
}

@media(max-width: 1030px){
    body{
        background: ${({theme}) => theme.backgroundGradient1000};
        background-color: ${({theme}) => theme.globalBackground};
    }
}

@media(max-width: 800px){
    body{
        background: ${({theme}) => theme.backgroundGradient800};
        background-repeat: no-repeat;
        background-color: ${({theme}) => theme.globalBackground};
    }
}
`