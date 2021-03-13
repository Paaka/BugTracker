import React, { useContext } from 'react';
import {useSelector} from 'react-redux';
import styled, { ThemeContext } from 'styled-components';
import Heading from '../../Components/atoms/typography/Heading/Heading';
import MainTemplate from '../../Templates/MainTemplate/MainTemplate';
import Paragraph from '../../Components/atoms/typography/Paragraph/Paragraph';
import Button from '../../Components/atoms/Button/Button';
import LinkWithoutStyling from '../../Components/atoms/typography/LinkWithoutStyles/LinkWithoutStyling';
import ProjectsList from '../../Components/organisms/ProjectsList/ProjectsList';

const Container = styled.div`
    box-sizing:border-box;
    width:100%;
    min-height:90vh;
    padding:20px;
`;

const NoProjectsContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    height:100%;
    align-items:center;
    justify-content:center;
`

const ProjectsView = () => {
    const projects = useSelector(state => state.projects);
    const {fontSizes, fontWeights} = useContext(ThemeContext);

    return(
        <MainTemplate>
            <Container>
                <Heading 
                    fontSize={fontSizes.extraLarge} 
                    fontWeight={fontWeights.medium} 
                >Projects :</Heading>
                {projects.length === 0 ? 
                (<NoProjectsContainer>
                    <Heading>You don't have any projects</Heading>
                    <Paragraph>Create new project in Bugtracker</Paragraph>
                    <LinkWithoutStyling to="/create/newProject">  
                        <Button>Create new Project</Button>
                    </LinkWithoutStyling>             
                </NoProjectsContainer>) : (<ProjectsList projects={projects}/>)}
            </Container>
        </MainTemplate>
    );
}; 

export default ProjectsView;