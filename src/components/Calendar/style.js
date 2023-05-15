import styled from "styled-components";


export const Container = styled.div`
    width: fit-content;
    padding: 1rem;
    border-radius: 8px;
    background-color: ${({theme}) => theme.bigInputBackground};

    margin: 10rem 0 0 1.8rem;
`

export const Year = styled.div`
    
    display: flex;
    justify-content: center;
    gap: 1rem;

    padding-bottom: 4px;
    margin-bottom: 4px;

    border-bottom: 1px solid ${({theme}) => theme.inputText};

    button{
        background:none;
        border: none;

        svg{
            margin-top: 1.5px;
            color: ${({theme}) => theme.inputText};
            font-size: 2rem;
        }
    }

    span{
        font-family: "Orbitron";
        font-size: 1.8rem;
    }
`

export const Month = styled.div`

    display: flex;
    justify-content: center;
    gap: 1rem;

    text-align: center;
    padding-bottom: 4px;
    margin-bottom: 4px;
    border-bottom: 1px solid ${({theme}) => theme.inputText};
    
    button{
        background:none;
        border: none;

        svg{
            margin-top: 3.125px;
            color: ${({theme}) => theme.inputText};
            font-size: 1.8rem;
        }
    }

    span{
        font-family: "Orbitron";
        font-size: 1.6rem;
        width: 9.8rem;
    }
`

export const Week = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 3.2rem);
    gap: 7px;
    padding-bottom: 5px;
    margin-bottom: 1rem;
    border-bottom: 1px dashed ${({theme}) => theme.inputText};

    span{
        text-align: center;
        font-family: "Monda";
        font-size: 1.4rem;
    }
`

export const Days = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 3.2rem);
    gap: 7px;

    button{
        text-align: center;
        font-family: "Orbitron";
        color: ${({theme}) => theme.titles};
        background: none;
        border: none;
        padding: 3px;
        font-size: 1.4rem;
    }

    .event{
        color: ${({theme}) => theme.inputText};
    }
    
    .selected{
        border: 1px solid ${({theme}) => theme.inputText};
    }


`