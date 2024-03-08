import { styled } from "styled-components"

export const Container = styled.button`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.TEXT_BUTTON};
    
    border-radius: 8px;
    border: 0;
    font-size: 16px;

    padding: 12px 32px;

    &::disabled {
        opacity: 0.5;
    }

    svg {
        font-size: 16px;
        margin-right: 2px;
    }
` 