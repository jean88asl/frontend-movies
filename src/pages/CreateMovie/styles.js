import { styled } from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 123px 150px auto;
    grid-template-areas: 
    "header"
    "content";

    overflow-y: hidden;
    
    margin-bottom: 60px;

    .tags {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_NOTE_ITEM};
        border-radius: 8px;
        
        display: flex;
        gap: 24px;
        flex-wrap: wrap;

        padding: 16px;
    }
`

export const Form = styled.form`
    max-width: 1140px;

    margin: 40px auto;

    > header {
        display: flex;
        flex-direction: column;

        margin-bottom: 40px;

        a {
            display: flex;
            align-items: center;

            font-size: 16px;
            gap: 4px;

            color: ${({ theme }) => theme.COLORS.PINK};

            margin-bottom: 24px;
        }

        h1 {
            font-size: 36px;
            margin: 0;
        }
    }

    > div {
        display: flex;
        gap: 40px;
        margin-bottom: 40px;
    }
`