import { styled } from "styled-components"

export const Container = styled.div`
    width: 100%;
    border-radius: 16px;
    padding: 32px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_HEAD};

    .tag-home {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_TAG_HOME};
        padding: 5px 16px;
    }

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

    .text {
        text-overflow: ellipsis;
        height: 53px;
        overflow: hidden;
        
        margin-bottom: 32px;
        
        p {
            text-align: justify;
            margin-bottom: 30px;
        
            color: ${({ theme }) => theme.COLORS.GRAY_300};        
        }
    }
` 