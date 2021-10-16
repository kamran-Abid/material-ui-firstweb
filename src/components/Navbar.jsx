import { useState } from 'react'
import {Avatar, alpha, AppBar, Badge, Button, InputBase, makeStyles, Toolbar, Typography} from '@material-ui/core'
import {Box} from '@material-ui/core'
import {Search, Mail, Notifications, CancelOutlined} from '@material-ui/icons' 

// const btnStyles = makeStyles(theme=>({}))


const useStyles = makeStyles(theme=>({
    toolbar:{
        display: 'flex',
        justifyContent: 'space-between'
    },
    logolg:{
        display:'none',
        [theme.breakpoints.up("sm")]:{
            display: 'block',
        }
    },
    // logohl:{
    //     display:'block',
    //     [theme.breakpoints.down("sm")]:{
    //         display: 'none',
    //     }
    // },
    logosm:{
        display:'none',
        [theme.breakpoints.down("sm")]:{
            display: 'block',
        },
    },
    search:{
        display: 'flex',
        alignItems: 'center',
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25)
        },
        borderRadius: theme.shape.borderRadius,
        // [theme.breakpoints.down('sm')]:{
        //     display: 'none'
        // },
        width:'50%',
        padding: theme.spacing(1),
        [theme.breakpoints.down('sm')]:{
            width:'60%',
            display: (props) => props.open ? 'flex' : 'none'
        },
    },
    cancel:{
        [theme.breakpoints.up('sm')]:{
            display: 'none'
        }
    },
    input: {
        color: '#fff',
        marginLeft: theme.spacing(2)
    },
    icons:{
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]:{
            display: (props) => props.open ? 'none' : 'flex',
            alignItems: 'center',
        },
    },
    searchButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]:{
            display: 'none'
        },
    },
    badge:{
        marginRight: theme.spacing(2)
    }
}))

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const classes = useStyles({open})
    return (
        <>
            <AppBar position='fixed'>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" className={classes.logolg}>University of Engineering and Technology, Taxila</Typography>
                    <Typography variant="h6" className={classes.logosm}>  UET Taxila</Typography>
                    <div className={classes.search}>
                        <Search />
                        <InputBase placeholder='Search ... ' className={classes.input} />
                        <CancelOutlined className={classes.cancel} onClick={()=>setOpen(false)} />
                    </div>
                    <div className={classes.icons}>
                        <Search className={classes.searchButton} onClick={()=> setOpen(true)} />
                    <Badge badgeContent={4} color="secondary" className={classes.badge}>
                        <Mail color="white" />
                    </Badge>
                    <Badge badgeContent={3} color="secondary" className={classes.badge}>
                        <Notifications />
                    </Badge>
                    <Avatar alt="Remy Sharp" src="https://source.unsplash.com/random" />
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
