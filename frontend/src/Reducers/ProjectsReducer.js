import * as Types from '../Actions/Types/Types';

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
                    {
                        id:1,
                        projectName:action.payload.projectName,
                    },
                ],
            }
        }
        default :
            return state;
    };
};

export default projectReducer;