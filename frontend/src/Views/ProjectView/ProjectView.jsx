import React from 'react';
import MainTemplate from '../../Templates/MainTemplate/MainTemplate';
import Sidebar from '../../Components/organisms/Sidebar/Sidebar';
import { useLocation } from 'react-router-dom';


const ProjectView = () => {
    const {pathname} = useLocation();
    const path = pathname.split("/");
    const projectId = path[2];


    return(
        <MainTemplate>
            <Sidebar projectId={projectId}>
            </Sidebar>
        </MainTemplate>
    );
};

export default ProjectView;