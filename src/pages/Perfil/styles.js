import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    
    > header {
        height: 144px;

        display: flex;
        align-items: center;
        padding: 0 144px;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_HEAD};

        a {
            display: flex;
            align-items: center;
            color: ${({ theme }) => theme.COLORS.PINK};

            svg {
                margin-right: 6px;
            }
        }
    }
`
export const Form = styled.form`
    max-width: 340px;

    margin: 154px auto 0;

    /* pegando uma div especifica */
    > div:nth-child(4) {
        margin-top: 24px;
    }
`

export const Avatar = styled.div`
    position: relative;
    margin: -250px auto 32px;

    display: flex;
    justify-content: center;

    > img {
        height: 186px;
        width: 186px;

        border-radius: 50%;
    }

    > label {
        height: 48px;
        width: 48px;

        background-color: ${({ theme }) => theme.COLORS.PINK};

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 50%;

        position: absolute;
        bottom: 7px;
        right: 77px;

        cursor: pointer;

        > input {
            display: none;
        }
    }

    @media (max-width: 768px) {
        margin: -100px auto 32px;
    }
`