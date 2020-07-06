import React from 'react';
import { Field, Form, Formik } from 'formik';
import { Container, Grid, FormControl, Button, Typography } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  loginPage: {
    marginTop: theme.spacing(4),
  }
}));

function Register() {
  const classes = useStyles();

  return (
    <Container>
      <Grid container justify={'center'} className={classes.loginPage}>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            const errors: Record<string, string> = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            } else if (!values.password) {
              errors.email = 'Required';
            } else if (values.password.length < 8) {
              errors.email = 'Must be at least 8 Characters';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <FormControl component={Form}>
              <Typography variant={'h4'}>
                Register
              </Typography>
              <Field type="email" name="email" label="email" component={TextField} />
              <Field type="password" name="password" label="password" component={TextField} />
              <Button type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </FormControl>
          )}
        </Formik>
      </Grid>
    </Container>
  )
}

export default Register;