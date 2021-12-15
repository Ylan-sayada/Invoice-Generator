import React from 'react';
import Home from '../Home';
import NotFound from '../404';
import { Switch, Route } from "react-router-dom";
import FormFacture from '../FormFacture';
import Dashboard from '../Dashboard';
export default function Main(){

    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/dashboard">
                    <Dashboard/>
                </Route>
                <Route path="/formFacture">
                    <FormFacture/>
                </Route>
                <Route component={NotFound} />
            </Switch>
        </React.Fragment>
    )
}
