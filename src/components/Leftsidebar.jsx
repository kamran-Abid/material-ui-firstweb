import React from 'react'
import {Container, Typography} from '@material-ui/core'
import { Home, PhotoCamera, Person, List, PlayCircleOutline, TabletMac, Bookmark, Settings, ExitToApp} from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    container:{
        height:'100vh',
        paddingTop: theme.spacing(10),
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        position: 'sticky',
        top: '0',
        [theme.breakpoints.up('sm')]:{
            backgroundColor: "white",
            color: '#999',
            border: '1px solid #ece7e7',
        }
    },
    item:{
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
            cursor: 'pointer',
        },
        '&:hover':{
            backgroundColor:  '#e2e2e2'
        },
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    icon:{
        marginRight: theme.spacing(1),
        [theme.breakpoints.up('sm')]:{
            fontSize: '28px'
        }
    },
    text: {
        fontWeight: '500',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    
}));


const Leftsidebar = () => {
    const classes = useStyles();
    return <Container className={classes.container}>
        <div className={classes.item} >
            <Home className={classes.icon} />
            <Typography className={classes.text}>Home</Typography>
        </div>

        <div className={classes.item} >
            <Person className={classes.icon} />
            <Typography className={classes.text}>Friends</Typography>
        </div>

        <div className={classes.item} >
            <List className={classes.icon} />
            <Typography className={classes.text}>Lists</Typography>
        </div>

        <div className={classes.item} >
            <PhotoCamera className={classes.icon} />
            <Typography className={classes.text}>Camera</Typography>
        </div>

        <div className={classes.item} >
            <PlayCircleOutline className={classes.icon} />
            <Typography className={classes.text}>Videos</Typography>
        </div>

        <div className={classes.item} >
            <TabletMac className={classes.icon} />
            <Typography className={classes.text}>Apps</Typography>
        </div>

        <div className={classes.item} >
            <Bookmark className={classes.icon} />
            <Typography className={classes.text}>Collections</Typography>
        </div>

        <div className={classes.item} >
            <Settings className={classes.icon} />
            <Typography className={classes.text}>Settings</Typography>
        </div>

        <div className={classes.item} >
            <ExitToApp className={classes.icon} />
            <Typography className={classes.text}>Logout</Typography>
        </div>
    </Container>
}

export default Leftsidebar
