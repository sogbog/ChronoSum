import styled from "styled-components";

export const Container = styled.div`    
    >header{
        display: flex;

        a{
            width: max-content;
        }
    }

//------------------ Media Queries ------------------
    
    @media(max-width: 800px){
        >header{
            flex-direction: column;
            justify-content: flex-start;
        }
    }
`

//-------------------------------------------------------------------------

export const Menu = styled.div`
    padding: 3rem 2.5rem;
    margin: 5rem 2.5rem 0 2rem;
    border: 1px solid ${({theme}) => theme.inputText};
    border-radius: 8px;
    position: relative;

    >h2{
        position: absolute;
        color: ${({theme}) => theme.titles};
        font-family: "Orbitron";
        font-size: 2rem;
        font-weight: 500;
        top: -1.5rem;
        background-color: ${({theme}) => theme.globalBackground};
        padding: 0 4px;
    }

    >span{
        position: absolute;
        color: ${({theme}) => theme.titles};
        font-family: "Monda";
        font-size: 8px;
        bottom: -0.6rem;
        right: 1rem;
        background-color: ${({theme}) => theme.globalBackground};
        padding: 0 2px;
    }

//------------------ Media Queries ------------------
    
    @media(min-width: 801px){
        >h2{
            font-size: 3rem;
            top: -2.3rem;
            padding: 0 5px;
        }

        >span{
            font-size: 1.2rem;
            bottom: -0.9rem;
            padding: 0 3px;
        }
    }

    @media(min-width: 1031px){
        margin: 10rem 2.5rem 0 2.5rem;
        >h2{
            font-size: 4rem;
            top: -2.8rem;
        }

        >span{
            font-size: 1.6rem;
            bottom: -1.3rem;
            right: 2rem;
            padding: 0 5px;
        }
    }

    @media(min-width: 1731px){
        padding: 4rem;
        >h2{
            font-size: 4.5rem;
            top: -3.4rem;
        }

        >span{
            font-size: 1.6rem;
            bottom: -1.3rem;
        }
    }
`

//-------------------------------------------------------------------------

export const Tools = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    li{
        display: flex;
        flex-direction: column;
        gap: 3px;
        a{
            color: ${({theme}) => theme.inputText};
            font-family: "Orbitron";
            font-size: 1.6rem;
            width: fit-content;
        }

        span{
            color: ${({theme}) => theme.titles};
            font-family: "Monda";
        }
    }

    .TitleWrapper{
        display: flex;
    }

//------------------ Media Queries ------------------
    
    @media(min-width: 801px){
        li{
            a{
                font-size: 2rem;
            }

            span{
                font-size: 1.6rem;
            }
        }
    }

    @media(min-width: 1031px){
        gap: 4rem;
        li{
            a{
                font-size: 3rem;
            }

            span{
                font-size: 1.8rem;
            }
        }
    }
`