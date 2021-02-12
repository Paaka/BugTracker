import React, { useState } from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
    font-family:${({theme})=> theme.fonts.raleway.name};
    color:${({isFocused, theme}) => isFocused ? theme.colors.btnBlueDark : 'black'};
    transition:0.1s color ease-in-out;
    font-size:0.9em;
    font-weight:${({theme}) => theme.fontWeights.semiBold};
`

const StyledInput = styled.input`
    font-family:${({theme})=> theme.fonts.raleway.name};
    font-weight:${({theme})=> theme.fontWeights.medium};
    padding:5px;
    font-size:1.2em;
    min-width:300px;
    outline:none;
    border:2px solid #aaa;
    border-radius:5px;
    transition:0.2s border ease-in;

    &:focus{
        border:2px solid ${({theme})=> theme.colors.btnBlueDark};
    }
`

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    margin:10px 0;
`;


const FormInput = ({label, placeholder,  val, onChangeFn}) => {
    const [isFocused,setIsFocused] = useState(false);

    const onFocusHandler = () => {
        setIsFocused(true);
    }

    const onFocusOutHandler = () => {
        setIsFocused(false);
    }

    return(
    <Wrapper>
        <StyledLabel isFocused={isFocused}>{label}</StyledLabel>
        <StyledInput
            type="text"
            placeholder={placeholder}
            value={val} 
            onFocus={onFocusHandler} 
            onBlur={onFocusOutHandler} 
            onChange={onChangeFn} />
    </Wrapper>
    );
};

export default FormInput;