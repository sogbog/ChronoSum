import styled from "styled-components";

export const Container = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    height: 26rem;
    overflow-y: auto;

    list-style: none;

    ::-webkit-scrollbar {
            width: 0;
        }

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

    @media(min-width: 801px){
        >span{
            font-size: 2.5rem;
        }
    }

    @media(min-width: 1501px){
        height: 40rem;
    }
`

export const Event = styled.li`
    background-color: ${({theme}) => theme.eventBackground};
    border: 1px solid ${({theme}) => theme.buttonBackground};
    border-radius: 5px;

    height: 3rem;

    font-family: "Monda";
    font-size: 1.7rem;
    padding: 0 1rem;

//------------------ Media Queries ------------------

    @media(min-width: 801px){
        height: 3.6rem;
        font-size: 2rem;
    }

    @media(min-width: 1501px){
        height: 4.5rem;
        font-size: 2.5rem;
    }
`