import styled from "styled-components";


export const Container = styled.div`
    padding-bottom: 6rem;
    background: ${({theme}) => theme.upwardsGradient};
    min-height: 100vh;

    header{
        display: flex;

        a{
            width: max-content;
        }
    }

    #CalendarWrapper{
        display: flex;
        flex-direction: column;
        align-items: center;

        margin-top: 6rem;
        padding: 0 2rem;
    }

//------------------ Media Queries ------------------

    @media(max-width: 800px){
        header{
            flex-direction: column;
            justify-content: flex-start;
        }

        
    }

    @media(min-width: 1031px){
        #CalendarWrapper{
            padding: 0 3rem;
        }
    }

    @media(min-width: 1501px){
        #CalendarWrapper{
            padding: 0 5rem;
            flex-direction: row;
            align-items: unset;

            gap: 10rem;
        }
    }
`

//----------------------------------------------------------------------------

export const Events = styled.ul`
    padding: 3rem 2.5rem;
    margin: 5rem 2.5rem 0 2rem;
    border: 1px solid ${({theme}) => theme.inputText};
    border-radius: 8px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.2rem;

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
        flex-direction: row;
        flex-wrap: wrap;
        padding: 3rem 2.5rem;
        margin: 5rem 2rem 0 2rem;

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

export const Today = styled.div`
    padding: 3rem 2.5rem;
    margin: 5rem 2.5rem 0 2rem;
    border: 1px solid ${({theme}) => theme.inputText};
    border-radius: 8px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.2rem;
    width: 100%;

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

        >span{
            font-size: 2.5rem;
            top: -1.8rem;
            left: 50%;

            transform: translateX(-50%);
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
        margin: 0;
        min-height: 100%;

        >span{
            font-size: 3.5rem;
            top: -2.5rem;
        }
    }
`

export const EventsToday = styled.div`
    min-height: 10rem;

    >span{
        position: absolute;
        font-family: "Monda";
        font-size: 2rem;
        font-weight: 500;
        top: 50%;
        right: 50%;
        transform: translateX(50%) translateY(-50%);

        width: max-content;
    }

//------------------ Media Queries ------------------

    @media(min-width: 1501px){
        >span{
            font-size: 2.5rem;
        }
    }
`