import React from 'react';
import styled from 'styled-components';
import Heading from '../../Components/atoms/typography/Heading/Heading';
import ShowFromLeftTemplate from '../../Templates/ShowFromLeftTemplate/ShowFromLeftTemplate';

const FormContainer = styled.div`
    width:30%;
    height:60vh;
`;

const CreateProjectView = () => {
    return(
    <ShowFromLeftTemplate>
        <FormContainer>
            <Heading fontWeight={500}>Create project:</Heading>
            <input></input>
        </FormContainer>
    </ShowFromLeftTemplate>
    );
};

export default CreateProjectView;