import React, { Fragment } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { CssBaseline, Toolbar, Button } from "@material-ui/core";
import NavBar from './components/NavBar';
import Home from './components/Home';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <NavBar>
        <Toolbar>
          <Button component={Link} to="/">
            Home
          </Button>
        </Toolbar>
      </NavBar>
      <Toolbar />
      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route />
      </Switch>
    </Fragment>
  );
}

export default App;
