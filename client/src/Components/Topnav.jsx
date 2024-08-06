̥ 
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, InputBase, Box, Button, Container, Card, CardContent, CardMedia } from '@mui/material';

function Topnav() {
  return (
    
    <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Logo
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Box display="flex" alignItems="center">
          <SearchIcon />
          <InputBase placeholder="Search…" sx={{ ml: 1, flex: 1 }} />
        </Box>
      </Box>
      <Button color="inherit" component={Link} to="/about-us">About Us</Button>
      <Button color="inherit" component={Link} to="/login">Login/Signup</Button>
      <Button color="inherit">Cart</Button>
    </Toolbar>
  </AppBar>

  )
}


export default Topnav