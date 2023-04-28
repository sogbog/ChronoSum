import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    input{
        width: 18rem;
        height: 8rem;
        border: none;
        border-radius: 8px;

        background-color: ${({theme}) => theme.bigInputBackground};

        font-size: 6rem;
        font-family: "Orbitron";
        color: ${({theme}) => theme.inputText};
        text-align: center;

        padding: 0 12px 6px 12px;
    }

    input:focus{
        outline: 1px solid ${({theme}) => theme.inputText};
    }

    label{
        font-size: 3rem;
        font-family: "Monda";
        color: ${({theme}) => theme.titles};
    }

    .Warning{
        font-family: "Monda";
        font-size: 1.8rem;
        position: absolute;
        bottom: 3rem;
        left: 25.5rem;
        width: max-content;
        

        color: ${({theme}) => theme.inputText};
        opacity: 0;
        transition: opacity 1s;
    }

    .active{
        transition: none;
    }

//------------------ Media Queries ------------------

    @media(max-width: 1500px){
        position: unset;
        input{
            width: 16rem;
            height: 6.5rem;

            font-size: 5rem;

            padding: 0 8px 5px 8px;
        }

        label{
            font-size: 2rem;
        }

        .Warning{
            font-size: 1.8rem;
            top: -4rem;
            left: 0;
            z-index: -1;
        }
    }

    @media(max-width: 1200px){
        input{
            width: 14rem;
            height: 6rem;
        }
    }

    @media(max-width: 1000px){
        input{
            width: 12rem;
            height: 5rem;

            font-size: 4rem;

            padding: 0 8px 3px 8px;
        }

        label{
            font-size: 1.6rem;
        }

        .Warning{
            font-size: 1.6rem;
            top: -3.5rem;
        }
    }

    @media(max-width: 800px){
        .Warning{
            left: -2.5rem;
            top: -4.5rem;
        }
    }
`