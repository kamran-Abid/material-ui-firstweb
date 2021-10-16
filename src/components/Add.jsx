import React, { useState } from 'react'
import {Button, Container, Tooltip, Fab, Modal, TextField, MenuItem,FormLabel, FormControlLabel, RadioGroup, Radio, Snackbar} from '@material-ui/core'
import {Alert} from  '@material-ui/lab'
import { makeStyles } from '@material-ui/styles';
import { Add as AddIcon } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    fab:{
        position: 'fixed',
        bottom: 10,
        right: 10,
    },
    Container: {
        width: 500,
        height: 550,
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: 'auto',
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
        [theme.breakpoints.down('xs')]:{
            width: '100%',
            height: '100vh',
        },
    },
    form:{
        padding: theme.spacing(2),
    },
    item:{
        marginBottom: theme.spacing(3),
    }
}));

const Post = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);

    const handleClose = (event, reason) => {
        if(reason === 'clickaway'){
            return;
        }

        setOpenAlert(false);
    }
    return (
        <>
            <Tooltip title='Add' aria-label='add' onClick={()=> setOpen(true)} >
                <Fab color='primary' className={classes.fab}>
                    <AddIcon />
                </Fab>
            </Tooltip>
            <Modal open={open}>
                <Container className={classes.Container}>
                    <form className={classes.form} autoComplete='off'>
                        <div className={classes.item}>
                            <TextField id='standard-basic' label='Title' size='small' style={{width: '100%'}} />
                        </div>
                        <div className={classes.item}>
                            <TextField id="outlined-multiline-static" multiline rows={4} label='descriptioin' 
                                defaultValue='Tell your story' variant="outlined" size='small' style={{width: "100%"}} />
                        </div>
                        {/* <TextField id="standard-select-currency" select label="Select" value={currency} 
                        onChange={handleChange} helperText="Please select your currency" variant="standard" > 
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}> 
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField> */}
                        <div className={classes.item}>
                            <TextField select label='visibility' value="Public">
                                <MenuItem value="Public">Public</MenuItem>
                                <MenuItem value="Private">Private</MenuItem>
                                <MenuItem value="Unlisted">Unlisted</MenuItem>
                            </TextField>
                        </div>
                        
                        <div className={classes.item}>
                            <FormLabel components="legent">Who can comment</FormLabel>
                            <RadioGroup >
                                <FormControlLabel value="Everybody" label="Everybody" control={<Radio size='small' />} />
                                <FormControlLabel value="My Friends" label="My Friends" control={<Radio size='small' />} />
                                <FormControlLabel value="Nobody" label="Nobody" control={<Radio size='small' />} />
                                <FormControlLabel disabled value="Custom" label="Custom (Premium )" control={<Radio size='small' />} />
                            </RadioGroup>
                        </div>

                        <div className={classes.item}>
                            <Button variant='outlined' color='primary' onClick={() => setOpenAlert(true)} style={{marginRight: 20}}>Create</Button>
                            <Button variant='outlined' color='secondary' onClick={() => setOpen(false)}>Cancel</Button>
                        </div>

                    </form>
                </Container>
            </Modal>

            <Snackbar open={openAlert} autoHideDuration={4000} onClose={handleClose} anchorOrigin={{vertical:'top', horizontal:'center'}}  >
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    This is a success message!
                    </Alert>
                </Snackbar>
        </>
    )
}

export default Post

