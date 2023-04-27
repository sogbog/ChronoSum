import styled from "styled-components";

export const Container = styled.div`
    >header{
        display: flex;
        justify-content: space-between;
    }
    
    #title{
        display: flex;
        align-items: end;
        margin: 2rem 0 0 5rem;

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
    }

    #options{
        margin: 6rem 12rem 0 10rem;
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

//------------------ Media Queries ------------------

    @media(max-width: 1700px){
        #title{
            h1{
                font-size: 7.5rem;
            }

            span{
                font-size: 2.2rem;
                margin-bottom: 10px;
                margin-left: 9px;
            }
        }

        #options{
            flex-direction: column;
            margin: 3.5rem 35rem 0 0;
            gap: 5px;
            max-height: 8rem;

            flex-wrap: wrap;
            align-items: flex-start;
        }

        #App{
            top: calc(55vh - 422px);
        }

        #InitialTime, #ResultingTime{
            gap: 3rem;

            padding: 1.5rem 3.5rem 2.3rem 3.5rem;
            width: fit-content;
        }
    }

    @media(max-width: 1500px){     
        #title{
            margin-top: 1.8rem;

            h1{
                font-size: 7.5rem;
                width: fit-content;
            }

            span{
                font-size: 2.2rem;
                margin-bottom: 10px;
                margin-left: 9px;
            }
        }

        #options{
            flex-direction: column;
            margin: 3.5rem 30rem 0 0;
            gap: 5px;
            max-height: 8rem;

            flex-wrap: wrap;
            align-items: flex-start;
        }

        #ClearAll{
            padding: 4px 6px;
            font-size: 1.6rem;
        }

        #App{
            padding: 0 6rem 10rem 7.5rem;
            top: calc(55vh - 350px);
        }

        #InitialTime, #ResultingTime{
            gap: 3rem;

            padding: 1.5rem 3.5rem 2.3rem 3.5rem;
        }

        #InitialTimeSideLabel, #ResultingTimeSideLabel{
            font-size: 1.9rem;

            padding: 0 0 6px 0;
        }

        #InitialTimeSideLabel{
            right: -12px;
            top: 5rem;
        }

        #ResultingTimeSideLabel{
            left: -12px;
            top: 5rem; 
        }
    }

    @media(max-width: 1200px){        
        #title{
            margin: 1.8rem 0 0 3rem;

            h1{
                font-size: 5.8rem;
            }

            span{
                font-size: 1.9rem;
                margin-bottom: 8px;
                margin-left: 7px;
            }
        }

        #options{
            margin: 3rem 28rem 0 0;
            gap: 5px;
            max-height: 8rem;
        }

        #App{
            padding: 0 6rem 0 7.5rem;
            top: calc(55vh - 300px);
        }

        #InitialTime, #ResultingTime{
            gap: 2rem;

            padding: 1rem 2.5rem 1.5rem 2.5rem;
        }

        #InitialTimeSideLabel, #ResultingTimeSideLabel{
            font-size: 1.6rem;
        }

        #InitialTimeSideLabel{
            right: -10px;
        }

        #ResultingTimeSideLabel{
            left: -10px;
        }
    }

    @media(max-width: 1000px){        
        #title{
            margin: 1.5rem 0 0 3rem;
            flex-direction: column;
            align-items: flex-start;

            h1{
                font-size: 5.5rem;
                width: min-content;
            }
        }

        #App{
            padding: 0 3.5rem;
            top: calc(55vh - 345px);
        }

        #InitialTimeSideLabel{
            top: 4.2rem;
        }

        #ResultingTimeSideLabel{
            top: 4.2rem; 
        }
    }

//------Clock responsiveness------

    @media(max-width: 1500px){
        #ClockBackground{
            width: 500px;
            top: calc(55vh - 220px);
        }
    }

    @media(max-width: 1200px){
        #ClockBackground{
            width: 425px;
            top: calc(55vh - 185px);
        }
    }

    @media(max-width: 1000px){
        #ClockBackground{
            width: 350px;
            top: calc(55vh - 125px);
        }
    }
`

//-------------------------------------------------------------------------

export const MainFunctions = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8rem;

//------------------ Media Queries ------------------

    @media(max-width: 1500px){
        gap: 5.5rem;
    }

    @media(max-width: 1200px){
        gap: 3rem;
    }
`

//-------------------------------------------------------------------------

export const Date = styled.div`
    position: absolute;
    right: 43rem;

    display: flex;
    flex-direction: column;
    gap: 5rem;

    width: 22rem;
    max-height: 68.8rem;

    overflow-wrap: break-word;
    overflow-y: auto;

    p, span{
        font-size: 4rem;
        font-family: "Orbitron";
        color: ${({theme}) => theme.inputText};
    }

    ::-webkit-scrollbar{
        width: 0;
    }

//------------------ Media Queries ------------------

    @media(max-width: 1700px){
        right: 37rem;
        gap: 3rem;

        p, span{
            font-size: 3.5rem;
        }
    }

    @media(max-width: 1500px){
        right: 32rem;
        gap: 2rem;
        width: 15rem;

        p, span{
            font-size: 2.5rem;
        }
    }

    @media(max-width: 1200px){
        right: 6rem;
        top: -5rem;
        gap: 2rem;
        width: fit-content;
        max-height: fit-content;

        flex-direction: row;
        overflow-wrap: normal;
        p, span{
            font-size: 2rem;
        }
    }

    @media(max-width: 1000px){
        right: 5rem;
        gap: 1.5rem;

        p, span{
            font-size: 1.6rem;
        }
    }
`