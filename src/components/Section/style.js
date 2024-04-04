import styled from "styled-components"

export const Container = styled.section`
    width: 100%;
    margin: 40px 0;

    > h2 {
        font-size: 20px;
        color: ${({ theme }) => theme.COLORS.GRAY_300};

        padding: 0 0 24px;
    }
`