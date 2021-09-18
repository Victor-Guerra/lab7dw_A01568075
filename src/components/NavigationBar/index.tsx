import {
    AppBar,
    Toolbar, 
    IconButton, 
    Typography
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import './index.css';

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