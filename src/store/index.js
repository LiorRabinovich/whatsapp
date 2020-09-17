import React, { createContext, useEffect, useReducer } from 'react';
import { auth } from '../firebase'

const initialState = {
    user: JSON.parse(window.localStorage.getItem('user'))
};

const Actions = {
    SET_USER: 'SET_USER'
}

const reducer = (state, action) => {
    switch (action.type) {
        case Actions.SET_USER:
            window.localStorage.setItem('user', JSON.stringify(action.payload))
            return { ...state, user: action.payload }
        default:
            throw new Error();
    };
}

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            dispatch({ type: Actions.SET_USER, payload: user })
        });
    }, []);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider, Actions }