import styled from "styled-components";


export const Container = styled.div`
    width: fit-content;
    padding: 1rem;
    border-radius: 8px;
    background-color: ${({theme}) => theme.bigInputBackground};

//------------------ Media Queries ------------------

    @media(min-width: 501px){
        padding: 1.5rem;
    }

    @media(min-width: 801px){
        border-radius: 1rem;
        padding: 2rem;
    }

    @media(min-width: 1801px){
        border-radius: 1rem;
        padding: 2.2rem;
    }
`

export const Year = styled.div`
    
    display: flex;
    justify-content: center;
    gap: 1rem;

    padding-bottom: 4px;
    margin-bottom: 4px;

    border-bottom: 1px solid ${({theme}) => theme.inputText};

    button{
        background:none;
        border: none;

        svg{
            margin-top: 1.5px;
            color: ${({theme}) => theme.inputText};
            font-size: 2rem;
        }
    }

    span{
        font-family: "Orbitron";
        font-size: 1.8rem;
    }
    
//------------------ Media Queries ------------------

    @media(min-width: 501px){
        gap: 2rem;

        padding-bottom: 8px;
        margin-bottom: 8px;

        button{
            svg{
                font-size: 2.8rem;
            }
        }

        span{
            font-size: 2.5rem;
        }
    }

    @media(min-width: 801px){

        padding-bottom: 12px;
        margin-bottom: 12px;

        button{
            svg{
                font-size: 3.5rem;
            }
        }

        span{
            font-size: 3.2rem;
        }
    }

    @media(min-width: 1801px){
        gap: 2.4rem;

        padding-bottom: 14px;
        margin-bottom: 14px;

        button{
            svg{
                font-size: 4rem;
            }
        }

        span{
            font-size: 3.8rem;
        }
    }
`

export const Month = styled.div`

    display: flex;
    justify-content: center;
    gap: 1rem;

    text-align: center;
    padding-bottom: 4px;
    margin-bottom: 4px;
    border-bottom: 1px solid ${({theme}) => theme.inputText};
    
    button{
        background:none;
        border: none;

        svg{
            margin-top: 3.125px;
            color: ${({theme}) => theme.inputText};
            font-size: 1.8rem;
        }
    }

    span{
        font-family: "Orbitron";
        font-size: 1.6rem;
        width: 9.8rem;
    }

//------------------ Media Queries ------------------

    @media(min-width: 501px){
        gap: 1rem;

        padding-bottom: 6px;
        margin-bottom: 6px;
        
        button{
            svg{
                font-size: 2.8rem;
            }
        }

        span{
            font-size: 2.2rem;
            width: 13.5rem
        }
    }

    @media(min-width: 801px){
        gap: 1rem;

        padding-bottom: 10px;
        margin-bottom: 10px;
        
        button{
            svg{
                font-size: 3.5rem;
            }
        }

        span{
            font-size: 2.8rem;
            width: 17.2rem;
        }
    }

    @media(min-width: 1801px){
        gap: 1.6rem;

        padding-bottom: 12px;
        margin-bottom: 12px;
        
        button{
            svg{
                font-size: 4rem;
            }
        }

        span{
            font-size: 3.4rem;
            width: 20.9rem;
        }
    }
`

export const Week = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 3.2rem);
    gap: 7px;
    padding-bottom: 5px;
    margin-bottom: 1rem;
    border-bottom: 1px dashed ${({theme}) => theme.inputText};

    span{
        text-align: center;
        font-family: "Monda";
        font-size: 1.4rem;
    }

//------------------ Media Queries ------------------

    @media(min-width: 501px){
        gap: 1.2rem;
        grid-template-columns: repeat(7, 4.3rem);
        padding-bottom: 9px;
        margin-bottom: 1.2rem;

        span{
            font-size: 2rem;
        }
    }

    @media(min-width: 801px){
        gap: 1.6rem;
        grid-template-columns: repeat(7, 5.4rem);
        padding-bottom: 1rem;
        margin-bottom: 2.4rem;

        span{
            font-size: 2.5rem;
        }
    }

    @media(min-width: 1801px){
        gap: 1.8rem;
        grid-template-columns: repeat(7, 6rem);
        padding-bottom: 1rem;
        margin-bottom: 2.4rem;

        span{
            font-size: 2.8rem;
        }
    }
`

export const Days = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 3.2rem);
    gap: 7px;

    button{
        text-align: center;
        font-family: "Orbitron";
        color: ${({theme}) => theme.titles};
        background: none;
        border: none;
        padding: 3px;
        font-size: 1.4rem;

        outline: ${({theme, selected}) => selected ?  `1px solid ${theme.inputText}` : ""};
    }

    .hasEvents{
        color: ${({theme}) => theme.inputText};
    }
    
    .selected{
        outline: 1px solid ${({theme}) => theme.inputText};
    }

    button:disabled{
        cursor: default;
    }


//------------------ Media Queries ------------------

    @media(min-width: 501px){
        gap: 1.2rem;
        grid-template-columns: repeat(7, 4.3rem);

        button{
            padding: 3px;
            font-size: 2rem;
        }
    }

    @media(min-width: 801px){
        gap: 1.6rem;
        grid-template-columns: repeat(7, 5.4rem);

        button{
            padding: 3px;
            font-size: 2.5rem;
        }
    }

    @media(min-width: 1801px){
        gap: 1.8rem;
        grid-template-columns: repeat(7, 6rem);

        button{
            font-size: 2.8rem;
        }
    }
`