import {
    AppBar,
    Toolbar, 
    IconButton, 
    Typography
} from "@material-ui/core";
import {Link} from "react-router-dom";
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
    <Link to="/" className="unstylizedLink">
    <Typography variant="h6" color="inherit" component="div">
      ChambaSoft Store
    </Typography>
    </Link>
  </Toolbar>
</AppBar>
  )
}

export default NavigationBar;