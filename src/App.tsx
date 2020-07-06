import React, { FunctionComponent, SetStateAction, useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { CssBaseline, List, ListItem, ListItemText, Theme } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Login from './components/Login';


function App() {
  let [isDark, setIsDark]: [boolean, React.Dispatch<SetStateAction<boolean>>] = useState<boolean>(false);
  let [loggedIn, setLoggedIn]: [boolean, React.Dispatch<SetStateAction<boolean>>] = useState<boolean>(false);

  type NavEntry = readonly [string, string];

  const items: NavEntry[] = [
    ['Home', '/'],
    ['Login', '/login'],
  ]

  const routes: Record<string, FunctionComponent > = {
    'Home': Home,
    'Login': Login
  };

  const DefaultNavBar = (
    <NavBar setIsDark={setIsDark} isDark={isDark} >
      {(c: string, closeDrawer: () => void) => (
        <List className={c}>
          {items.map((entry: NavEntry) => (
            <ListItem button component={Link} onClick={closeDrawer} to={entry[1]}>
              <ListItemText primary={entry[0]}/>
            </ListItem>
          ))}
          {loggedIn? null: null}
        </List>
      )}
    </NavBar>
)


  return (
    <ThemeProvider theme={isDark? DarkTheme(): LightTheme()}>
      <CssBaseline />
      <Switch>
        {DefaultNavBar}
      </Switch>
      <Switch>
        {items.map((entry: NavEntry) => (
          <Route exact path={entry[1]} component={routes[entry[0]]} />
        ))}
      </Switch>
    </ThemeProvider>
  );
}

function DarkTheme(): Theme {
  return createMuiTheme({
    palette: {
      type: "dark",
    },
  });
}

function LightTheme(): Theme {
  return createMuiTheme({
    palette: {
      type: "light",
    },
  });
}

export default App;
