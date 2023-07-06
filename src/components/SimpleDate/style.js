import styled from "styled-components";

export const Container = styled.div`
    .FieldsWrapper{
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        margin-bottom: 1.5rem;
    }
`

export const Field = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    >label{
        font-size: 1rem;
        font-family: "Monda";
        color: ${({theme}) => theme.titles};
    }

    >input{
        text-align: center;
        width: max-content;
        max-width: 19rem;
        height: 3rem;
        background-color: ${({theme}) => theme.bigInputBackground};
        border: none;
        border-radius: 5px;
        color: ${({theme}) => theme.inputText};
        font-family: "Orbitron";
        font-size: 1.6rem;
        padding: 0 5px;
    }

    >input:focus{
        outline: 1px solid ${({theme}) => theme.inputText};
    }
    
//------------------ Media Queries ------------------

    @media(min-width: 801px){
        >label{
            font-size: 1.6rem;
        }

        >input{
            max-width: 35rem;
            width: 100%;
            height: 4rem;
            font-size: 2.8rem;
            padding: 0 8px;
        }
    }

    @media(min-width: 1031px){
        >label{
            font-size: 1.8rem;
        }
    }

    @media(min-width: 1501px){
        >label{
            font-size: 2rem;
        }
    }
`