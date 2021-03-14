import React, {useContext} from 'react';
import styled, {ThemeContext} from 'styled-components';
import Paragraph from '../../atoms/typography/Paragraph/Paragraph';
import DivImage from '../../atoms/DivImage/DivImage';
import starIcon from '../../../Assets/SVG/starBlack.svg';
import starIconYellow from '../../../Assets/SVG/star.svg';
import starIconOutline from '../../../Assets/SVG/starOutline.svg';
import BtnIcon from '../../atoms/BtnIcon/BtnIcon';
import StyledLink from '../../atoms/typography/StyledLink/StyledLink';
import Routes from '../../../Routes/Routes';
import FlexWrapper from '../../atoms/FlexWrapper/FlexWrapper';
import LinkWithoutStyling from '../../atoms/typography/LinkWithoutStyles/LinkWithoutStyling';
import Button from '../../atoms/Button/Button';

const GridWrapper = styled.div`
    display:grid;
    width:100%;
    grid-template-columns:10% 30% 30% 30%;
    border-bottom:2px solid #ccc;
    align-items:center;
`;

const ButtonFlexContainer = styled.div`
    display:flex;
    justify-content:center;
    width:100%;
    margin: 10px auto;
`


const ProjectsList = ({projects}) => {

    const {fontWeights, fontSizes} = useContext(ThemeContext);

    return (
    <div>
        <GridWrapper>
            <DivImage bgIcon={starIcon} bgSize="15px" />
            <Paragraph fontWeight={fontWeights.semiBold} fontSize={fontSizes.small}>Name</Paragraph>
            <Paragraph fontWeight={fontWeights.semiBold} fontSize={fontSizes.small}>Type</Paragraph>
            <Paragraph fontWeight={fontWeights.semiBold} fontSize={fontSizes.small}>Author</Paragraph>
        </GridWrapper>
           {projects.map((item, index)=> (
                <GridWrapper key={index}>
                    <BtnIcon bgIcon={starIconOutline}/>
                    <StyledLink fontSize={fontSizes.medium} to={Routes.project + '/' + item.id}> 
                        <FlexWrapper isCenter>
                            <DivImage></DivImage>
                            {item.name}
                        </FlexWrapper>
                    </StyledLink>
                    <Paragraph fontSize={fontSizes.medium}>{item.type}</Paragraph>
                    <Paragraph fontSize={fontSizes.medium}>{item.author}</Paragraph>
                </GridWrapper>
           ))}
        <ButtonFlexContainer>
            <LinkWithoutStyling to={Routes.create.newProject}>
                <Button>New project</Button>
            </LinkWithoutStyling>
        </ButtonFlexContainer>
    </div>
    );
};

export default ProjectsList;