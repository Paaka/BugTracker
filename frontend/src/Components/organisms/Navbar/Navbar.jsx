import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Heading from '../../atoms/typography/Heading/Heading';
import LinkWithoutStyling from '../../atoms/typography/LinkWithoutStyles/LinkWithoutStyling';

const Container = styled.div`
    width:100vw;
    height:7vh;
    background-image: linear-gradient(to right,#EB1931, #BF5082);
    display:grid;
    grid-template-columns:40%, 60%;
    align-content:center;
`;


const Navbar = () => {

    const {colors, fontSizes} = useContext(ThemeContext);

    return (
    <Container>
        <LinkWithoutStyling to="/">
        <Heading 
            fontSize={fontSizes.extraLarge} 
            fontWeight={300} 
            fontColor={colors.white}
            mLeft="10px"
            >BugTracker🐞</Heading>
        </LinkWithoutStyling>
    </Container>
    );

};

export default Navbar;
