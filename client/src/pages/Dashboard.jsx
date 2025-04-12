import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Paper, 
  Grid, 
  Avatar, 
  Divider,
  Card,
  CardContent,
  Button
} from '@mui/material';
import TopNav from '../Components/TopNav/TopNav';
import axios from 'axios';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Fetch user data from the backend
        const response = await axios.get('http://localhost:4000/login/success', {
          withCredentials: true
        });
        
        if (response.data.success) {
          setUser(response.data.user);
        } else {
          setError('Failed to load user data');
        }
      } catch (err) {
        setError('Error connecting to server');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return (
      <>
        <TopNav />
        <Container sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="h5">Loading your dashboard...</Typography>
        </Container>
      </>
    );
  }

  if (error) {
    return (
      <>
        <TopNav />
        <Container sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="h5" color="error">{error}</Typography>
          <Button 
            variant="contained" 
            color="primary" 
            sx={{ mt: 2 }}
            onClick={() => window.location.href = '/login'}
          >
            Go to Login
          </Button>
        </Container>
      </>
    );
  }

  if (!user) {
    return (
      <>
        <TopNav />
        <Container sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="h5">Please log in to view your dashboard</Typography>
          <Button 
            variant="contained" 
            color="primary" 
            sx={{ mt: 2 }}
            onClick={() => window.location.href = '/login'}
          >
            Go to Login
          </Button>
        </Container>
      </>
    );
  }

  return (
    <>
      <TopNav />
      <Container sx={{ mt: 4, mb: 4 }}>
        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item>
              <Avatar 
                src={user.ownerImg && user.ownerImg[0]} 
                alt={user.name}
                sx={{ width: 100, height: 100 }}
              />
            </Grid>
            <Grid item xs>
              <Typography variant="h4">{user.name}</Typography>
              <Typography variant="body1" color="text.secondary">{user.username}</Typography>
              <Typography variant="body2" color="text.secondary">
                Member since: {new Date(user.createdAt).toLocaleDateString()}
              </Typography>
            </Grid>
          </Grid>
        </Paper>

        <Typography variant="h5" sx={{ mb: 2 }}>Your Activity</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Recent Orders</Typography>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="body1">No recent orders</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Saved Items</Typography>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="body1">No saved items</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard; 