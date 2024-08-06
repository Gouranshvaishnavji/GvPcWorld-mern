import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, InputBase, Box, Button, Container, Card, CardContent, CardMedia } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Topnav from './Components/Topnav';


const Home = () => {


  return (
    <>
      <Topnav />
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