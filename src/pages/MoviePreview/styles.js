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