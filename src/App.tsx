import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { CssBaseline, Toolbar } from "@material-ui/core";
import NavBar from './components/NavBar';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <NavBar>
        <Toolbar>

        </Toolbar>
      </NavBar>
      <Switch>
        <Route />
        <Route />
      </Switch>
    </Fragment>
  );
}

export default App;
