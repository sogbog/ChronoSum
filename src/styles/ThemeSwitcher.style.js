import styled from "styled-components";

export const ThemeButton = styled.button`
    background: none;
    border: none;

    position: absolute;
    right: 3rem;
    top: 3rem;

    svg{
        font-size: 5rem;
        color: ${({theme}) => theme.titles};
    }
`