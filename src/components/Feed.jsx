import React from 'react'
import {Container, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import Post from './Post'

const useStyles = makeStyles(theme => ({
    container:{
        paddingTop: theme.spacing(10),
    },
}));

const Feed = () => {
    const classes = useStyles();
    return <Container className={classes.container}>
        <Post />
        <Post />
        <Post />
    </Container>
}

export default Feed

