import styled, { css } from 'styled-components'

export const Button = styled.button`
    transition-timing-function: ease-in-out;
    transition-delay: 100ms;
    cursor: pointer;

    ${({kind}) => {
        switch(kind) {
            case 'primary': 
                return css`
                background-color: ${({ theme }) => theme.colors.primary};
                border: none;
                color: ${({ theme }) => theme.colors.white};
                font-weight: 700;
                text-transform: capitalize;

                &:hover {
                    box-shadow: 0 0 2px ${({ theme }) => theme.colors.accent};
                    background-color: ${({ theme }) => theme.colors.accent};
                };
            `;
            case 'secondary': 
                return css`
                background-color: ${({ theme }) => theme.colors.white};
                border: 1px solid ${({ theme }) => theme.colors.primary};
                color: ${({ theme }) => theme.colors.primary};

                &:hover {
                    box-shadow: 0 0 2px ${({ theme }) => theme.colors.accent};
                    color: ${({ theme }) => theme.colors.accent}
                };
            `;
        }
    }}
`

export const SecondaryButton = styled.button`
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 35px;
    padding: 0.5em 1.875em;
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;

    &:hover {
        transition-timing-function: ease-in-out;
        transition-delay: 100ms;
        box-shadow: 0 0 2px ${({ theme }) => theme.colors.accent};
        color: ${({ theme }) => theme.colors.accent}
    }
`

export const PrimaryButton = styled.button`
    background-color: ${({ theme }) => theme.colors.primary};
    border: none;
    border-radius: 35px;
    padding: 1em 4em;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    font-weight: 700;
    text-transform: capitalize;

    &:hover {
        transition-timing-function: ease-in-out;
        transition-delay: 100ms;
        box-shadow: 0 0 2px ${({ theme }) => theme.colors.accent};
        background-color: ${({ theme }) => theme.colors.accent};
    }
`