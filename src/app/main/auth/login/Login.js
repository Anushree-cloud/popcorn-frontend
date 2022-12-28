import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { manageLoggingSuccess } from '../store/loginSlice';

import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../store/userSlice';
import axios from '../../../utils/axios';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment } from '@mui/material';
import useToast from '../../../../hooks/useToast';

const schema = yup.object({
  email: yup.string().required('Email is required!').matches(/^[a-zA-Z0-9._\-+]+@[a-zA-Z0-9-.+_]+\.[a-zA-Z]{2,6}$/, 'Please type a valid email!'),
  password: yup.string().required('Password is required!')
})

const defaultValues = {
	email: '',
	password: '',
}

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        Popcorn
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

function Login(props) {

    const { control, formState, handleSubmit, reset } = useForm({
      mode: 'onChange',
      defaultValues,
      resolver: yupResolver(schema)
    })

    const { errors } = formState

    const [showPassword, setShowPassword] = React.useState(false)
    
    // const navigate = useNavigate()
    const dispatch = useDispatch()
    const toast = useToast(dispatch)

    const submitForm = (formData) => {
      reset(defaultValues)
      setUserData(formData)
    };

    const toggleShowPassword = () => {
      setShowPassword(!showPassword)
    }

    const setUserData = (formData) => {
      axios.post('/auth/login', formData).then(response => {
        
        if(response.status === 201){
         toast.error(response.data.message)
        }

        else{
          sessionStorage.setItem('token', response.data.data.token)
          dispatch(manageLoggingSuccess(true))
          dispatch(setCurrentUser(response.data.data.user))
          toast.success('Logged in Successfully.')
        }

      }).catch(err => {
        console.log('59=>',err);
        toast.error(err.response.data.message)
        
      })
      
    }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box sx={{ mt: 1 }}>
              <form
                name='login'
                noValidate
                onSubmit={handleSubmit(submitForm)}
              >
                <Controller
                  name='email'
                  control={control}
                  render={({field}) => (
                    <TextField
                      {...field}
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      autoFocus
                      error={errors.email}
                      helperText={errors?.email?.message}
                    />
                  )}
                />
                <Controller 
                  name= {'password'}
                  control={control}
                  render={({field}) => {
                    return (
                      <TextField
                        {...field}
                        margin="normal"
                        required
                        fullWidth
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        id="password"
                        // autoComplete="current-password"
                        error={errors.password}
                        helperText={errors.password?.message}
                        InputProps = {{
                          endAdornment: 
                          <>
                            <InputAdornment>
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={toggleShowPassword}
                                onMouseDown={toggleShowPassword}
                                edge="end"
                              >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                              </IconButton>
                            </InputAdornment>
                          </>
                        }}
                      />
                    )
                  }}
                />

                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                
              </form>
              
              
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Login
