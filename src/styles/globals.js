import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    * {
        padding: 0; 
        margin: 0;
        box-sizing: border-box;
    } 
    
    body {
        background-color: ${({ theme })=> theme.COLORS.BACKGROUND_900};
    }

    body, input, button {
        font-family: "Roboto Slab", serif;
    }
`