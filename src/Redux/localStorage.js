const enableLocalStorage = true;

const getStateFromStorage = (key, initialState) => {
    try {
        const state = JSON.parse(localStorage.getItem(key));
        if(Object.keys(state).length > 0) {
            return state;
        };
        return initialState;
    } catch (error) {
        return initialState;
    };
};

const setStateOnStorage = (key, state) => {
    localStorage.setItem(key, JSON.stringify(state));
};

export const localStorageReducer = (key, reducer, initialState) => {
    const _initialState = enableLocalStorage ? getStateFromStorage(key, initialState) : initialState;
    return (state = _initialState, action) => {
        if(enableLocalStorage) {
            const newState = reducer(state, action);
            setStateOnStorage(key, newState);
            return newState;
        };
        return reducer(state, action);
    };
};