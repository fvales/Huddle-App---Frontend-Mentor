import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: ${({theme}) => theme.colors.white};
    padding: 2rem;

    @media only screen and (min-width: ${({theme}) => theme.size.laptop}) {
        padding: 2.5rem;
    }
`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6rem;
`

export const Logo = styled.img`
    width: 8em;

    @media only screen and (min-width: ${({theme}) => theme.size.tablet}) {
        width: 10em;
    }
`