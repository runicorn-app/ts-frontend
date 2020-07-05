import React from 'react';
import { AppBar } from "@material-ui/core";


export interface NavBarProps {
  children: React.ReactNode;
}

function NavBar(props: NavBarProps) {
  return (
    <AppBar>
      {props.children}
    </AppBar>
  )
}

export default NavBar;