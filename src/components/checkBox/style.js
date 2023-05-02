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
        display: flex;
        justify-content: center;
        align-items: center;
        svg{
            font-size: 3rem;
            color: ${({theme}) => theme.inputText};
        }
    }

//------------------ Media Queries ------------------

    @media(max-width: 1250px){
        input{
            width: 1.5rem;
            height: 1.5rem;
            left: 3px;
            top: 5px;
            opacity: 0;
        }
    
        label{
            font-size: 1.6rem;
        }

        #checkboxDisplay{
            svg{
                font-size: 2.2rem;
            }
        }
    }
`