import styled from "styled-components";

export const Container = styled.div`
    >header{
        display: flex;
        justify-content: space-between;
    }

    #ClockBackgroundDesktop{
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

    #ClearAllDesktop, #ClearAllMobile{
        padding: 5px 8px;

        background-color: ${({theme}) => theme.buttonBackground};

        border: 1px solid ${({theme}) => theme.inputText};
        border-radius: 8px;
        
        font-family: "Monda";
        font-size: 1.8rem;
        color: ${({theme}) => theme.titles};
    }

    #ClearAllMobile{
        display: none;
    }

    #App{
        display: flex;
        justify-content: space-between;

        padding: 0 10rem 0 12rem;
        position: relative;
        top: calc(55vh - 450px);

        #ClockBackgroundMobile{
            display: none;
        }
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

    #InitialTime{
        #AM-PM_wrapperMobile{
            position: absolute;
            display: flex;
            gap: 2px;
            justify-content: center;
            top: -3.5rem;
            left: 1rem;

            label{
                font-family: "Orbitron";
                font-size: 1.8rem;
                color: ${({theme}) => theme.titles};
            }

            input{
                width: fit-content;
                opacity: 0;
                width: 2.2rem;
                height: 2.2rem;
                margin-right: 1rem;
            }

            svg{
                color: ${({theme}) => theme.inputText};
                position: absolute;
                font-size: 3rem;

                top: -4px;
            }
        }
    }

    #ResultingTime{
        #Identifier{
            position: absolute;
            top: 3.4rem;
            left: 13.5rem;
            
            font-size: 2rem;
            font-family: "Orbitron";
            color: ${({theme}) => theme.inputText};
        }
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

    @media(max-width: 1730px){
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

        #ResultingTime{
            #Identifier{
                top: 3rem;
                left: 12.5rem;
            }
        }
    }

    @media(max-width: 1500px){
        #options{
            margin: 3.5rem 32rem 0 0;
        }

        #ClearAllDesktop{
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

        #InitialTime{
            #AM-PM_wrapperMobile{
                flex-direction: column;
                top: 2rem;
                left: 26.5rem;
                width: fit-content;

                input{
                    margin-left: 0;
                    margin-bottom: 1.6rem;
                }

                svg{
                    top: unset;
                    left: -4px;
                }
            }
        }

        #ResultingTime{
            #Identifier{
                top: 2.3rem;
                left: 10.5rem;
                
                font-size: 1.6rem;
            }
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

    @media(max-width: 1250px){        
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

        #InitialTime{
            #AM-PM_wrapperMobile{
                top: 1.5rem;
                left: 22rem;

                label{
                    font-size: 1.6rem;
                }

                input{
                    width: 1.8rem;
                    height: 1.8rem;
                    margin-bottom: 1.4rem;
                }

                svg{
                    font-size: 2.2rem;
                    left: -1px;
                }
            }
        }

        #ResultingTime{
            #Identifier{
                top: 1.7rem;
                left: 9rem;
            }
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

    @media(max-width: 1030px){        
        #App{
            padding: 0 3.5rem;
            top: calc(55vh - 345px);
        }

        #InitialTime{
            #AM-PM_wrapperMobile{
                top: 1.5rem;
                left: 20rem;

                label{
                    font-size: 1.4rem;
                }

                input{
                    width: 1.6rem;
                    height: 1.6rem;
                    margin-bottom: 1rem;
                }

                svg{
                    font-size: 2rem;
                    left: -1px;
                }
            }
        }

        #ResultingTime{
            #Identifier{
                top: 1.5rem;
                left: 8.2rem;

                font-size: 1.4rem;
            }
        }

        #InitialTimeSideLabel{
            top: 4.2rem;
        }

        #ResultingTimeSideLabel{
            top: 4.2rem; 
        }
    }

    @media(max-width: 800px){
        >header{
            flex-direction: column;
            justify-content: flex-start;
        }

        #options{
            margin: 2rem 0 6rem 1.8rem;
            padding-right: 2rem;
            gap: 1.5rem;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            z-index: 1;
        }

        #ClearAllDesktop{
            display: none;
        }

        #ClearAllMobile{
            display: unset;

            position: relative;
            top: 13rem;

            padding: 4px 6px;
            font-size: 1.6rem;
        }

        #App{
            align-items: center;
            flex-direction: column;
            gap: 18rem;

            position: relative;
            top: -21.6rem;
            padding-bottom: 5rem;
            background: ${({theme}) => theme.backgroundGradientMobile};
            
            #FormatWrapper{
                position: absolute;
            }
            
            #ClockBackgroundMobile{
                display: block;
                position: absolute;
                z-index: -1;
                width: 230px;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                margin: auto auto auto auto;
                opacity: ${({theme}) => theme.clockOpacity};

                transition: opacity 0.5s;
            }
        }

        #InitialTime, #ResultingTime{
            position: relative;
            
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem;

            padding: 2rem 4.5rem;
        }

        #InitialTime{
            bottom: -21.6rem;

            #AM-PM_wrapperMobile{
                flex-direction: column;
                gap: 5px;
                top: 1.5rem;
                left: 1rem;

                label{
                    font-size: 1.2rem;
                }

                input{
                    width: 1.4rem;
                    height: 1.4rem;
                    margin-bottom: 8px;
                }

                svg{
                    top: unset;
                    font-size: 2.1rem;
                    left: -4px;
                }
            }
        }
        
        #ResultingTime{
            top: -18rem;
            #Identifier{
                top: 4.2rem;
                left: 8px;
                
                font-size: 1.6rem;
            }
        }

        #InitialTimeSideLabel, #ResultingTimeSideLabel{
            font-size: 2.2rem;
            writing-mode: unset;
            text-orientation: unset;
            letter-spacing: 3px;

            padding: 0 5px;
        }

        #InitialTimeSideLabel{
            right: auto;
            top: -1.5rem;
        }

        #ResultingTimeSideLabel{
            left: auto;
            top: -1.5rem; 
        }
    }

//------Clock responsiveness------

    @media(max-width: 1500px){
        #ClockBackgroundDesktop{
            width: 500px;
            top: calc(55vh - 220px);
        }
    }

    @media(max-width: 1250px){
        #ClockBackgroundDesktop{
            width: 425px;
            top: calc(55vh - 185px);
        }
    }

    @media(max-width: 1030px){
        #ClockBackgroundDesktop{
            width: 350px;
            top: calc(55vh - 125px);
        }
    }

    @media(max-width: 800px){
        #ClockBackgroundDesktop{
            display: none;
        }
    }
`

//-------------------------------------------------------------------------

export const MainFunctions = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8rem;

//------------------ Media Queries ------------------

    @media(max-width: 1500px){
        gap: 5.5rem;
    }

    @media(max-width: 1250px){
        gap: 3rem;
    }

    @media(max-width: 800px){
        flex-direction: row;
        flex-wrap: wrap;
        position: relative;
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

    @media(max-width: 1730px){
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

    @media(max-width: 1250px){
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

    @media(max-width: 1030px){
        right: 5rem;
        gap: 1.5rem;

        p, span{
            font-size: 1.6rem;
        }
    }

    @media(max-width: 800px){
        position: relative;
        justify-content: center;
        right: 0;
        top: -10rem;
        gap: 1rem;

        width: 78.15vw;

        overflow-wrap: break-word;

        p{
            max-width: 6.7rem;
        }
    }
`