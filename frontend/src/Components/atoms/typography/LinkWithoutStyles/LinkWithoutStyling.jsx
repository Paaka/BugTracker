import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const LinkWithoutStyling = styled(Link)`
    text-decoration:none;
    color:initial;
`;

export default LinkWithoutStyling;