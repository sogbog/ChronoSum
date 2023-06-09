import styled from "styled-components";

export const ThemeButton = styled.button`
    background: none;
    border: none;

    position: absolute;
    right: 3rem;
    top: 3rem;

    svg{
        font-size: 5rem;
        color: ${({theme}) => theme.titles};
    }

//------------------ Media Queries ------------------

    @media(max-width: 1500px){
        right: 2rem;
        top: 3rem;

        svg{
            font-size: 4.5rem;
        }
    }

    @media(max-width: 1250px){
        right: 2rem;
        top: 3rem;

        svg{
            font-size: 4rem;
        }
    }

    /* @media(max-width: 1000px){
        right: 2rem;
        top: 3rem;

        svg{
            font-size: 4rem;
        }
    } */

    @media(max-width: 1030px){
        right: 1rem;
        top: 1.5rem;
        
        svg{
            font-size: 3rem;
        }
    }

    @media(max-width: 800px){
        right: 2rem;
        top: 1.5rem;
        z-index: 1;
    }
`