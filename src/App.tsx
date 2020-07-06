import React, { SetStateAction, useState} from 'react';
import { Route, Switch as RouterSwitch, Link } from 'react-router-dom';
import { CssBaseline, Toolbar, Button, Switch } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Login';

const DarkTheme = createMuiTheme({
    palette: {
      type: "dark",
    },
});

const LightTheme = createMuiTheme({
  palette: {
    type: "light",
  },
});

function App() {
  let [isDark, setIsDark]: [boolean, React.Dispatch<SetStateAction<boolean>>] = useState<boolean>(false);

  return (
    <ThemeProvider theme={isDark? DarkTheme: LightTheme}>
      <CssBaseline />
      <NavBar>
        <Toolbar>
          <Button component={Link} to="/">
            Home
          </Button>
          <Button component={Link} to="/login">
            Login
          </Button>
          <Switch
            checked={isDark}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIsDark(e.target.checked) }
          />
        </Toolbar>
      </NavBar>
      <RouterSwitch>
        <Route exact path={'/login'} component={Login}/>
        <Route exact path={'/'} component={Home} />
      </RouterSwitch>
    </ThemeProvider>
  );
}

export default App;
