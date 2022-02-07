import React from 'react'
import ReactDOM from 'react-dom'
import {
    Button, Menu, MenuItem, Fade, MenuList, Container, Collapse,
    ListItem
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/MenuRounded';
import { CloseRounded } from '@material-ui/icons';
import { Alert } from '@material-ui/lab';

import useStyles from './style.js';

const MenuI = () => {

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);


    const [alertAl, setAlertAl] = React.useState(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const AlertClick = () => {
        setAnchorEl(null)
        setAlertAl(true)

    }
    return (<div>
        < Container maxWidth="sm" style={{
            "display": "grid", "position": "absolute", "alignItems": "center",
            "justifyContent": "center", "marginTop": "3rem", "top": "50%", "left": "50%",
            "marginRight": "-50%", "transform": "translate(-50%,-50%)"
        }}>
            <Collapse in={alertAl} >
                <Alert severity="warning" onClose={() => { setAlertAl(false) }}>Functon is not created yet Thank You!</Alert>
            </Collapse>
        </Container>

        <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
            <MenuIcon style={{ "color": "white" }} />
        </Button>
        <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}

        >
            <MenuList autoFocusItem={open} id="menu-list-grow" className={classes.MenuList} >

                <MenuItem onClick={handleClose} style={{ "float": "right" }}><CloseRounded /></MenuItem>

                <a href='/login' style={{ "textDecoration": "none" }}>
                    <MenuItem style={{ "color": "white", "letterSpacing": "2px" }}>Sign IN</MenuItem>
                </a>
                <MenuItem onClick={AlertClick}>Function 1</MenuItem>
                <MenuItem onClick={AlertClick}>Function 2</MenuItem>
                <MenuItem onClick={AlertClick}>Function 3</MenuItem>
                <MenuItem onClick={AlertClick}>Function 4</MenuItem>
                <MenuItem onClick={AlertClick}>Function 5</MenuItem>
                <MenuItem onClick={AlertClick}>Request Quote</MenuItem>
            </MenuList>
        </Menu>


    </div >)
}

export default MenuI