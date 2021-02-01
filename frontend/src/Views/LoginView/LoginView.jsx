import React from 'react';
import Heading from '../../Components/atoms/typography/Heading/Heading';
import Paragraph from '../../Components/atoms/typography/Paragraph/Paragraph';
import MainTemplate from '../../Templates/MainTemplate';

const LoginView = () => {
    return(
        <MainTemplate>
            <Heading fontColor="red">Hey</Heading>
            <Paragraph fontColor="blue">This is probably the worst page in internet</Paragraph>
        </MainTemplate>
    );
};

export default LoginView;