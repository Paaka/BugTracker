import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width:${({width}) => width};
    height:${({height}) => height};
    background-image:url(${props => props.icon});
    background-size:${({bgSize}) => bgSize};
    background-repeat:no-repeat;
    background-position-x:center;
    background-position-y:center;
    cursor: pointer;
    transition: background-color 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);

    :hover{
        background-color:#ccc;
        border-radius:50%;
    }

    :active{
        background-color:#aaa;
    }
`;

const BtnIcon = (
                {bgIcon,
                height="30px",
                width="30px",
                bgSize="22px",
                onClickFn=()=>{},
                }) => {
                        return <Container 
                                    height={height} 
                                    width={width} 
                                    bgSize={bgSize} 
                                    icon={bgIcon}
                                    onClick={onClickFn} />   
};

export default BtnIcon;