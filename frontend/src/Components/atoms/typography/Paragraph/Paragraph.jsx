import React from 'react';
import styled from 'styled-components';


const StyledParagraph = styled.p`
    font-family:${({theme})=> theme.fonts.raleway.name};
    font-size:${({theme, fontSize}) => fontSize ? fontSize : theme.fontSizes.medium};
    font-weight:${({theme, fontWeight}) => fontWeight ? fontWeight : theme.fonts.raleway.weights.regular};
    color:${({fontColor})=> fontColor ? fontColor : "black"};
    margin-left:${({marginLeft})=> marginLeft ? marginLeft : 'none'};
    padding:0;
    margin:0;
    cursor: ${({cursor})=> cursor ? cursor : 'default'};
    text-align:${({textAlign})=> textAlign ? textAlign : 'start'};
`;

const Paragraph = (
                   {children,
                    fontSize,
                    fontWeight,
                    fontColor,
                    marginLeft,
                    textAlign,
                    cursor
                  }) => (<StyledParagraph 
                            fontSize={fontSize}
                            fontWeight={fontWeight}
                            fontColor={fontColor}
                            marginLeft={marginLeft}
                            cursor={cursor}
                            textAlign={textAlign}> {children} </StyledParagraph>);

export default Paragraph;