import React from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import TopNav from '../Components/TopNav/TopNav';

const LoginPage = () => {
  const handleGoogleLogin = () => {
    // Connect to the backend's Google OAuth endpoint
    window.location.href = 'http://localhost:4000/auth/google';
  };

  return (
    <> 
    <TopNav />
    
    <div style={{
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh', 
      background: '#f4f4f4'
    }}>
      <Card style={{ width: 400, padding: '20px', textAlign: 'center' }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Login
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={handleGoogleLogin} 
            startIcon={<Google />}
            style={{ textTransform: 'none' }}
          >
            Login with Google
          </Button>
        </CardContent>
      </Card>
    </div>
     </>
    
  );
};

export default LoginPage;

