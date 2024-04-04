import styled from "styled-components";

export const Container = styled.div`
    main {
        margin: 40px 124px;

        > a {
            display: flex;
            align-items: center;

            color: ${({ theme }) => theme.COLORS.PINK};

            margin-bottom: 24px;

            svg {
                margin-right: 8px;
            }
        }

        > p {
            text-align: justify;
        }
    }
`

export const TitleNote = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    margin-bottom: 24px;

    > h1 {
        font-size: 36px;
        margin-right: 20px;
    }  

    > svg {
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.PINK}
    }
` 
export const InfoTime = styled.div`
    display: flex;
    margin-bottom: 40px;

    > img {
        height: 16px;
        width: 16px;
        object-fit: cover;
        border-radius: 50%;
        margin-right: 8px;
    }

    > p {
        display: flex;
        align-items: end;
        gap: 8px;
        font-size: 16px;

        svg {
            color: ${({ theme }) => theme.COLORS.PINK}
        }
    } 
`

export const ShowTags = styled.div`
    display: flex;
    margin-bottom: 40px;
`