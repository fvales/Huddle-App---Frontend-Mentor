import styled from 'styled-components'

export const StyledBanner = styled.article`
    display: flex;
    flex-direction: column;
    gap: 2em;
    padding: 0 2rem;

    h1 {
        font-weight: 700;
        font-size: 1.5rem;
        text-align: center;
    }

    p {
        margin: 0 auto;
        text-indent: 1.5rem;
    }

    button {
        align-self: center;
    }

    @media only screen and (min-width: ${({theme}) => theme.size.tablet}) {
        padding: 0 6rem;

        p {
            width: 50%;
            text-align: center;
            text-indent: unset;
        }

        h1 {
            font-size: 3rem;
        }
    }
`