import { styled } from "styled-components"

export const Container = styled.textarea`
    width: 100%;
    height: 280px;

    padding: 16px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_400};
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    border: none;
    border-radius: 10px;
    resize: none;

    &&::placeholder{
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
` 