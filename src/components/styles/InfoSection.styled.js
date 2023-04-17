import styled from "styled-components";

export const StyledInfoSection = styled.article`
    display: flex;
    flex-direction: column;
    padding: 3rem;
    gap: 2rem;
    justify-content: space-between;
    flex-flow: column-reverse;

    @media only screen and (min-width: ${({ theme }) => theme.size.tablet}) {
        flex-direction: row;
        padding: 2rem 8rem;
        gap: 4rem;
        flex-flow: ${({ imageAlignment }) => imageAlignment === 'left' ? 'row-reverse' : 'unset'}
    }
`

export const Body = styled.div`
    align-self: center;

    > h1 {
        font-weight: 700;
        font-size: 2rem;
        margin-bottom: 1rem;
        text-align: center;
    }

    @media only screen and (min-width: ${({ theme }) => theme.size.tablet}) {
        > h1 {
            text-align: left;
        }
    }
`

export const Image = styled.img``