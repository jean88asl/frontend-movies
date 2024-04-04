import { styled } from "styled-components"

export const Container = styled.button`
    width: 100%;
    display: flex;

    color: ${({ theme }) => theme.COLORS.PINK};
    
    border: none;
    font-size: 16px;

    &::disabled {
        opacity: 0.5;
    }

    svg {
        font-size: 16px;
        margin-right: 2px;
    }
` 