import styled from "styled-components";

export const Container = styled.li`
    background-color: ${({theme}) => theme.eventBackground};
    padding: 1rem;
    border: 1px solid ${({theme}) => theme.buttonBackground};
    border-radius: 5px;
    position: relative;
    display: flex;
    word-wrap: break-word;
    flex-direction: column;
    gap: 1.4rem;

    .Delete{
        background: none;
        border: none;
        height: 1.5rem;
        position: absolute;
        right: 5px;
        top: 5px;

        svg{
            color: ${({theme}) => theme.titles};
            font-size: 1.5rem;
        }
    }

    .Name{
        font-size: 1.8rem;
        font-family: "Monda";
        color: ${({theme}) => theme.titles};
        padding-right: 1rem;
    }

    .DurationWrapper{
        display: flex;
        flex-direction: column;
        gap: 6px;

        span{
            font-size: 1.2rem;
            font-family: "Monda";
            color: ${({theme}) => theme.titles};
        }
    }

    .FieldsWrapper{
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .DateWrapper{

        margin-top: 1rem;

        span{
            width: clamp(15rem, 100%, 28rem);
            text-align: center;
            height: 3rem;
            background-color: ${({theme}) => theme.inputBackground};
            border: none;
            border-radius: 5px;
            color: ${({theme}) => theme.inputText};
            font-family: "Orbitron";
            font-size: 1.6rem;
            padding: 5px;
        }
    }

    .LeftSide{
        width: 100%;
    }
    
    .RightSide{
        display: flex;
        flex-direction: column;
        gap: 6px;

        >span{
            font-size: 1.2rem;
            font-family: "Monda";
            color: ${({theme}) => theme.titles};
        }

        input{
            width: clamp(6rem, 30vw - 5rem, 17rem);
        }
    }

//------------------ Media Queries ------------------

@media(min-width: 801px){
        width: 53.3rem;
        padding: 2rem;
        gap: 1.6rem;
        min-height: 52.4rem;
        flex-direction: row;
        justify-content: space-between;

        .Delete{
            height: 1.8rem;
            right: 5px;
            top: 5px;

            svg{
                font-size: 1.8rem;
            }
        }

        .Name{
            font-size: 2.8rem;
            padding-right: 1rem;
        }

        .DurationWrapper{
            flex-direction: column;
            gap: 6px;

            span{
                font-size: 1.8rem;
            }
        }

        .FieldsWrapper{
            gap: 1rem;
            flex-direction: column;
            justify-content: space-between;
        }

        .DateWrapper{
            span{
                height: 4rem;
                font-size: 2.8rem;
                padding: 2px;
            }
        }

        .RightSide{
            >span{
                font-size: 1.8rem;
            }
        }
    }

    @media(min-width: 1031px){
        min-height: 38.1rem;
        .Name{
            >label{
                font-size: 1.8rem;
            }
        }

        .DurationWrapper{
            flex-direction: column;
            gap: 1rem;

            span{
                font-size: 2rem;
            }
        }

        .DateWrapper{
            span{
                font-size: 2.8rem;
            }
        }

        .RightSide{
            >span{
                font-size: 2rem;
            }
        }
    }

    @media(min-width: 1501px){
        min-height: 41.1rem;
        padding: 1.5rem;

        .Delete{
            height: 2rem;
            width: 2rem;
            right: 6px;
            top: 6px;

            svg{
                font-size: 2rem;
            }
        }

        .Name{
            >label{
                font-size: 2rem;
            }
        }

        .DurationWrapper{
            flex-direction: column;
            gap: 1rem;

            span{
                font-size: 2.5rem;
            }
        }

        .DateWrapper{
            span{
                font-size: 2.8rem;
            }
        }

        .RightSide{
            >span{
                font-size: 2.5rem;
            }
        }
    }
`

//-------------------------------------------------------------------------

export const Field = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    >label{
        font-size: 1rem;
        font-family: "Monda";
        color: ${({theme}) => theme.titles};
    }

    >input{
        text-align: center;
        width: clamp(6rem, 30vw - 5rem, 15rem);
        height: 3rem;
        background-color: ${({theme}) => theme.inputBackground};
        border: none;
        border-radius: 5px;
        color: ${({theme}) => theme.inputText};
        font-family: "Orbitron";
        font-size: 1.6rem;
        padding: 0 5px;
    }

    >input:focus{
        outline: 1px solid ${({theme}) => theme.inputText};
    }

    input:disabled{
        opacity: 1;
    }

//------------------ Media Queries ------------------

    @media(min-width: 801px){
        >label{
            font-size: 1.6rem;
        }

        >input{
            width: clamp(6rem, 30vw - 5rem, 15rem);
            height: 4rem;
            font-size: 2.8rem;
            padding: 0 8px;
        }
    }

    @media(min-width: 1031px){
        >label{
            font-size: 1.8rem;
        }
    }
`

//-------------------------------------------------------------------------