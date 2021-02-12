import React from 'react';
import styled from 'styled-components';
import LinkWithoutStyling from '../../Components/atoms/typography/LinkWithoutStyles/LinkWithoutStyling';
import {ShowFromRight} from '../../Animations/Animations';
import CloseIcon from '../../Assets/SVG/close.svg';
import Routes from '../../Routes/Routes';

const ContentContianer = styled.div`
    position:relative;
    box-sizing:border-box;
    max-width:100vw;
    height:100vh;
    background-color:#eee;
    animation:0.5s ${ShowFromRight} cubic-bezier(0.165, 0.84, 0.44, 1);
    display:flex;
    justify-content:center;
    align-items:center;
`;

const StyledDivImage= styled.div`
    width:20px;
    height:20px;
    background-image:url(${({bgIcon})=>bgIcon});
    background-size:20px;
    position:absolute;
    top:30px;
    right:30px;
`;

const ShowFromLeftTemplate = ({children, closePath}) => {
  
    return(  
    <ContentContianer closePath={Routes.projects}>
        {children}
        <LinkWithoutStyling to={closePath}>
            <StyledDivImage bgIcon={CloseIcon} />
        </LinkWithoutStyling>
    </ContentContianer>
    );
};

export default ShowFromLeftTemplate;