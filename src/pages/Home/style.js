import styled from "styled-components";

export const Container = styled.div`    
    >header{
        width: fit-content;
        display: flex;
        justify-content: space-between;
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
`

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
            margin-right: 1rem;
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
`