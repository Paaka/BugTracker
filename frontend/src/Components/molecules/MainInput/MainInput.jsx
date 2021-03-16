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
    background-color:${props => props.bgColor};

    :focus-within{
        border-bottom:2px solid blue;
    }
`

const MainInput = ({type, placeholder, icon, value, updateFn}) => {

    const onChangeHandler = e => {
        updateFn(e.target.value);
    };

    return(<Container>
            <DivImage bgIcon={icon} />
            <StyledInput onChange={onChangeHandler} value={value} type={type} placeholder={placeholder}></StyledInput>
        </Container>);
}

export default MainInput;