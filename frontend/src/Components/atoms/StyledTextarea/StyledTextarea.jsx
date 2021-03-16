import React from 'react';
import styled from 'styled-components';

const StyledTextInput = styled.textarea`
    width:100%;
    height:10vh;
    outline:none;
    border-radius:5px;
    border:2px solid #ddd;
    resize:none;
    transition: 0.2s ease-in-out border;

    :focus{
        border:2px solid royalblue;
        
    }
`;


const StyledTextarea = ({value, onChangeFn}) => {

    const onChangeHandler = e => {
        onChangeFn(e.target.value);
    }

    return <StyledTextInput 
                value={value}
                onChange={onChangeHandler} />
};

export default StyledTextarea;