import styled from "styled-components";

export const Container = styled.div`
    background: ${({theme}) => theme.upwardsGradient};
    @media(max-width: 800px){
        header{
            flex-direction: column;
            justify-content: flex-start;
        }
    }

    @media(min-width: 801px){
        .inputWrapper{
            display: flex;
            justify-content: space-between;
            /* width: 100%; */
        } 
    }
`

export const App = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
`

export const DateInput = styled.div`
    padding: 3rem 2.5rem;
    margin: 5rem 2.5rem 0 2rem;
    border: 1px solid ${({theme}) => theme.inputText};
    border-radius: 8px;
    position: relative;
    max-width: 32rem;

    >span{
        position: absolute;
        color: ${({theme}) => theme.inputText};
        font-family: "Orbitron";
        font-size: 2rem;
        font-weight: 500;
        top: -1.5rem;
        background-color: ${({theme}) => theme.globalBackground};
        padding: 0 4px;
    }

//------------------ Media Queries ------------------

    @media(min-width: 801px){
        padding: 3rem 2.5rem;
        margin: 5rem 2rem 0 2rem;
        max-width: unset;
        width: 100%;

        >span{
            font-size: 2.5rem;
            top: -1.8rem;
        }
    }

    @media(min-width: 1031px){
        padding: 3.5rem 2.8rem;
        margin: 6rem 3rem 0 3rem;

        >span{
            font-size: 2.5rem;
            top: -1.8rem;
        }
    }

    @media(min-width: 1501px){
        padding: 3.5rem 2.8rem;
        margin: 8rem 5rem 0 5rem;

        >span{
            font-size: 3.5rem;
            top: -2.5rem;
        }
    }
`

export const Result = styled.div`
    margin: 6rem 2rem 0 2rem;
    padding: 3rem 0 5rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    border-top: 1px solid ${({theme}) => theme.inputText};
    width: clamp(30rem, 80vw, 45rem);

    #Label{
        position: absolute;
        color: ${({theme}) => theme.inputText};
        font-family: "Orbitron";
        font-size: 2rem;
        top: 1rem;
    }

    .resultsWrapper{
        margin-top: 2.5rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        width: 100%;
    }

    .resultWrapper{
        display: flex;
        flex-direction: column;
        align-items: center;

        span{
            text-align: center;
            width: 100%;
            max-width: 20rem;
            height: 3rem;
            background-color: ${({theme}) => theme.bigInputBackground};
            border: none;
            border-radius: 5px;
            color: ${({theme}) => theme.inputText};
            font-family: "Orbitron";
            font-size: 2.2rem;
            padding: 0 5px;
        }

        label{
            font-size: 1rem;
            font-family: "Monda";
            color: ${({theme}) => theme.titles};
        }  
    }

//------------------ Media Queries ------------------

    @media(min-width: 801px){
        
        #Label{
            font-size: 2.5rem;
        }

        .resultWrapper{

            span{
                font-size: 2.8rem;
                height: 4rem;
            }

            label{
                font-size: 1.6rem;
            }
        }
    }

    @media(min-width: 1031px){
        #Label{
            font-size: 2.5rem;
        }
        .resultWrapper{
            label{
                font-size: 1.8rem;
            }
        }
    }

    @media(min-width: 1501px){
        #Label{
            font-size: 3.5rem;
        }

        .resultWrapper{
            span{
                font-size: 3rem;
            }

            label{
                font-size: 2rem;
            }
        }
    }
`