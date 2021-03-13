import * as Types from '../Actions/Types/Types';
import Project from '../Models/Project';

const initalState = {
    projects:[],
};

const projectReducer = (state = initalState, action) => {
    switch(action.type){
        case Types.CREATE_NEW_PROJECT : {
            return {
                ...state,
                projects:[
                    ...state.projects,
                    new Project(action.payload.projectName, 'Basic', 'Mateusz Hartabus'),
                ],
            }
        }
        default :
            return state;
    };
};

export default projectReducer;