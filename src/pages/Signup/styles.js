import styled from "styled-components";
import backgroundImg from "../../assets/background.png"

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`
export const Form = styled.form`
    padding: 0 134px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    > h1 {
        font-size: 48px;
        font-weight: bold;

        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > p {
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        margin-bottom: 48px;
    }

    h2 { 
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.WHITE};
        margin-bottom: 48px;
    }

    > a {
        display: flex;
        align-items: center;
        justify-content: center;

        margin-top: 42px;
        color: ${({ theme }) => theme.COLORS.PINK};

        svg {
            margin-right: 6px;
            font-size: 16px;
        }
    }
`

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`