import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Container, Grid, FormControl, Button, Typography } from '@material-ui/core';
import { TextField } from 'formik-material-ui';

function Register() {;

  return (
    <Container>
      <Grid container justify={'center'}>
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