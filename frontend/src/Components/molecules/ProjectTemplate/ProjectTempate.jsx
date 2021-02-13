import React from 'react';
import DivImage from '../../atoms/DivImage/DivImage';
import BugIcon from '../../../Assets/SVG/bug.svg';
import Heading from '../../atoms/typography/Heading/Heading';
import Paragraph from '../../atoms/typography/Paragraph/Paragraph';
import styled from 'styled-components';

const GridWrapper = styled.div`
    display:grid;
    grid-template-rows: 15px 1fr;
    grid-template-columns: 110px 1fr;
    width:320px;
    align-items:flex-start;
    margin:20px 0;
`;

const TextWrapper = styled.div`
    padding:10px;
`

const ProjectTemplate = () => {
    return (
        <GridWrapper>
            <Heading fontSize="12px">Template</Heading>
            <div/>
            <DivImage height="100px" width="100px" bgSize="100px" bgIcon={BugIcon} />
            <TextWrapper>
                <Heading fontSize="1.2em">
                    Basic project
                </Heading>
                <Paragraph textAlign="justify" fontSize="1em">
                Development task and bug list management. Great for teams that don't need a board.
                </Paragraph>
            </TextWrapper>
        </GridWrapper>
    );
};

export default ProjectTemplate;