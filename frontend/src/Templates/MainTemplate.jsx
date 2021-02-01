import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width:100vw;
    height:100vw;
    font-size:62.5%;
    box-sizing:border-box;
    font-family: ${props => props.theme.fonts.raleway.name};
    margin:0;
    padding:0;
`;

const MainTemplate = ({children}) => (
    <Container>{children}</Container>
);

export default MainTemplate;
