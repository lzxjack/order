import { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Nav from './components/Nav';
import Cook from './pages/Cook';
import TakeOut from './pages/TakeOut';

import './App.css';

const App = () => {
    return (
        <div className="App-box">
            <div className="center">
                <Nav />
                <Switch>
                    <Route path="/cook" component={Cook} />
                    <Route path="/takeout" component={TakeOut} />
                    <Redirect to="/cook" />
                </Switch>
            </div>
        </div>
    );
};

export default App;
