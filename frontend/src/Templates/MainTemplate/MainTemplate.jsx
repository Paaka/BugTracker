import React from 'react';
import styled from 'styled-components';
import Navbar from '../../Components/organisms/Navbar/Navbar';

const Container = styled.div`
    width:100vw;
    max-height:100vw;
    font-size:62.5%;
    box-sizing:border-box;
    font-family: ${props => props.theme.fonts.raleway.name};
    margin:0;
    padding:0;
`;

const MainTemplate = ({children}) => (
    <Container>
        <Navbar />
        {children}
    </Container>
);

export default MainTemplate;
