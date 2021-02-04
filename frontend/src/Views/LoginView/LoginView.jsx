import React, {useState} from 'react';
import styled from 'styled-components';
import Heading from '../../Components/atoms/typography/Heading/Heading';
import Paragraph from '../../Components/atoms/typography/Paragraph/Paragraph';
import LoggingImg from '../../Assets/Images/Logging.jpg';
import StyledLink from '../../Components/atoms/typography/StyledLink/StyledLink';
import MainInput from '../../Components/molecules/MainInput/MainInput';
import DivImage from '../../Components/atoms/DivImage/DivImage';
import FlexWrapper from '../../Components/atoms/FlexWrapper/FlexWrapper';

import UserIcon from '../../Assets/SVG/user.svg';
import PasswordIcon from '../../Assets/SVG/padlock.svg';
import BugIcon from '../../Assets/SVG/bug-report.svg';
import FacebookIcon from '../../Assets/SVG/facebook.svg';
import GoogleIcon from '../../Assets/SVG/google.svg';
import Button from '../../Components/atoms/Button/Button';
import CheckboxWithLabel from '../../Components/molecules/CheckboxWithLabel/CheckboxWithLabel';
import Routes from '../../Routes/Routes';


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
    font-size:62.5%;
`;

const GridWrapper = styled.div`
    width:60vw;
    height:70vh;
    background-color:white;
    padding:20px;
    border-radius:40px;
    display:grid;
    grid-template-columns:repeat(2, 1fr);
    grid-template-rows: 90%, 10%;
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
    justify-content:space-evenly;
    padding:20px 0;
`;

const StyledForm = styled.form`
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    height:60%;
`

const LoginView = () => {
    const [isRemebered, setIsRemebered] = useState(false);

    return(
            <Wrapper>
                <GridWrapper>
                   <FirstGridContainer>
                    <StyledImg src={LoggingImg} />
                   </FirstGridContainer>
                   <SecondGridContainer>
                        <FlexWrapper isCenter>    
                            <Heading fontSize="4em">Bug Tracker</Heading>
                            <DivImage bgIcon={BugIcon} width="3em" height="3em" bgSize="3.5em" />
                        </FlexWrapper>
                        <Heading fontWeight={400} fontSize="3.5em">Log in</Heading>
                        <StyledForm>
                            <MainInput type="email" placeholder="Email" icon={UserIcon}/>
                            <MainInput type="password" placeholder="Password" icon={PasswordIcon}/>
                            <CheckboxWithLabel onClickFn={setIsRemebered} value={isRemebered} label="Remeber me"/>
                            <Button margins="15px 0">Log in</Button>
                        </StyledForm>
                   </SecondGridContainer>
                   <FlexWrapper isCenter>
                    <StyledLink fontSize="1.6em" margins="0 auto"  to={Routes.register}>Create an account</StyledLink>
                   </FlexWrapper>
                   <FlexWrapper isCenter>
                       <Paragraph>Or login with :</Paragraph>
                       <DivImage marginLeft="10px" bgIcon={FacebookIcon}/>
                       <DivImage marginLeft="10px" bgIcon={GoogleIcon}/>
                   </FlexWrapper>
                </GridWrapper>
            </Wrapper>
    );
};

export default LoginView;