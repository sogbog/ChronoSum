import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;

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

    .Warning{
        font-family: "Monda";
        font-size: 1.8rem;
        position: absolute;
        top: -3rem;
        right: -5rem;
        width: max-content;
        

        color: ${({theme}) => theme.inputText};
        opacity: 0;
        transition: opacity 1s;
    }

    .active{
        transition: none;
    }

//------------------ Media Queries ------------------

    @media(max-width: 1250px){
        input{
            width: 7rem;
            height: 3.4rem;

            font-size: 2.3rem;

            padding: 0 3px 1.5px 3px;
        }
        
        label{
            font-size: 1.6rem;
        }

        .Warning{
            font-size: 1.6rem;
            top: -2.6rem;
            left: -4rem;
        }
    }

    @media(max-width: 800px){
        position: unset;
        .Warning{
            top: -3.5rem;
            left: 2rem;
        }

        input{
            background-color: ${({theme}) => theme.bigInputBackground};
        }
    } 
`