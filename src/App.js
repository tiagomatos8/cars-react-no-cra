import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <div className='App.component'>
      <Router>
        <Switch>
          {/* If the current URL is /years, this route is rendered
            while the rest are ignored */}
          <Route path='/years'>
            {props => (
              <div>
                years
                <Link to='/vehicles'>Vehicles</Link>
              </div>
            )}
          </Route>

          <Route path='/vehicles'>
            {props => (
              <div>
                vehicles
                <Link to='/years'>Years</Link>
              </div>
            )}
          </Route>

          {/* If none of the previous routes render anything,
            this route acts as a fallback.

            Important: A route with path="/" will *always* match
            the URL because all URLs begin with a /. So that's
            why we put this one last of all */}
          <Route path='/'>
            {props => (
              <div>
                years
                <Link to='/vehicles'>Vehicles</Link>
              </div>
            )}
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
