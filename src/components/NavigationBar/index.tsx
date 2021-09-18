import {
    AppBar,
    Toolbar, 
    IconButton, 
    Typography
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import './index.css';


/**
 * Contains the HTML markup for the Navigation Bar
 * @returns {string} - HTML markup for the Navigation Bar UI Elements
 */
const NavigationBar=()=>{
  return (
<AppBar position="static" className="navBar-color">
  <Toolbar variant="dense">
    <IconButton>
      <MenuIcon/>
    </IconButton>
    <Typography variant="h6" color="inherit" component="div">
      ChambaSoft Store
    </Typography>
  </Toolbar>
</AppBar>
  )
}

export default NavigationBar;