import React from 'react';

import Header from './components/Header/Header';
import Years from './pages/Years/Years';
import Vehicles from './pages/Vehicles/Vehicles';
import { Switch, Route, Router } from './utils/routes/router';

const App = () => {

    return (
        <div className='App-component'>
            <Router>
                <>
                    <Header />

                    <Switch>
                        {/* If path equals / always redirect to /years path */}
                        <Route
                            exact
                            path='/'
                            render={props => {
                                props.history.push('/years');
                            }}
                        />

                        {/* Passing Route props to child component, so child can have access to history, location and match */}
                        <Route exact path='/years' render={props => <Years {...props} />} />

                        {/* Passing Route props to child component, so child can have access to history, location and match */}
                        <Route
                            exact
                            path='/vehicles'
                            render={props => <Vehicles {...props} />}
                        />
                    </Switch>
                </>
            </Router>
        </div>
    );
};

export default App;
