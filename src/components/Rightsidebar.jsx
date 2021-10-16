import React from 'react'
import {Container, Typography, Avatar, ImageList, ImageListItem, Link, Divider} from '@material-ui/core'
import AvatarGroup from '@material-ui/lab/AvatarGroup'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    container:{
        paddingTop: theme.spacing(10),
        position: 'sticky',
        top: 0,
    },
    title:{
        fontSize: 26,
        fontWeight: 500,
        color: "#555",
        marginTop: theme.spacing(4),
    },
    mrb:{
        marginBottom: theme.spacing(4),
    },
    ImageList:{
        padding: theme.spacing(2),
        border: '5px solid #dde ',
        borderRadius: theme.spacing(2),
    },
    link:{
        marginRight: theme.spacing(4),
        color: '#555',
        fontSize: 16,
        transition: "0.5s all",
        '&:hover':{
            fontSize: 20,
            color: "#00e"
        }
    }
}));

const Rightsidebar = () => {
    const classes = useStyles();
    return <Container className={classes.container}>
        <Typography className={classes.title} gutterBottom >Online friends</Typography>
        <AvatarGroup max={6} className={classes.mrb}>
            <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg"  />
            <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg"  />
            <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg"  />
            <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg"  />
            <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg"  />
            <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/6.jpg"  />
            <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/7.jpg"  />
        </AvatarGroup>

        <Typography className={classes.title} gutterBottom >Gallery</Typography>
        <ImageList  cols={2} rowHeight={100} className={classes.mrb, classes.ImageList}>
            <ImageListItem>
                <img src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164' alt="img1" loading="lazy" />
            </ImageListItem>
            <ImageListItem>
                <img src='https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=164&h=164&fit=crop&auto=format' alt="img2" loading="lazy" />
            </ImageListItem>
            <ImageListItem>
                <img src='https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format' alt="img1" loading="lazy" />
            </ImageListItem>
            <ImageListItem>
                <img src='https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=164&h=164&fit=crop&auto=format' alt="img3" loading="lazy" />
            </ImageListItem>
            <ImageListItem>
                <img src='https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format' alt="img4" loading="lazy" />
            </ImageListItem>
            <ImageListItem>
                <img src='https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=164&h=164&fit=crop&auto=format' alt="img5" loading="lazy" />
            </ImageListItem>
        </ImageList>

        <Typography className={classes.title} gutterBottom >Links</Typography>
        <Link href="#" className={classes.link} variant="body2">Sports</Link>
        <Link href="#" className={classes.link} variant="body2">Food</Link>
        <Link href="#" className={classes.link} variant="body2">Movies</Link>
        <Divider flexItem />
        <Link href="#" className={classes.link} variant="body2">Science</Link>
        <Link href="#" className={classes.link} variant="body2">Life</Link>
    </Container>
}

export default Rightsidebar
