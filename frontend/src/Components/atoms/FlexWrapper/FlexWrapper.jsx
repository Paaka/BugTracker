import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    align-items:${({isCenter})=> isCenter ? 'center' : 'flex-start'};
`

const FlexWrapper = ({children, isCenter}) => <Container isCenter={isCenter}>{children}</Container>;

export default FlexWrapper;