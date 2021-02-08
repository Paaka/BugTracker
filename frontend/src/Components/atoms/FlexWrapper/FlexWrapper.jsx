import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    align-items:${({isCenter})=> isCenter ? 'center' : 'flex-start'};
    justify-content:${({justifyOption}) => justifyOption};
`

const FlexWrapper = ({children, onClickFn, isCenter, justifyOption}) =>{
    
    const onClickHandler = () => {

        if(onClickFn !== undefined){
            onClickFn();
        }
    }

    return <Container onClick={onClickHandler} justifyOption={justifyOption} isCenter={isCenter}>{children}</Container>;
} 

export default FlexWrapper;