import React from 'react';
import styled from 'styled-components';
import Heading from '../../Components/atoms/typography/Heading/Heading';
import LoggingImg from '../../Assets/Images/Logging.jpg';
import StyledLink from '../../Components/atoms/typography/StyledLink/StyledLink';
import MainInput from '../../Components/molecules/MainInput/MainInput';
import DivImage from '../../Components/atoms/DivImage/DivImage';
import FlexWrapper from '../../Components/atoms/FlexWrapper/FlexWrapper';

import UserIcon from '../../Assets/SVG/user.svg';
import PasswordIcon from '../../Assets/SVG/padlock.svg';
import BugIcon from '../../Assets/SVG/bug-report.svg';
import Button from '../../Components/atoms/Button/Button';


const Wrapper = styled.div`
    width:100vw;
    height:100vh;
    margin:0;
    padding:0;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color: #8EC5FC;
    background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%); 
`;

const GridWrapper = styled.div`
    width:60vw;
    height:70vh;
    background-color:white;
    padding:20px;
    border-radius:40px;
    display:grid;
    grid-template-columns:repeat(2, 1fr);
`;

const StyledImg = styled.img`
    width:100%;
    height:60vh;
`;

const FirstGridContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-evenly;
`;

const SecondGridContainer = styled(FirstGridContainer)`
    align-items:flex-start;
    justify-content:flex-start;
    padding:20px 0;
`;

const LoginView = () => {
    return(
            <Wrapper>
                <GridWrapper>
                   <FirstGridContainer>
                    <StyledImg src={LoggingImg} />
                    <StyledLink to="/register">Create an account</StyledLink>
                   </FirstGridContainer>
                   <SecondGridContainer>
                        <FlexWrapper isCenter>    
                            <Heading fontSize="3em">Bug Tracker</Heading>
                            <DivImage bgIcon={BugIcon} width="3em" height="3em" bgSize="2.5em" />
                        </FlexWrapper>
                        <Heading fontSize="3em">Log in</Heading>
                        <form>
                            <MainInput type="email" placeholder="Email" icon={UserIcon}/>
                            <MainInput type="password" placeholder="Password" icon={PasswordIcon}/>
                            <input type="checkbox" /> <label>remeber me</label>
                            <Button>Log in</Button>
                        </form>
                   </SecondGridContainer>
                </GridWrapper>
            </Wrapper>
    );
};

export default LoginView;