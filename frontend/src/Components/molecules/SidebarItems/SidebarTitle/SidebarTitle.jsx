import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import DivImage from '../../../atoms/DivImage/DivImage';
import Heading from '../../../atoms/typography/Heading/Heading';
import defaultIcon from '../../../../Assets/SVG/ProjectsIcons/ladder.svg';
import FlexWrapper from '../../../atoms/FlexWrapper/FlexWrapper';
import Paragraph from '../../../atoms/typography/Paragraph/Paragraph';

const Container = styled.div`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    width:100%;
    height:50px;
    padding:2em 0px; 
`

const SidebarTitle = ({projectTitle}) => {
    const  {fontSizes} = useContext(ThemeContext);

    return (<Container>
        <DivImage bgIcon={defaultIcon} bgSize="40px" height="40px" width="40px"/>
        <div>
            <Heading fontSize="1.6em">{projectTitle}</Heading>
            <Paragraph fontSize={fontSizes.small}>Basic type</Paragraph>
        </div>
        
    </Container>)
}

export default SidebarTitle;