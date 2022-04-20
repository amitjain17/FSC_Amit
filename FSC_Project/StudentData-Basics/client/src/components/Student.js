import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Paper, Button } from '@material-ui/core';
import axios from "axios";


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function Student() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: '20px auto' }
    const classes = useStyles();

    const [data, setData] = useState({ id: "", name: "", address: "" })

    const [d_data, setdData] = useState([{ id: "", name: "", address: "" }]);

    const sendToDataBase = async (data) => await axios.post("http://localhost:8080/student/add", data);
    const getFromDataBase = () => axios.get(`http://localhost:8080/student/getAll`);

    const test = async () => {
        let { data } = await getFromDataBase();
        setdData(data);
    }
    const handleClick = (e) => {
        e.preventDefault();
        sendToDataBase(data);
        setData({ id: "", name: "", address: "" });
        test();

    }

    // console.log(d_data);
return (
    <Container>
        <Paper elevation={3} style={paperStyle} >
            <h1 style={{ color: "blue" }}><ul>ADD Student</ul></h1>
            <form className={classes.root} noValidate autoComplete="off" >
                <TextField id="outlined-basic" label="Student Id" variant="outlined" value={data.id} onChange={(e) => setData({ ...data, id: e.target.value })} fullWidth />
                <TextField id="outlined-basic" label="Student Name" variant="outlined" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} fullWidth />
                <TextField id="outlined-basic" label="Student Address" variant="outlined" value={data.address} onChange={(e) => setData({ ...data, address: e.target.value })} fullWidth />

                <Button autoFocus color="primary" type="submit" variant="contained" onClick={handleClick}>
                    Save changes
                </Button>
            </form>
        </Paper>
        <Paper elevation={3} style={paperStyle} >
            {d_data.map((val) => val.name === "" ? <div key={val.id}></div> : (<div key={val.id}><h2>ID: {val.id}</h2><h4>Name: {val.name}</h4><h4>Address: {val.address}</h4></div>))}
        </Paper>
    </Container>
);
}