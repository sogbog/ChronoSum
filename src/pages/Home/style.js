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

    #menuTitle{
        position: relative;

        >h2{
            position: absolute;
            color: ${({theme}) => theme.titles};
            font-family: "Orbitron";
            font-size: 2rem;
            font-weight: 500;
            top: -4.5rem;
            background-color: ${({theme}) => theme.globalBackground};
            padding: 0 4px;
        }

        >span{
            position: absolute;
            color: ${({theme}) => theme.titles};
            font-family: "Monda";
            font-size: 8px;
            bottom: -7.5rem;
            right: 0;
            background-color: ${({theme}) => theme.globalBackground};
            padding: 0 2px;
        }
    }

//------------------ Media Queries ------------------
    
    @media(min-width: 801px){
        #menuTitle{
            >h2{
                font-size: 3rem;
                top: -5rem;
                padding: 0 5px;
            }

            >span{
                font-size: 1.2rem;
                bottom: -9.4rem;
                padding: 0 3px;
            }
        }
    }

    @media(min-width: 1031px){
        margin: 10rem 2.5rem 0 2.5rem;
        #menuTitle{
            >h2{
                font-size: 4rem;
                top: -6rem;
            }

            >span{
                font-size: 1.6rem;
                bottom: -11.2rem;
                padding: 0 5px;
            }
        }
    }

    @media(min-width: 1731px){
        padding: 4rem;
        #menuTitle{
            >h2{
                font-size: 4.5rem;
                top: -7rem;
            }

            >span{
                font-size: 1.6rem;
                bottom: -12.2rem;
            }
        }
    }
`

//-------------------------------------------------------------------------

export const Tools = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 5px;

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
        li{
            a{
                font-size: 3rem;
            }

            span{
                font-size: 1.8rem;
            }
        }
    }

    @media(min-width: 1731px){
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