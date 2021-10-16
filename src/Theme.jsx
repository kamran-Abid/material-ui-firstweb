import { createTheme } from "@material-ui/core";
import {blue, grey} from "@material-ui/core/colors";

export const theme = createTheme({
    palette:{
        primary: {
            // main: blue[50]
            main: '#00a'
        }
    },
    myButton:{
        backgroundColor: 'red',
        color: 'white',
        border: '1px solid black'
    }
})