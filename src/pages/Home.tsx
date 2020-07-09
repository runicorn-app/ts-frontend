import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, FormControl, Button, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  homePage: {
    marginTop: theme.spacing(4),
  }
}));

export const Home = () => {
  const classes = useStyles();

  return ( 
    <Container>
    <Grid container justify={'center'} className={classes.homePage}>
     <div>
        <Typography variant={'h3'} align={'center'}>Runicorn</Typography>
        <Typography variant={'body1'} align={'center'}>
          Create a runicorn profile, log runs and view other runners' profiles
        </Typography>
        <Grid container justify={'center'}>
          <Button href="/register"> 
            Register
          </Button>
          <Button href="/login">
            Login
          </Button>
        </Grid>
      </div>
      </Grid>
    </Container>
  );
};

export default Home;