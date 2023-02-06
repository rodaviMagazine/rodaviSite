import { createSlice } from '@reduxjs/toolkit';
import { localStorageReducer } from './localStorage';

const initialState = {
    revista: '',
    searchMatches: '',
};

const reducerSlice = createSlice({
    name: 'reducer',
    initialState,
    reducers: {
        setRevista(state, { payload }) {
            state.revista = payload;
        },
        setSearchMatches(state, { payload }) {
            state.searchMatches = payload;
        }
    }
});

export const {
    setRevista,
    setSearchMatches
} = reducerSlice.actions

export default localStorageReducer('magazineStorage', reducerSlice.reducer, initialState);