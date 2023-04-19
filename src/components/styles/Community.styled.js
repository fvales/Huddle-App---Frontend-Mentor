import styled from "styled-components";

export const CommunitySection = styled.div`
    padding: 6rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    text-align: center;

    > h2 {
        font-weight: 700;
        font-size: 1.5rem;
    }

    > button {
        border-radius: 35px;
        padding: 1em 2.5em;
    }

    @media only screen and (min-width: ${({theme}) => theme.size.tablet}) {
        padding: 6rem;

        > h2 {
            font-size: 2rem;
        }
    }
`