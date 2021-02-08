import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: radial-gradient(#e9c42f, #ab881c);
        font-family: 'Intel', sans-serif;
    }

    button {
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #7563D0;
        background: transparent;
        color: #fff;
        transition: all .5s ease;
        font-family: 'Intel', sans-serif;

        &:hover {
            background-color: #7563D0;
            color: #fff;
        }
    }

    h2 {
        font-weight: lighter;
        font-size: 4rem;
    }

    h3 {
        color: #fff;
    }

    h4 {
        font-weight: bold;
        font-size: 2rem;
    }

    p {
        padding: 3rem 0rem;
        color: #dbdbdb;
        font-size: 1.4rem;
        line-height: 150%;
    }

    a {
        font-size: 1.1rem;
    }

    span {
        font-weight: bold;
        color: #7563D0
    }
`
export default GlobalStyle
