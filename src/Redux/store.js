import { configureStore } from "@reduxjs/toolkit";
import combineReducers from './index';

export default configureStore({
    reducer: combineReducers
});
