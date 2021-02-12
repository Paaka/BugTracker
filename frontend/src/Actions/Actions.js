import * as Types from './Types/Types';

export const CreateNewProject = (projectName) =>{
    return({
        type:Types.CREATE_NEW_PROJECT,
        payload:{
            projectName:projectName,
        },
    });
};