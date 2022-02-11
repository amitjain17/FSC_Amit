import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Avatar, Card, Menu, MenuItem, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@material-ui/core';
import moment from 'moment';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { deleteData } from '../../../actions/actions.js';

const Post = ({ data, setCurrentId }) => {
    const dispatch = useDispatch();
    const [mbar, setMbar] = useState(null);
    const open = Boolean(mbar);


    const handleClick = (event) => {
        setMbar(event.currentTarget);
    }
    const handleClose = () => {
        setMbar(null);
    }
    return (
        <Card >
            <CardHeader avatar={<Avatar>A</Avatar>}
                action={
                    <IconButton aria-label="settings" onClick={handleClick}>
                        <MoreVertIcon />

                    </IconButton>}
                title={`${data.fname} ${data.lname}`}
                subheader={moment(data.moment).fromNow()} >

            </CardHeader>
            <Menu
                id="simple-menu"
                anchorEl={mbar}
                keepMounted
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={() => { dispatch(deleteData(data.id)) }}>Delete</MenuItem>
                <MenuItem onClick={handleClose}>Edit</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>

            <CardMedia image={data.image} title={data.email} style={{ "height": 0, "paddingTop": "56.25%", "backgroundColor": "rgba(0,0,0,0.5)", "backgroundBlendMode": "darken" }} />
            <CardContent>
                <Typography variant='h6'>
                    Type: {data.projectType}
                </Typography>

                <Typography variant='h6'>
                    Details: {data.projectDetails}</Typography>
                <Typography variant='h6'>
                    TimeTaken: {data.timeFrame}</Typography>
                <Typography variant='h6'>
                    Contact: {`${data.phoneNumber} `}</Typography>
                <Typography variant='h6'>
                    EmailId: {data.email}
                </Typography>

            </CardContent>

        </Card>
    )
}

export default Post