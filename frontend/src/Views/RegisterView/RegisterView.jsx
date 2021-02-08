import React from 'react';
import styled from 'styled-components';
import StyledLink from '../../Components/atoms/typography/StyledLink/StyledLink';
import Routes from '../../Routes/Routes';
import Heading from '../../Components/atoms/typography/Heading/Heading';
import MainInput from '../../Components/molecules/MainInput/MainInput';
import CheckboxWithLabel from '../../Components/molecules/CheckboxWithLabel/CheckboxWithLabel';
import Button from '../../Components/atoms/Button/Button';

import RegisterImg from '../../Assets/Images/Register.jpg';
import FlexWrapper from '../../Components/atoms/FlexWrapper/FlexWrapper';
import Paragraph from '../../Components/atoms/typography/Paragraph/Paragraph';

const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    width:100vw;
    background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%); 
`

const GridWrapper = styled.div`
    width:60vw;
    height:70vh;
    background-color:white;
    padding:20px;
    border-radius:40px;
    display:grid;
    grid-template-columns:1.5fr 1fr;
    grid-template-rows: 90%, 10%;
`;


const StyledImg = styled.img`
    width:100%;
    height:60vh;
`


const RegisterView = () => {
    return(
    <Wrapper>
        <GridWrapper> 
            <div>
                <Heading fontWeight={500}>Register</Heading>
                <Paragraph textAlign="justify" fontSize="1.6em">Join to BugTracker, application that helps developers manage their projects</Paragraph>
                <form>
                    <MainInput placeholder="Email"></MainInput>
                    <MainInput placeholder="Nickname"></MainInput>
                    <MainInput placeholder="Password"></MainInput>
                    <MainInput placeholder="Repeat Password"></MainInput>
                    <CheckboxWithLabel label="I want to get news about update on my email." />
                    <Button margins="10px auto">Sign up</Button>
                </form>
            </div>
            <StyledImg src={RegisterImg} />
            <div>
            
            </div>
            <FlexWrapper
                justifyOption="center">
                <StyledLink to={Routes.login}>Alredy have an account ?</StyledLink>
            </FlexWrapper> 
        </GridWrapper>
    </Wrapper>
    );
}

export default RegisterView;