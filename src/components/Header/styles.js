import { styled } from "styled-components"

export const Container = styled.div`
    height: 116px;    
    background-color: ${({ theme }) => theme.COLORS.GRAY_900};

    padding: 24px 123px;
    margin-bottom: 40px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_300};

    > h1 {
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > div {
        display: flex;
        align-items: center;

        span {
            color: ${({ theme }) => theme.COLORS.WHITE} 
        }

        img {
        height: 64px;
        width: 64px;

        border-radius: 50%;
        }
    }
` 