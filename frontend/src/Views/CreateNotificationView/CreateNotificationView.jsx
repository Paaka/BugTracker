import React, { useState,useRef } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import titleIcon from '../../Assets/SVG/title.svg';
import Button from '../../Components/atoms/Button/Button';
import FormInput from '../../Components/atoms/FormInput/FormInput';
import StyledSelect from '../../Components/atoms/StyledSelect/StyledSelect';
import StyledTextarea from '../../Components/atoms/StyledTextarea/StyledTextarea';
import Heading from '../../Components/atoms/typography/Heading/Heading';
import Paragraph from '../../Components/atoms/typography/Paragraph/Paragraph';
import MainInput from '../../Components/molecules/MainInput/MainInput';
import Routes from '../../Routes/Routes';
import ShowFromTheLeft from '../../Templates/ShowFromLeftTemplate/ShowFromLeftTemplate';

const Container = styled.div`
    width:30vw;
    height:90vh;
    padding:10px;
`

const CreateNotificationView = () => {
    const projects = useSelector(state => state.projects);
    const projectIdSelectRef = useRef(null);
    const notificationTypeSelectRef = useRef(null);
    const [notificationTitle, setNotificationTitle] = useState('');
    const [notificationDescription, setNotificationDescription] = useState("");
    const submitHandler = e => {
        console.log(projectIdSelectRef.current.value);
        console.log(notificationTypeSelectRef.current.value);
        console.log(notificationTitle);
        console.log(notificationDescription);
    }

    

    return (
        <ShowFromTheLeft closePath={Routes.projects}>
            <Container>
                <Heading>Create Notfication</Heading>
                <Paragraph fontSize="1.4em">Project*</Paragraph>
                <StyledSelect ref={projectIdSelectRef} name="projects" onChange={(e) => console.log(e.target.value)}>
                    {projects.map(project => <option key={project.id} value={project.id}>{project.name}</option>)}
                </StyledSelect>  
                <Paragraph> Type:</Paragraph>
                <StyledSelect ref={notificationTypeSelectRef}>
                    <option value="bug">Bug</option>
                    <option value="task">Task</option>
                    <option value="upgrade">Upgrade</option>
                    <option value="newFunction">New function</option>
                </StyledSelect>
                <Paragraph>
                    Title
                </Paragraph>
                <FormInput val={notificationTitle} onChangeFn={setNotificationTitle}></FormInput>
                <Paragraph>Description</Paragraph>
                <StyledTextarea 
                    value={notificationDescription}
                    onChangeFn={setNotificationDescription}/>
                <p>{}</p>
                <Button onClick={submitHandler}>Add</Button>
            </Container>
        </ShowFromTheLeft>
    );
}

export default CreateNotificationView;