import React from 'react';
import {
  Box,
  Button,
  FormHelperText,
  makeStyles,
  TextField,
} from '@material-ui/core';
import clsx from 'clsx';
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import { useUser } from '../../../lib/hooks';

const useStyles = makeStyles(() => ({
  root: {},
}));

function LoginForm({ className, ...rest }) {
  const classes = useStyles();
  const [user, { mutate }] = useUser();
  const router = useRouter();
  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      validationSchema={Yup.object().shape({
        username: Yup.string().max(100).required('Username is required'),
        password: Yup.string().max(100).required('Password is required'),
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          const res = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values),
          });
          if (res.status === 200) {
            const userObj = await res.json();
            mutate(userObj);
            router.push('/app');
          } else {
            setErrors({ submit: 'Incorrect username or password' });
          }
        } catch (error) {
          const message =
            (error.response && error.response.data.message) ||
            'Something went wrong';

          setStatus({ success: false });
          setErrors({ submit: message });
          setSubmitting(false);
        }
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values,
      }) => (
        <form
          noValidate
          className={clsx(classes.root, className)}
          onSubmit={handleSubmit}
          {...rest}
        >
          <TextField
            error={Boolean(touched.username && errors.username)}
            fullWidth
            helperText={touched.username && errors.username}
            label="Username"
            margin="normal"
            name="username"
            onBlur={handleBlur}
            onChange={handleChange}
            type="username"
            value={values.username}
            variant="outlined"
          />
          <TextField
            error={Boolean(touched.password && errors.password)}
            fullWidth
            helperText={touched.password && errors.password}
            label="Password"
            margin="normal"
            name="password"
            onBlur={handleBlur}
            onChange={handleChange}
            type="password"
            value={values.password}
            variant="outlined"
          />
          <Box mt={2}>
            <Button
              color="primary"
              disabled={isSubmitting}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
            >
              Log In
            </Button>
            {errors.submit && (
              <Box mt={3}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}
          </Box>
        </form>
      )}
    </Formik>
  );
}

LoginForm.propTypes = {
  className: PropTypes.string,
  onSubmitSuccess: PropTypes.func,
};

export default LoginForm;
