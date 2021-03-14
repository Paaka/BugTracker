import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Routes from '../../../../Routes/Routes';
import DivImage from '../../../atoms/DivImage/DivImage';
import Heading from '../../../atoms/typography/Heading/Heading';
import LinkWithoutStyles from '../../../atoms/typography/LinkWithoutStyles/LinkWithoutStyling';

const Container = styled.div`
    display:grid;
    grid-template-columns:1fr 2fr;
    justify-items:center;
    width:95%;
    margin:0 auto;
    padding:0.5em 0em;
    transition:0.2s ease-in-out all;
    cursor:pointer;
    
    :hover{
        border-radius:2em;
        background-color:${props => props.hoverColor};
    }
`

const SidebarItem = ({icon, title, linkTo}) => {
    const {colors, fontWeights} = useContext(ThemeContext);

    return (
        <LinkWithoutStyles to={linkTo}>
            <Container hoverColor={colors.borderGray}>
                <DivImage bgIcon={icon}  />
                <Heading fontWeight={fontWeights.regular}>{title}</Heading>
            </Container>
        </LinkWithoutStyles>
    );
};

export default SidebarItem;