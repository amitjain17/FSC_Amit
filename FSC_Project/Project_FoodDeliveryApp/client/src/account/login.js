import React, { useState, useEffect } from "react";
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Typography, Container } from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Navigate } from 'react-router-dom';


import GridBar from "../components/gridBar.js";
import useStyles from "./styles-login.js";
import { useDispatch, useSelector } from 'react-redux';
import { validation } from "../actions/actions.js";




const SignIn = ({ authorized }) => {
    const classes = useStyles();
    const [loginData, setLoginData] = useState({
        username: '', password: '', loginStatus: false, response: ""
    })



    const data1 = useSelector((state) => state.data)
    const dispatch = useDispatch();

    useEffect(() => { if (data1) setLoginData(data1) }, [data1])
    console.warn(loginData);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!loginData.loginStatus) {
            dispatch(validation(loginData));
        }
        clear();

    }


    const clear = () => {
        setLoginData({
            username: '', password: '', loginStatus: false
        })

    }


    return (authorized === "Success" ? <><Navigate to="/" /></> : (
        <div>
            <GridBar />
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Email Address"
                            name="username"
                            autoComplete="email"
                            value={loginData.username}
                            onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={loginData.password}
                            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={handleSubmit}
                            href={loginData.loginStatus ? "/" : "/login"}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            {/* <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid> */}
                            <Grid item>

                                <Link href="/signUp" variant="body2">
                                    {"Don't have an account? Sign Up"}
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

export default SignIn