import { styled } from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 123px 150px auto;
    grid-template-areas: 
    "header"
    "menu"
    "content";

    > main {
        overflow-y: auto;
        margin-bottom: 32px;
    }
`
export const Menu = styled.div`
    grid-area: menu;
    width: 100%;
    padding: 0 123px;
    height: 42px;
    margin: 50px auto 37px;

    
    display: flex;
    align-items: center;
    justify-content: space-between;

    > h2 {
        width: auto;
        font-size: 32px;
    }

    > a {
        width: auto;
    }
`

export const NewNoteMovie = styled(Link)`
    background-color: ${({ theme }) => theme.COLORS.PINK};

    display: flex;
    align-items: center;
    
    border: none;
    border-radius: 8px;
    padding: 12px 32px;
    color: ${({ theme }) => theme.COLORS.TEXT_BUTTON};
`

export const Content = styled.div`
    grid-area: content;

    width: 100%;
    padding: 0 123px;

    gap: 24px;
    
    display: flex;
    flex-direction: column;
`