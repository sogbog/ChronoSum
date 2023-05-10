import styled from "styled-components";

export const Container = styled.div`
    background: ${({theme}) => theme.upwardsGradient};
    transition: all 0.5s;
    min-height: 100vh;
    height: 100%;

    header{
        display: flex;

        a{
            width: max-content;
        }
    }

//------------------ Media Queries ------------------

    @media(max-width: 800px){
        header{
            flex-direction: column;
            justify-content: flex-start;
        }
    }

    @media(min-width: 801px){
        #LocationsWrapper{
            display: flex;
            justify-content: space-between;
        }
    }
`

export const Location = styled.div`
    padding: 2rem 2rem;
    margin: 5rem 2.5rem 0 2rem;
    border: 1px solid ${({theme}) => theme.inputText};
    border-radius: 8px;
    position: relative;
    display: flex;
    justify-content: center;

    >label{
        position: absolute;
        color: ${({theme}) => theme.inputText};
        font-family: "Orbitron";
        font-size: 2rem;
        top: -1.5rem;
        background-color: ${({theme}) => theme.globalBackground};
        padding: 0 4px;
    }

    >div{
        width: 80%;
        height: 4rem;
    }

    input{
        width: 100%;
        text-align: center;
        height: 4rem;
        background-color: ${({theme}) => theme.bigInputBackground};
        border: none;
        border-radius: 5px;
        color: ${({theme}) => theme.inputText};
        font-family: "Orbitron";
        font-size: 2.2rem;
        padding: 0 5px;
    }

    input:focus{
        outline: 1px solid ${({theme}) => theme.inputText};
    }

//------------------ Media Queries ------------------

    @media(min-width: 801px){
        padding: 3rem 2.5rem;
        margin: 5rem 2.5rem 0 2.5rem;

        >div{
            width: 80%;
            height: 5rem;
        }

        >label{
            font-size: 2.5rem;;
            top: -1.9rem;
        }

        input{
            height: 5rem;
            font-size: 2.2rem;
            padding: 0 5px;
        }
    }

    @media(min-width: 1031px){
        margin: 7rem 4rem 0 4rem;

        >div{
            width: 80%;
            height: 6rem;
        }

        >label{
            font-size: 3rem;;
            top: -2.1rem;
        }

        input{
            height: 6rem;
            font-size: 3rem;
        }
    }

    @media(min-width: 1501px){
        margin: 10rem 5rem 0 5rem;
        padding: 3.5rem 2.5rem;

        >div{
            width: 80%;
            height: 8rem;
        }

        >label{
            font-size: 3.5rem;;
            top: -2.5rem;
        }

        input{
            height: 8rem;
            font-size: 3.5rem;
        }
    }
`

export const Result = styled.div`
    margin: 6rem 2rem 0 2rem;
    padding: 3rem 0 5rem 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    position: relative;
    border-top: 1px solid ${({theme}) => theme.inputText};

    #Label{
        position: absolute;
        color: ${({theme}) => theme.inputText};
        font-family: "Orbitron";
        font-size: 2rem;
        top: -1.5rem;
        background-color: ${({theme}) => theme.globalBackground};
        padding: 0 4px;
    }
    
    span{
        font-family: "Orbitron";
        font-size: 1.6rem;
    }
    
    div{
        display: flex;
        flex-direction: column;
        span{
            text-align: center;
        }
    }
    
    #Difference{
        span{
            color: ${({theme}) => theme.inputText};
        }
    }

//------------------ Media Queries ------------------

    @media(min-width: 801px){
        margin: 8rem 2rem 0 2rem;
        padding: 4rem 0 5rem 0;
        gap: 3rem;
        
        #Label{
            font-size: 2.5rem;
            top: -1.9rem;
        }
        
        span{
            font-size: 2rem;
        }
    }

    @media(min-width: 1031px){
        margin: 8rem 4rem 0 4rem;
        padding: 6rem 0 5rem 0;
        gap: 3rem;
        
        #Label{
            font-size: 3rem;
            top: -2.1rem;
        }
        
        span{
            font-size: 2.5rem;
        }
    }

    @media(min-width: 1501px){
        margin: 10rem 5rem 0 5rem;
        padding: 7rem 0 5rem 0;
        gap: 4rem;
        
        #Label{
            font-size: 3.5rem;
            top: -2.1rem;
        }
        
        span{
            font-size: 2.8rem;
        }
    }
`