import { styled } from "styled-components"

export const Container = styled.header`
    grid-area: header;

    height: 116px;    
    background-color: ${({ theme }) => theme.COLORS.GRAY_900};

    padding: 24px 123px;

    display: flex;
    justify-content: space-between;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_300};
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
        justify-content: flex-end;
        
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