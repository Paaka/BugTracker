import React, { useState } from 'react';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import { CreateNewProject } from '../../Actions/Actions';
import Button from '../../Components/atoms/Button/Button';
import Heading from '../../Components/atoms/typography/Heading/Heading';
import ShowFromLeftTemplate from '../../Templates/ShowFromLeftTemplate/ShowFromLeftTemplate';
import Routes from '../../Routes/Routes';
import FormInput from '../../Components/atoms/FormInput/FormInput';
import ProjectTemplate from '../../Components/molecules/ProjectTemplate/ProjectTempate';
import { useHistory } from 'react-router-dom';


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
    const history = useHistory();
    const [projectName, setProjectName] = useState('');
    const [isProjectNameEmpty, setIsProjectNameEmpty] = useState(true);

    const checkIfProjectNameIsEmpty = () =>{
        if(projectName.length < 0){
            setIsProjectNameEmpty(true);
        }else{
            setIsProjectNameEmpty(false);
        }
    }

    const setProjectNameHandler = e => {
        setProjectName(e.target.value);
        checkIfProjectNameIsEmpty();
    };



    const createNewProjectHandler = () => {
        dispatch(CreateNewProject(projectName));
        setProjectName('');
        setIsProjectNameEmpty(true);
        history.push('/projects');
    };

    return(
    <ShowFromLeftTemplate closePath={Routes.projects}>
        <Container>
            <Heading fontWeight={500}>Create project:</Heading>
            <FormContainer>
            <FormInput label="Name" placeholder="Enter project name" val={projectName} onChangeFn={setProjectNameHandler}/>
            <ProjectTemplate />
            <Button disabled={isProjectNameEmpty} onClick={createNewProjectHandler}>Create Project</Button>
            </FormContainer>
        </Container>
    </ShowFromLeftTemplate>
    );
};

export default CreateProjectView;