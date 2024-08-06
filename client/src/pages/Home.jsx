import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, InputBase, Box, Button, Container, Card, CardContent, CardMedia } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Home = () => {
  const handleSpecificationClick = () => {
    // Handle specification modal opening
  };

  return (
    <>
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

      <Container>
        <Box display="flex" flexWrap="wrap" justifyContent="space-around" my={4}>
          {[...Array(10)].map((_, index) => (
            <Card key={index} sx={{ width: '20vw', height: '29vh', m: 1 }}>
              <CardMedia
                component="img"
                height="199"
                image="https://via.placeholder.com/150"
                alt="PC Image"
              />
              <CardContent>
                <Button variant="outlined" onClick={handleSpecificationClick}>Specifications</Button>
              </CardContent>
            </Card>
          ))}
        </Box>

        <Box display="flex" justifyContent="center" my={4}>
          <Button variant="contained" color="primary" component={Link} to="/custom-pc">
            Customize PC
          </Button>
        </Box>
      </Container>

      <Box component="footer" sx={{ textAlign: 'center', py: 2, mt: 4, backgroundColor: '#f5f5f5' }}>
        <Typography variant="body1">Made by Gouransh</Typography>
      </Box>
    </>
  );
};

export default Home;