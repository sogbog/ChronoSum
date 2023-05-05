import styled from "styled-components";

export const Container = styled.li`
    padding: 1rem;
    border: 1px dashed ${({theme}) => theme.buttonBackground};
    border-radius: 5px;
    position: relative;
    display: flex;
    word-wrap: break-word;
    flex-direction: column;
    gap: 1.4rem;

    .Add{
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
        display: flex;
        flex-direction: column;
        align-items: center;

        >label{
            font-size: 1rem;
            font-family: "Monda";
            color: ${({theme}) => theme.titles};
        }

        >input{
            width: clamp(15rem, 70vw - 15rem, 25rem);
            background-color: ${({theme}) => theme.bigInputBackground};
            border: none;
            border-radius: 5px;
            height: 3rem;
            color: ${({theme}) => theme.inputText};
            font-family: "Orbitron";
            font-size: 1.6rem;
            padding: 0 5px;
        }

        >input:focus{
            outline: 1px solid ${({theme}) => theme.inputText};
        }
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

//------------------ Media Queries ------------------

    @media(min-width: 801px){
        width: 22rem;
        gap: 1.6rem;

        .Add{
            height: 1.8rem;
            right: 5px;
            top: 5px;

            svg{
                font-size: 1.8rem;
            }
        }

        .Name{
            >label{
                font-size: 1.6rem;
            }

            >input{
                width: 18rem;
                height: 4rem;
                font-size: 2.8rem;
                padding: 0 8px;
            }
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
    }

    @media(min-width: 1031px){
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
    }

    @media(min-width: 1501px){
        width: 25rem;
        padding: 1.5rem;

        .Add{
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
                font-size: 2.5rem;
            }
        }

        .DurationWrapper{
            flex-direction: column;
            gap: 1rem;

            span{
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
        background-color: ${({theme}) => theme.bigInputBackground};
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

    @media(min-width: 1501px){
        >label{
            font-size: 2rem;
        }
    }
`

//-------------------------------------------------------------------------