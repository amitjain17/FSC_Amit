import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Button, CssBaseline, TextField, Link, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import useStyles from './styles-signup.js';
import { subscribe } from './../actions/actions';
import GridBar from "../components/gridBar.js";
import { Navigate } from "react-router-dom";


const SignUp = ({ authorized }) => {

    const classes = useStyles();

    const [signupData, setSignupData] = useState({
        username: '', password: '', loginStatus: false, response: ""
    })

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!signupData.loginStatus) {
            dispatch(subscribe(signupData))
        }
        clear();
    }

    const clear = () => {
        setSignupData({
            username: '', password: '', loginStatus: false, response: ""
        })
    }
    return (authorized === "SignUpSuccess" ? <><Navigate to="/login" /></> : (
        <div>

            <GridBar />
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <form className={classes.form} noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={2}>

                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    value={signupData.username}
                                    onChange={(e) => setSignupData({ ...signupData, username: e.target.value })}

                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={signupData.password}
                                    onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                                />
                            </Grid>

                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>

            </Container>
        </div>
    )
    );
}

export default SignUp