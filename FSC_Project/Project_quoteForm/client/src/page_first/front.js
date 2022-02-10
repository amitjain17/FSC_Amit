import React from "react";
import ReactDOM from 'react-dom';
import { Button, DialogTitle, Dialog, makeStyles, Container, AppBar, Toolbar, Typography, InputBase, Grid, useScrollTrigger, CssBaseline } from '@material-ui/core';
import { Search, CloseRounded } from '@material-ui/icons';
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import PropTypes from 'prop-types';

import { getData } from "../actions/actions.js";
import useStyles from "./style.js";
import MenuI from "./menu.js"
import Form from "../components/Form/form.js";
import Posts from "../components/Posts/posts.js";


const Front = () => {
    const classes = useStyles();

    const [formOpen, setFormOpen] = useState(false);

    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(async () => {
        dispatch(getData());
    }, [currentId, dispatch])
    const data = useSelector((state) => state.data);
    console.log(data);

    const openForm = () => {
        setFormOpen(true);
    }
    const closeForm = () => {
        setFormOpen(false);
    }



    return (
        <div>
            <div className={classes.root}>
                <Dialog open={formOpen}>
                    <span>
                        <DialogTitle id="customized-dialog-title" style={{ "backgroundColor": "lightsteelblue" }}>
                            Request a quote
                            <CloseRoundedIcon onClick={closeForm} style={{ "float": "right", "margin": "1%" }} />
                        </DialogTitle>
                    </span>
                    <Form currentId={currentId} setCurrentId={setCurrentId} />

                </Dialog>

                {/* <AppBar position="static" style={{
                    "backgroundColor": "#0058ca"
                }}> */}
                <AppBar style={{
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
                <div style={{ "height": "11rem" }}>
                    < Container maxWidth="sm" style={{ "height": "5rem", "display": "grid", "alignItems": "center", "justifyContent": "center", "marginTop": "10%" }} >
                        <Typography variant="h3" >Quote Requester</Typography>
                        <br />
                        <Button variant="contained" color="primary" onClick={openForm} style={{ "backgroundColor": "#00a152" }}>
                            Request a quote
                        </Button>
                    </Container>
                </div>
            </div>
            <div>
                <Container>
                    <Grid container spacing={3} style={{ "justifyContent": "center" }}>
                        <Grid item xs={12} sm={6} >
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>

    )
}

export default Front