import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    input{
        width: 8rem;
        height: 4rem;
        border: none;
        border-radius: 8px;

        background-color: ${({theme}) => theme.inputBackground};

        font-size: 3rem;
        font-family: "Orbitron";
        color: ${({theme}) => theme.inputText};

        padding: 0 6px 3px 6px;
        text-align: center;
    }

    input:focus{
        outline: 1px solid ${({theme}) => theme.inputText};
    }
    
    label{
        font-size: 1.8rem;
        font-family: "Monda";
        color: ${({theme}) => theme.titles};
    }
`