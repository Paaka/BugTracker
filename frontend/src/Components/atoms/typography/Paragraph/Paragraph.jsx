import React from 'react';
import styled from 'styled-components';


const StyledParagraph = styled.p`
    font-family:${({theme})=> theme.fonts.raleway.name};
    font-size:${({theme, fontSize}) => fontSize ? fontSize : theme.fontSizes.medium};
    font-weight:${({theme, fontWeight}) => fontWeight ? fontWeight : theme.fonts.raleway.weights.regular};
    color:${({fontColor})=> fontColor ? fontColor : "black"};
    padding:0;
    margin:0;
`;

const Paragraph = (
                   {children,
                    fontSize,
                    fontWeight,
                    fontColor}
                  ) => (<StyledParagraph 
                            fontSize={fontSize}
                            fontWeight={fontWeight}
                            fontColor={fontColor}>{children}</StyledParagraph>);

export default Paragraph;