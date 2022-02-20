import React, { useState } from "react";
import { AppBar, Toolbar, Button, Dialog, Drawer, SwipeableDrawer } from '@material-ui/core';
import GridBar from "../components/gridBar.js";
import AddFood from './addFood';
import { Grid } from '@material-ui/core';

const Admin = () => {
    const [ClickFood, setClickFood] = useState(false);


    const handleClickFood = () => {
        setClickFood(true);
    }
    const CloseClickFood = () => {
        setClickFood(false);
    }
    return (
        <div>
            <GridBar />
            <div style={{ "margin": "1rem 1.5rem" }}>
                <AppBar position="static">
                    <Toolbar variant="dense" style={{ "justifyContent": "space-around", "overflowWrap": "anywhere" }}>
                        <Button color="inherit" variant="text" >
                            User List
                        </Button>
                        <Button color="inherit" variant="text" >
                            Food List
                        </Button>
                        <Button color="inherit" variant="text" onClick={handleClickFood}>
                            Add Food
                        </Button>
                        <Button color="inherit" variant="text" >
                            Order List
                        </Button>
                    </Toolbar>
                    {ClickFood ? <><AddFood /></> : <></>}
                </AppBar>
            </div>
        </div>
    )
}

export default Admin;