import { styled } from "styled-components"

export const Container = styled.div`
    width: 100%;
    border-radius: 16px;
    padding: 32px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_HEAD};

    h3 {
        font-size: 24px;
        margin-bottom: 8px;
    }

    > div {
        display: flex;
        margin-bottom: 15px;

        svg {
            color: ${({ theme }) => theme.COLORS.PINK};
        }
    }

    p {
        text-align: justify;
        margin-bottom: 15px;
        height: 52px;

        color: ${({ theme }) => theme.COLORS.GRAY_300};;

        overflow-y: hidden;
    }
` 