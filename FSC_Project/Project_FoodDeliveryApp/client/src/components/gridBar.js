import React, { useState } from 'react';
import { AppBar, makeStyles, Toolbar, Button, Menu, MenuItem, Typography } from '@material-ui/core';
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

const GridBar = ({ authorized }) => {
    const classes = useStyles();

    //const data = useSelector((data) => data)
    //console.warn(data.reduce[0].UserName);

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const LogOut = () => {
        sessionStorage.clear("data.reduce[0]")
        window.location.reload(true);
        handleClose()
    }


    return (<div className='classes.root'>
        <AppBar position="static" color='secondary'>
            <Toolbar>
                <Button onClick={handleClick} color="inherit">
                    <MenuIcon />
                </Button>

                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose} style={{ "float": "right" }}>X</MenuItem>
                    <MenuItem onClick={handleClose}><a href="/" style={{ "textDecoration": "none", "color": "black" }}>Home</a></MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={LogOut}>Logout</MenuItem>
                </Menu>


                <Typography variant="h6" className={classes.title}>
                    PIZZA MANIA
                </Typography>
                <Button color="inherit" href='/login'>{authorized}</Button>
            </Toolbar>
        </AppBar>
    </div>)
}

export default GridBar