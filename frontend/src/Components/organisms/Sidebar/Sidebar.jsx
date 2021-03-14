import React, {useContext} from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styled, {ThemeContext} from 'styled-components';
import { ShowFromRight } from '../../../Animations/Animations';
import Routes from '../../../Routes/Routes';
import SidebarItem from '../../molecules/SidebarItems/SidebarItem/SidebarItem';
import SidebarTitle from '../../molecules/SidebarItems/SidebarTitle/SidebarTitle';
import returnSvg from '../../../Assets/SVG/return.svg';
import addSvg from '../../../Assets/SVG/plus.svg';

const Wrapper = styled.div`
    width:250px;
    height:93vh;
    border-right:1px solid ${({borderColor})=> borderColor};
    animation: 0.25s ease-in ${ShowFromRight};
`;


const SidebarContent = ({project}) => {
    const {colors} = useContext(ThemeContext);
    const {borderGray} = colors;
    const [thisProject] = project;
    return ( 
        <Wrapper borderColor={borderGray}>
            <SidebarTitle projectTitle={thisProject.name}/>
            <SidebarItem icon={returnSvg} title="Go back" linkTo={Routes.projects} />
            <hr/>
            <SidebarItem icon={addSvg} title="Create" linkTo={Routes.create.newNotification}/>
        </Wrapper>);
}

const Sidebar = ({projectId}) => {
    const projects = useSelector(state => state.projects);
    const project = projects.filter(project => project.id === parseInt(projectId));

    return (project.length === 1 ? 
                <SidebarContent project={project}/> :
                 <Redirect to={Routes.projects}/>)
};

export default Sidebar;