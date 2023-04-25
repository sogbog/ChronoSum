import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    span{
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

        overflow-x: auto;
        overflow-y: hidden;

        ::-webkit-scrollbar {
            width: 0;
        }
    }

    label{
        font-size: 3rem;
        font-family: "Monda";
        color: ${({theme}) => theme.titles};
    }
`