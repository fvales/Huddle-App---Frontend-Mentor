import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    flex-direction: ${({direction}) => direction || 'row'} ;
    gap: ${({gap}) => gap || '0'};
`