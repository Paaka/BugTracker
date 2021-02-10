import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import projectReducer from '../Reducers/ProjectsReducer';

const store = createStore(projectReducer, composeWithDevTools());

export default store;