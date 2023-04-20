import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    input{
        width: 16rem;
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
`