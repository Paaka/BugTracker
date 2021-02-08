import React from 'react'
import styled from 'styled-components'

const StyledHeading = styled.h3`
    font-family: ${props => props.theme.fonts.montserrat.name};
    font-size:${({theme, fontSize}) => fontSize ? fontSize : theme.fontSizes.large};
    font-weight:${({theme, fontWeight}) => fontWeight ? fontWeight : theme.fonts.montserrat.weights.bold};
    color:${({fontColor})=> fontColor ? fontColor : "black"};
    padding:0;
    margin:0;
    margin-left:${({mLeft})=> mLeft};
`


const Heading = ({children, fontColor, fontSize, fontWeight, mLeft}) => {
    return (<StyledHeading 
                fontColor={fontColor}
                fontSize={fontSize}
                fontWeight={fontWeight}
                mLeft={mLeft}
            >{children}</StyledHeading>);
};

export default Heading;