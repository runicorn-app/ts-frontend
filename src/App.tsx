import React, { FunctionComponent, SetStateAction, useState } from 'react';
import { Route, Switch as RouterSwitch, Link } from 'react-router-dom';
import { CssBaseline, List, ListItem, ListItemText, Theme } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Login from './components/Login';


function App() {
  let [isDark, setIsDark]: [boolean, React.Dispatch<SetStateAction<boolean>>] = useState<boolean>(false);

  type NavEntry = readonly [string, string];

  const items: NavEntry[] = [
    ['Home', '/'],
    ['Login', '/login'],
  ]

  const routes: Record<string, FunctionComponent > = {
    'Home': Home,
    'Login': Login
  };

  return (
    <ThemeProvider theme={isDark? DarkTheme(): LightTheme()}>
      <CssBaseline />
      <NavBar setIsDark={setIsDark} isDark={isDark} >
        {(c: string) => (
          <List className={c}>
            {items.map((entry: NavEntry, i: number) => (
              <ListItem button component={Link} to={entry[1]}>
                <ListItemText primary={entry[0]}/>
              </ListItem>
            ))}
          </List>
        )}
      </NavBar>
      <RouterSwitch>
        {items.map((entry: NavEntry, i: number) => (
          <Route exact path={entry[1]} component={routes[entry[0]]} />
        ))}
      </RouterSwitch>
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
