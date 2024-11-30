import { createGlobalStyle } from "styled-components";

export const RootStyles = createGlobalStyle`
    body {
        margin: 0;
        display: block;
        font-weight: 400;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: white;
        color: black;
    }
    ul,
    ol {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 0;
    }
    a {
        text-decoration: none;
    }
    input {
        background-color: transparent;
        border: none;
    }
    button {
        cursor: pointer;
    }
`;
