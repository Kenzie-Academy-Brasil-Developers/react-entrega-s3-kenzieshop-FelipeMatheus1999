import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root {

    }

    body {
        //font and color
    }

    border-style, input, button {
       //font and font-size 
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
`;
