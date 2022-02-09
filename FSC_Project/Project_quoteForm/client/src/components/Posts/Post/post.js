import React from 'react'
import { useDispatch } from 'react-redux';
import { Avatar, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@material-ui/core';
import moment from 'moment';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const Post = ({ data, setCurrentId }) => {
    const dispatch = useDispatch();

    return (
        <Card >
            <CardHeader avatar={<Avatar>A</Avatar>}
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon onClick={() => setCurrentId(data.id)} />
                    </IconButton>}
                title={`${data.fname} ${data.lname}`}
                subheader={moment(data.id).fromNow()} />
            <CardMedia image="../../../images/first.jpg" title="AMit" />
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