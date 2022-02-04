import React from "react";
import ReactDOM from 'react-dom';
import { Button, Container, AppBar, Toolbar, Typography, InputBase } from '@material-ui/core';
import { Search } from '@material-ui/icons';

import useStyles from "./style.js";
import MenuI from "./menu.js"


const Front = () => {
    const classes = useStyles();


    return (

        <div className={classes.root}>
            <AppBar position="static" style={{
                "backgroundColor": "#0058ca"
            }}>
                <Toolbar >
                    <MenuI />
                    <Typography className={classes.title} variant="h6" noWrap>
                        Quote Requester
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <Search />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
            < Container maxWidth="sm" style={{ "height": "5rem", "display": "grid", "alignItems": "center", "justifyContent": "center", "marginTop": "10%" }} >
                <Typography variant="h3" >Quote Requester</Typography>
                <br />
                <Button variant="contained" color="primary" style={{ "backgroundColor": "#00a152" }}>
                    Request a quote
                </Button>
            </Container>

        </div>
    )
}

export default Front