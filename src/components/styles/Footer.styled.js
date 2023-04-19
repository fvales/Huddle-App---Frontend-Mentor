import styled from "styled-components"; 

export const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme.colors.footer};
    color: ${({theme}) => theme.colors.white};
    padding: 2rem;

    @media only screen and (min-width: ${({theme}) => theme.size.tablet}) {
        padding: 6rem 6rem 2rem 6rem;
    }

    a {
        color: unset;
    }
`

export const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 4rem;

    > article > h3 {
        font-weight: 700;
        font-size: 1.5rem;
    }

    @media only screen and (min-width: ${({theme}) => theme.size.tablet}) {
        flex-direction: row;
        flex-flow: row-reverse;
        justify-content: space-between;

        > * {
            flex-basis: 35%
        }
    }
`

export const FormSection = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    > button {
        align-self: flex-end;
        border-radius: 6px;
        padding: 0.8em;
    }

    > input {
        flex: 1;
        padding: 0.4em 0.8em;
        border-radius: 10px;
        outline: none;
        box-sizing: border-box;

        &:focus {
            outline: 1px solid ${({ theme }) => theme.colors.primary};
        }
    }

    @media only screen and (min-width: ${({theme}) => theme.size.tablet}) {
        flex-direction: row;
        justify-content: space-between;
    }
`

export const FooterWave = styled.picture`
    img {
        width: 100%;
        margin-bottom: -1px;
    }
`

export const SocialMediaImage = styled.img`
    cursor: pointer;
    width: 24px;
    aspect-ratio: 1;

    &:hover {
        transition-timing-function: ease-in-out;
        transition-delay: 100ms;
        filter: invert(48%) sepia(88%) saturate(2157%) hue-rotate(294deg) brightness(101%) contrast(101%);
    }
`

export const SocialMediaSection = styled.div`
    margin-bottom: 4rem;
`