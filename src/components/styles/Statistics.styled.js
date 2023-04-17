import styled from "styled-components";

export const StatisticsSection = styled.div`
    padding: 3rem;

    img {
        margin-left: 0 auto;
    }

    @media only screen and (min-width: ${({theme}) => theme.size.tablet}) {
        padding: 6rem 10rem;
    }
`

export const Statistics = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (min-width: ${({theme}) => theme.size.tablet}) {
        flex-direction: row;
        justify-content: space-between;
    }
`

export const StatisticsInfo = styled.div`
    padding: 2rem;
    text-align: center;
    
    > img {
        width: 2rem;
    }

    > h3 {
        font-size: 3rem;
        font-weight: 700;
    }
`