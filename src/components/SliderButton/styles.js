import styled from "styled-components";

export const Container = styled.div`
    width: max-content;
    display: flex;
    gap: 10px;
    align-items: center;
    
    >label{
        font-size: 1.8rem;
        font-family: "Monda";
        color: ${({theme}) => theme.titles};
    }

    .InputWrapper{
        display: flex;
        align-items: center;
        gap: 4px;

        span{
            font-size: 1.6rem;
            font-family: "Orbitron";
            color: ${({theme}) => theme.titles};
        }

        input{
            opacity: 0;
        }

        .SliderBox{
            position: relative;
            width: 3rem;
            height: 3rem;
        }
        .Slider{
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: ${({theme}) => theme.bigInputBackground};
            border: 1px solid ${({theme}) => theme.bigInputBackground};
            border-radius: 50%;
            transition: .4s;            

            svg{
                position: absolute;
                color: ${({theme}) => theme.inputText};
                font-size: 1.9rem;

                top: 4px;
                right: 10px;
                transition: 0.5s;
            }
        }

        input:focus + .Slider{
            border: 1px solid ${({theme}) => theme.inputText};
        }

        input:checked + .Slider{
            svg{
                transform: rotate(180deg);
                transform-origin: 79.17% 50%;
            }
        }
    }

//------------------ Media Queries ------------------

    @media(max-width: 1250px){    
        >label{
            font-size: 1.6rem;
        }

        span{
            font-size: 1.4rem;
        }
    }
`