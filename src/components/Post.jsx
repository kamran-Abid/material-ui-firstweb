import React from 'react'
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    card:{
        paddingTop: theme.spacing(2),
        marginBottom: theme.spacing(5),
    },
    media:{
        height: 250,
        [theme.breakpoints.down('sm')]:{
            height: 150
        }
    }
}));

const Post = () => {
    const classes = useStyles();
    return <Card className={classes.card}>
        <CardActionArea>
            <CardMedia className={classes.media} image="images/ecommerence.jpg" title="My Post" alt="Image error" />
            <CardContent >
                <Typography gutterBottom variant='h5'>My first post</Typography>
                <Typography variant='body2'>This is learning processin which i am going to learn how to use material ui for creating the card in an organize mannor.This is learning processin which i am going to learn how to use material ui  for creating the card in an organize mannor This is learning process in which i am going to learn how to use material ui  for creating the card in an organize mannor This is learning process in which i am going to learn how to use material ui  for creating the card in an organize mannor</Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" color="primary">Share</Button>
                <Button size='small' color= 'primary' variant='outlined'>Learn more</Button>
            </CardActions>
        </CardActionArea>
    </Card>
}

export default Post

