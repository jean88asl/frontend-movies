import { styled } from "styled-components"

export const Container = styled.div`
    width: 100%;

    > input {
        width: 100%;
        font-size: 14px;

        margin: 0 64px;
        padding: 19px 24px;
        background-color: #262529;
        

        border: none;
        border-radius: 10px;
        color: #948F99;

        &::placeholder {
            color: #948F99;
        }
    } 
` 