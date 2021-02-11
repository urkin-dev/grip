import { createGlobalStyle } from 'styled-components'

export const colors = {
	basicPurple: '#7563D0',
}

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
    @media (max-width: 1700px){
        font-size: 75%;
    

    body {
        overflow-x: hidden;
        background: radial-gradient(#e9c42f, #ab881c) no-repeat;
        font-family: 'Intel', sans-serif;
    }

    button {
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid ${colors.basicPurple};
        background: transparent;
        color: #fff;
        transition: all .5s ease;
        font-family: 'Intel', sans-serif;

        &:hover {
            background-color: ${colors.basicPurple};
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
        color: ${colors.basicPurple}
    }
`
export default GlobalStyle
