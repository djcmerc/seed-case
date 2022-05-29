import * as yup from 'yup';
import {
  Box,
  Button,
  Divider,
  Link,
  Paper,
  TextField,
  Typography
} from '@mui/material';
import { useFormik } from 'formik';
import { useHistory } from 'react-router';
import { getLogin } from '../api/db/UserUtils';
import React from 'react';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup.string().required('Password is required')
});

export const Login = () => {
  const [userLoginError, setUserLoginError] = React.useState<boolean>(false);
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: validationSchema,
    onSubmit: () => {
      handleLogin(formik.values.email, formik.values.password);
    }
  });

  const handleLogin = async (email: string, password: string) => {
    const result = await getLogin(email, password);
    if (result) {
      history.push('/explore');
      setUserLoginError(false);
    } else {
      setUserLoginError(true);
    }
  };

  return (
    <>
      <Box pt={5}>
        <Typography variant="h1" align="center">
          seed-CASE
        </Typography>
      </Box>

      <Box display="flex" justifyContent="center">
        <Box width={500} py={10}>
          <Paper elevation={3}>
            <Box p={3}>
              <form onSubmit={formik.handleSubmit}>
                <Box m={1}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    fullWidth
                    size="small"
                  />
                </Box>
                <Box pb={3} m={1}>
                  <TextField
                    label="Password"
                    type="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                    variant="outlined"
                    fullWidth
                    size="small"
                  />
                </Box>
                {userLoginError && (
                  <Box display="flex" justifyContent="center" pb={1}>
                    <Typography variant="body1" color="error">
                      Email or Password is incorrect.
                    </Typography>
                  </Box>
                )}
                <Divider />
                <Box display="flex" justifyContent="center" m={1.5}>
                  <Button
                    //onClick={handleLogin}
                    size="large"
                    variant="contained"
                    type="submit"
                  >
                    Login
                  </Button>
                </Box>
              </form>
              <Box display="flex" justifyContent="center">
                {/*<Link href="/forgotpassword" variant="subtitle2">
                  Forgot password?
              </Link>*/}
              </Box>
            </Box>
          </Paper>
          <Box mt={1}>
            <Box pt={1} display="flex" justifyContent="center">
              <Link variant="subtitle2" underline="none" href="/signup">
                Create New Account
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;
