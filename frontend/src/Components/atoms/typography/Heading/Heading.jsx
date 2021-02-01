import React from 'react'
import styled from 'styled-components'

const StyledHeading = styled.h3`
    font-family: ${props => props.theme.fonts.montserrat.name};
    font-size:${({theme, fontSize}) => fontSize ? fontSize : theme.fontSizes.large};
    font-weight:${({theme, fontWeight}) => fontWeight ? fontWeight : theme.fonts.montserrat.weights.bold};
    color:${({fontColor})=> fontColor ? fontColor : "black"};
    padding:0;
    margin:0;
`


const Heading = ({children, fontColor, fontSize, fontWeight}) => {
    return (<StyledHeading 
                fontColor={fontColor}
                fontSize={fontSize}
                fontWeight={fontWeight}
            >{children}</StyledHeading>);
};

export default Heading;