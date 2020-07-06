import React, { Fragment } from 'react';
import { AppBar, Toolbar } from "@material-ui/core";


export interface NavBarProps {
  children: React.ReactNode;
}

function NavBar(props: NavBarProps) {
  return (
    <Fragment>
      <AppBar>
        {props.children}
      </AppBar>
      <Toolbar />
    </Fragment>
  )
}

export default NavBar;