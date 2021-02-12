import React, { useState } from 'react';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import { CreateNewProject } from '../../Actions/Actions';
import Button from '../../Components/atoms/Button/Button';
import Heading from '../../Components/atoms/typography/Heading/Heading';
import ShowFromLeftTemplate from '../../Templates/ShowFromLeftTemplate/ShowFromLeftTemplate';
import Routes from '../../Routes/Routes';
import FormInput from '../../Components/atoms/FormInput/FormInput';

const Container = styled.div`
    width:30%;
    height:50vh;
    display:flex;
    flex-direction:column;
`;

const FormContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    
`

const CreateProjectView = () => {
    const dispatch = useDispatch();
    const [projectName, setProjectName] = useState('');

    const setProjectNameHandler = e => {
        setProjectName(e.target.value);
    };

    const createNewProjectHandler = () => {
        dispatch(CreateNewProject(projectName));
        setProjectName('');
    }

    return(
    <ShowFromLeftTemplate closePath={Routes.projects}>
        <Container>
            <Heading fontWeight={500}>Create project:</Heading>
            <FormContainer>
            <FormInput label="Name" placeholder="Enter project name" val={projectName} onChangeFn={setProjectNameHandler}/>
            <Button onClick={createNewProjectHandler}>Create Project</Button>
            </FormContainer>
        </Container>
    </ShowFromLeftTemplate>
    );
};

export default CreateProjectView;