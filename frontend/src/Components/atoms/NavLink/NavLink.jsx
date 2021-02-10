import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
    text-decoration:none;
    color:white;
    font-family:${({theme})=> theme.fonts.montserrat};
    font-size:${({theme}) => theme.fontSizes.medium};
    padding:5px;
    border-bottom:2px solid transparent;
    transition:0.2s cubic-bezier(0.165, 0.84, 0.44, 1);

    :hover{
        border-bottom:2px solid white;
    }
`;

const StyledNavLink = ({children, linkTo}) => {
    return <StyledLink to={linkTo}>{children}</StyledLink>
};

export default StyledNavLink;