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
`