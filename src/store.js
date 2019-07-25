// 1.First step was to create the store using createStore 
// 2. 
import { createStore } from 'redux';
import { rootReducer } from './rootReducer';



export const store = createStore(rootReducer)