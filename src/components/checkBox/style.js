import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    position: relative;

    input{
        position: absolute;
        width: 3rem;
        height: 3rem;
        left: 0px;
        top: 0px;
        opacity: 0;
    }
    
    label{
        font-size: 1.8rem;
        font-family: "Monda";
        color: ${({theme}) => theme.titles};
    }

    #checkboxDisplay{
        svg{
            font-size: 3rem;
            color: ${({theme}) => theme.inputText};
        }
    }
`