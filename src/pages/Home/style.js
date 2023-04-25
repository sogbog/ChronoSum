import styled from "styled-components";

export const Container = styled.div`
    >header{
        display: flex;
    }
    
    #title{
        display: flex;
        align-items: end;
        margin-left: 5rem;
        margin-top: 2rem;

        h1{
            font-family: "Orbitron";
            font-size: 8rem;
        }

        span{
            font-family: "Monda";
            font-size: 3rem;
            margin-bottom: 1rem;
            margin-left: 1.8rem;
        }
    }

    #ClockBackground{
        position: absolute;
        z-index: -1;
        width: 700px;
        left: 0;
        right: 0;
        top: calc(55vh - 320px);
        bottom: 0;
        margin: 0 auto 0 auto;
        opacity: ${({theme}) => theme.clockOpacity};

        transition: opacity 0.5s;

        color: green;
    }

    #options{
        margin: 6rem 0 0 10rem;
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    #ClearAll{
        padding: 5px 8px;

        background-color: ${({theme}) => theme.buttonBackground};

        border: 1px solid ${({theme}) => theme.inputText};
        border-radius: 8px;
        
        font-family: "Monda";
        font-size: 1.8rem;
        color: ${({theme}) => theme.titles};
    }

    #App{
        display: flex;
        justify-content: space-between;

        padding: 0 10rem 0 12rem;
        position: relative;
        top: calc(55vh - 450px);
    }

    #InitialTime, #ResultingTime{
        position: relative;
        
        display: flex;
        flex-direction: column;
        gap: 4rem;

        padding: 2rem 5rem 3rem 5rem;

        border: 1px solid ${({theme}) => theme.inputText};
        border-radius: 1rem;
    }

    #InitialTimeSideLabel, #ResultingTimeSideLabel{
        color: ${({theme}) => theme.inputText};
        font-family: "Orbitron";
        font-size: 2.2rem;
        writing-mode: vertical-lr;
        text-orientation: upright;
        letter-spacing: -2px;

        background-color: ${({theme}) => theme.globalBackground};
        padding: 0 0 6px 0;
    }

    #InitialTimeSideLabel{
        position: absolute;
        right: -14px;
        top: 8.5rem;
    }

    #ResultingTimeSideLabel{
        position: absolute;
        left: -14px;
        top: 8.5rem; 
    }
`
export const MainFunctions = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8rem
`