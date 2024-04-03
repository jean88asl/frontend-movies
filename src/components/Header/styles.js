import { styled } from "styled-components"

export const Container = styled.header`
    grid-area: header;
    width: 100%;

    background-color: ${({ theme }) => theme.COLORS.GRAY_900};
    
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_300};

    > div {
        margin: 30px 123px;
        display: grid;
        grid-template-columns: max-content auto max-content; 
        align-items: center;
    }
`

export const Logo = styled.div`
    > h1 {
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`

export const Search = styled.div`
    margin: 0 64px;

    > input {
        height: 56px;
        width: 100%;
        font-size: 14px;

        padding: 12px;
        background-color: ${({ theme }) => theme.COLORS.GRAY_400};

        border: none;
        border-radius: 10px;
        color: ${({ theme }) => theme.COLORS.GRAY_300};

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }

`

export const Profile = styled.div`
    display: flex;
    width: 100%;

    h1 {
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    div {
        display: flex;
        align-items: center;
        /* justify-content: flex-end; */
        
        div {
            display: inline-block;
            margin-right: 9px;
            text-align: right;
            width: 100px;

            p {
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-size: 14px;
            }

            a {
                text-decoration: none;
                color: ${({ theme }) => theme.COLORS.GRAY_300};
                font-size: 14px;
            }
        }        

        img {
            height: 64px;
            width: 64px;

            border-radius: 50%;
        }
    }
` 