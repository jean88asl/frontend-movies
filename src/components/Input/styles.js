import { styled } from "styled-components"

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    
    background-color: ${({ theme }) => theme.COLORS.GRAY_400};
    border-radius: 10px;
    
    > input {
        height: 56px;
        width: 100%;
        font-size: 14px;

        padding: 16px;
        background-color: transparent;

        border: none;
        color: ${({ theme }) => theme.COLORS.GRAY_300};

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }

    }

    svg {
        font-size: 18px;
        margin-left: 8px;
    }
` 