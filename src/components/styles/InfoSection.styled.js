import styled from "styled-components";

export const StyledInfoSection = styled.article`
    display: flex;
    flex-direction: column;
    padding: 4rem;
    gap: 2rem;
    justify-content: space-between;
    flex-flow: column-reverse;
    position: relative;
    background-color: ${({theme, hasBg}) => hasBg ? theme.colors.pale_blue : 'unset'};
    margin: 10rem 0;

    &:before {
        content: "";
        background-size: 100%;
        background-position: left;
        width: 100%;
        height: 100%;
        left: 0;
        background-repeat: no-repeat;
        position: absolute;
        top: -60%;
        background-image: url(${({ hasBg, bgMobileTop }) => (hasBg) ? bgMobileTop : 'unset'});
        z-index: -1;

        @media only screen and (min-width: ${({ theme }) => theme.size.tablet}) {
            background-image: url(${({ hasBg, bgDesktopTop }) => (hasBg) ? bgDesktopTop : 'unset'});
        }
    }

    &:after {
        content: "";
        background-size: 100%;
        background-position: left;
        width: 100%;
        height: 100%;
        left: 0;
        background-repeat: no-repeat;
        position: absolute;
        top: 60%;
        background-image: url(${({ hasBg, bgMobileBottom }) => (hasBg) ? bgMobileBottom : 'unset'});
        z-index: -1;

        @media only screen and (min-width: ${({ theme }) => theme.size.tablet}) {
            background-image: url(${({ hasBg, bgDesktopBottom }) => (hasBg) ? bgDesktopBottom : 'unset'});
        }
    }

    @media only screen and (min-width: ${({ theme }) => theme.size.tablet}) {
        flex-direction: row;
        padding: 4rem 8rem;
        gap: 4rem;
        flex-flow: ${({ imageAlignment }) => imageAlignment === 'left' ? 'row-reverse' : 'unset'}
    }
`

export const Body = styled.div`
    align-self: center;

    > h2 {
        font-weight: 700;
        font-size: 1.5rem;
        margin-bottom: 1rem;
        text-align: center;
    }

    > p {
        text-align: center;
    }

    @media only screen and (min-width: ${({ theme }) => theme.size.tablet}) {
        > h2, p {
            text-align: left;
        }
    }
`

export const Image = styled.img``