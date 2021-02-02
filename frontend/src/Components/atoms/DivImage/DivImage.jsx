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
`

const DivImage = (
                {bgIcon,
                height="30px",
                width="30px",
                bgSize="25px",
                }) => {
                        return <Container 
                                    height={height} 
                                    width={width} 
                                    bgSize={bgSize} 
                                    icon={bgIcon} />   
}

export default DivImage;