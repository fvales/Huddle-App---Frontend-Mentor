import styled, { css } from 'styled-components'

export const Button = styled.button`
    transition-timing-function: ease-in-out;
    transition-delay: 200ms;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;

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
                    -webkit-box-shadow: 0px 2px 10px -4px rgba(0,0,0,1);
                    -moz-box-shadow: 0px 2px 10px -4px rgba(0,0,0,1);
                    box-shadow: 0px 2px 10px -4px rgba(0,0,0,1);
                };
            `;
            case 'secondary': 
                return css`
                background-color: ${({ theme }) => theme.colors.white};
                border: 1px solid ${({ theme }) => theme.colors.primary};
                color: ${({ theme }) => theme.colors.primary};
                padding: 0.5em 1.875em;
                border-radius: 35px;

                &:hover {
                    box-shadow: 0 0 2px ${({ theme }) => theme.colors.accent};
                    color: ${({ theme }) => theme.colors.accent}
                };
            `;
        }
    }}
`