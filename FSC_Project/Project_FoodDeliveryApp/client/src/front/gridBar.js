import React from 'react';
import { AppBar, makeStyles, Toolbar, Button, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/MenuRounded';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        fontFamily: "MonoSpace",
        flexGrow: 1,
    },
}));

const GridBar = () => {
    const classes = useStyles();

    return (<div className='classes.root'>
        <AppBar position="static" color='secondary'>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    PIZZA MANIA
                </Typography>
                <Button color="inherit" href='/login'>Login</Button>
            </Toolbar>
        </AppBar>
    </div>)
}

export default GridBar