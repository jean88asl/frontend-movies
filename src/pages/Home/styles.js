import { styled } from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 123px 150px auto;
    grid-template-areas: 
    "header"
    "menu"
    "content";
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

    > button {
        width: auto;
    }
`
export const Content = styled.main`
    grid-area: content;

    width: 100%;
    padding: 0 123px;

    gap: 24px;
    
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overscroll-behavior-y: contain;
`