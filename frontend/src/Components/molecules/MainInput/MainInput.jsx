import React from 'react';
import styled from 'styled-components';
import DivImage from '../../atoms/DivImage/DivImage';
import StyledInput from '../../atoms/StyledInput/StyledInput';

const Container = styled.div`
    display:flex;
    padding:3px;
    border-bottom:2px solid #ddd;
    transition:all 0.2s ease-in;
    margin-top:2em;

    :focus-within{
        border-bottom:2px solid blue;
    }
`

const MainInput = ({type, placeholder, icon}) => {
    return(<Container>
            <DivImage bgIcon={icon} />
            <StyledInput type={type} placeholder={placeholder}></StyledInput>
        </Container>);
}

export default MainInput;