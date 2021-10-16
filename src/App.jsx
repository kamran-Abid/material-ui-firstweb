import {Button, makeStyles, Grid} from '@material-ui/core'
import Add from './components/Add';
import Feed  from './components/Feed';
import Leftsidebar from './components/Leftsidebar';
import Navbar from './components/Navbar';
import Rightsidebar from './components/Rightsidebar';

// import {IconButton} from '@material-ui/core'
// import {Input} from '@material-ui/core'
// import {PhotoCamera} from '@material-ui/icons'
// import PersonAdd from '@material-ui/icons/PersonAdd';


const btnStyles = makeStyles(theme => ({
  main_cont:{
    // marginTop:theme.spacing(7),
  },
  right: {
    [theme.breakpoints.down('sm')]:{
      display: 'none',
    }
  }
  // button:{
    // color: '#fff',
    // backgroundColor: theme.palette.primary.main 

    // ...theme.myButton
  //  }
  // button:{
  //   color: '#fff',
  //   backgroundColor: theme.palette.primary.main 
  // }
}))

const App = () => {
  const classes = btnStyles()
  return (
    <>
      {/* <Button variant='outlined' className={classes.button}
        size="large" startIcon={<PersonAdd />}>Material UI</Button>
      <label htmlFor="icon-button-file">
        <Input accept="image/*" id="icon-button-file" type="file" />
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton> 
      </label> */}

        <Navbar />
        <Grid container className={classes.main_cont}>
          <Grid item sm={2} xs={2}><Leftsidebar /></Grid>
          <Grid item sm={7} xs={10}><Feed /></Grid>
          <Grid item sm={3} className={classes.right}><Rightsidebar /></Grid>
      </Grid>
      <Add />

    </>
  );
};

export default App;