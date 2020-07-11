import React, { FunctionComponent, SetStateAction, useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import {
  CssBaseline,
  List,
  ListItem,
  ListItemText,
  Theme,
  Divider,
} from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Runs from './pages/Runs';
import Register from './pages/Register';

function App() {
  let [isDark, setIsDark]: [
    boolean,
    React.Dispatch<SetStateAction<boolean>>
  ] = useState<boolean>(false);
  let [loggedIn, setLoggedIn]: [
    boolean,
    React.Dispatch<SetStateAction<boolean>>
  ] = useState<boolean>(false);

  type NavEntry = readonly [string, string];

  const publicRoutes: NavEntry[] = [['Home', '/']];

  const loggedInRoutes: NavEntry[] = [['Runs', '/runs']];

  const loggedOutRoutes: NavEntry[] = [
    ['Register', '/register'],
    ['Login', '/login'],
  ];

  const routes: Record<string, FunctionComponent> = {
    Home: Home,
    Login: Login,
    Runs: Runs,
    Register: Register,
  };

  const LoggedInItems = ({ closeDrawer }: { closeDrawer: () => void }) => (
    <React.Fragment>
      {loggedInRoutes.map((entry: NavEntry) => (
        <ListItem button component={Link} onClick={closeDrawer} to={entry[1]}>
          <ListItemText primary={entry[0]} />
        </ListItem>
      ))}
    </React.Fragment>
  );

  const LoggedOutItems = ({ closeDrawer }: { closeDrawer: () => void }) => (
    <React.Fragment>
      {loggedOutRoutes.map((entry: NavEntry) => (
        <ListItem button component={Link} onClick={closeDrawer} to={entry[1]}>
          <ListItemText primary={entry[0]} />
        </ListItem>
      ))}
    </React.Fragment>
  );

  const DefaultNavBar = (
    <NavBar setIsDark={setIsDark} isDark={isDark}>
      {(c: string, closeDrawer: () => void) => (
        <List className={c}>
          {publicRoutes.map((entry: NavEntry) => (
            <ListItem
              button
              component={Link}
              onClick={closeDrawer}
              to={entry[1]}
            >
              <ListItemText primary={entry[0]} />
            </ListItem>
          ))}
          <Divider />
          {loggedIn ? (
            <LoggedInItems closeDrawer={closeDrawer} />
          ) : (
            <LoggedOutItems closeDrawer={closeDrawer} />
          )}
        </List>
      )}
    </NavBar>
  );

  return (
    <ThemeProvider theme={isDark ? DarkTheme() : LightTheme()}>
      <CssBaseline />
      <Switch>{DefaultNavBar}</Switch>
      <Switch>
        {[...publicRoutes, ...loggedInRoutes, ...loggedOutRoutes].map(
          (entry: NavEntry) => (
            <Route exact path={entry[1]} component={routes[entry[0]]} />
          )
        )}
      </Switch>
    </ThemeProvider>
  );
}

function DarkTheme(): Theme {
  return createMuiTheme({
    palette: {
      type: 'dark',
    },
  });
}

function LightTheme(): Theme {
  return createMuiTheme({
    palette: {
      type: 'light',
    },
  });
}

export default App;
