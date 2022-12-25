import { createGlobalStyle } from "styled-components";

export const globalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    button {
        cursor: pointer;
        border: 0;
        background: transparent;
    }

    ul, ol, li{
        list-style: none;
    }

    section, aside, div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }

`;