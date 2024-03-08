import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    * {
        padding: 0; 
        margin: 0;
        box-sizing: border-box;
    } 
    
    body {
        background-color: ${({ theme })=> theme.COLORS.BACKGROUND_900};
        color: ${({ theme }) => theme.COLORS.WHITE}
    }

    body, input, button {
        font-family: "Roboto Slab", serif;
        font-size: 16px;
        
    }

    button, a {
        cursor: pointer;
        text-decoration: none;
        transition: filter 0.3s;
    } 

    button:hover, a:hover {
        filter: brightness(0.9);
    }
`