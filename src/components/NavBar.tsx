import React, { Fragment, useState, SetStateAction } from 'react';
import { AppBar, Drawer, Switch, Toolbar, Divider, IconButton, Typography } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import MenuIcon from '@material-ui/icons/Menu';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness2Icon from '@material-ui/icons/Brightness2';


export interface NavBarProps {
  children: (c: string, closeDrawer: () => void) => React.ReactNode;
  setIsDark: React.Dispatch<SetStateAction<boolean>>;
  isDark: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  DrawerToolBar: {
    userSelect: "none",
  },
  MenuButton: {},
  List: {
    width: 250,
  },
  Title: {
    flex: 1,
  },
  fillSpace: {
    flex: 1,
  },
}));

function NavBar(props: NavBarProps) {
  let [open, setOpen]: [boolean, React.Dispatch<SetStateAction<boolean>>] = useState<boolean>(false);

  const { isDark, setIsDark } = props
  const classes = useStyles();

  function handleDarkSwitch(e: React.ChangeEvent<HTMLInputElement>) {
    setIsDark(e.target.checked);
  }

  return (
    <Fragment>
      <AppBar>
        <Toolbar>
          <IconButton color={'inherit'} onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant={'h6'} className={classes.Title}>
            Runicorn
          </Typography>
          <Switch
            checked={isDark}
            onChange={handleDarkSwitch}
            icon={<WbSunnyIcon fontSize={'small'} />}
            checkedIcon={<Brightness2Icon fontSize={'small'} />}
          />
        </Toolbar>
      </AppBar>
      <Drawer anchor={'left'} open={open} onClose={() => setOpen(false)}>
        <Toolbar className={classes.DrawerToolBar}>
          <Typography variant={'h5'} className={classes.fillSpace}>
            Runicorn
          </Typography>
          <IconButton edge={'end'} className={classes.MenuButton} onClick={() => setOpen(false)}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        {props.children(classes.List, () => setOpen(false))}
      </Drawer>
      <Toolbar />
    </Fragment>
  )
}

export default NavBar;