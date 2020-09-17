import React, { useContext } from 'react';
import { Route, Redirect } from "react-router-dom";
import { store } from '../store'

export default function AuthRoute({ component: Component, ...rest }) {
    const { state } = useContext(store);
    const isLoggedIn = !!state.user;

    return (
        <Route {...rest} render={(props) => {
            if (!isLoggedIn) {
                return <Redirect to="/login" />
            }
            return <Component />
        }} />
    )
}