import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Paper, 
  Grid, 
  Button, 
  Divider, 
  IconButton, 
  TextField,
  Card,
  CardContent,
  CardMedia,
  Alert,
  Snackbar
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { useNavigate } from 'react-router-dom';
import './CartPage.css';

// Geometric shapes for the modern art theme
const GeometricShapes = () => (
  <>
    <div className="geometric-shape red" style={{ top: '10%', left: '5%', width: '100px', height: '100px', transform: 'rotate(45deg)' }}></div>
    <div className="geometric-shape blue" style={{ top: '60%', right: '10%', width: '80px', height: '80px', borderRadius: '50%' }}></div>
    <div className="geometric-shape yellow" style={{ bottom: '10%', left: '20%', width: '60px', height: '60px', transform: 'rotate(30deg)' }}></div>
  </>
);

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const navigate = useNavigate();

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      setCartItems(parsedCart);
      calculateTotal(parsedCart);
    }
  }, []);

  // Calculate total price
  const calculateTotal = (items) => {
    const sum = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    setTotal(sum);
  };

  // Update quantity of an item
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    const updatedItems = cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    
    setCartItems(updatedItems);
    calculateTotal(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
  };

  // Remove item from cart
  const removeItem = (id) => {
    const updatedItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedItems);
    calculateTotal(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
  };

  // Handle place order
  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      setSnackbarMessage('Your cart is empty. Please add items before placing an order.');
      setOpenSnackbar(true);
      return;
    }
    
    // Here you would typically send the order to your backend
    // For now, we'll just simulate a successful order
    setOrderPlaced(true);
    setSnackbarMessage('Order placed successfully! Thank you for your purchase.');
    setOpenSnackbar(true);
    
    // Clear the cart
    localStorage.removeItem('cart');
    setCartItems([]);
    setTotal(0);
    
    // Redirect to home page after a delay
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  // Handle WhatsApp contact
  const handleWhatsAppContact = () => {
    // Replace with your actual WhatsApp number
    const phoneNumber = '1234567890';
    const message = `Hello, I'm interested in placing an order for the following items: ${cartItems.map(item => item.name).join(', ')}. Total: $${total.toFixed(2)}`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  // Close snackbar
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4, position: 'relative' }}>
      <GeometricShapes />
      
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 4, position: 'relative', zIndex: 1 }}>
        Your Shopping Cart
      </Typography>
      
      {cartItems.length === 0 ? (
        <Paper 
          elevation={0} 
          sx={{ 
            p: 4, 
            textAlign: 'center', 
            border: '1px solid', 
            borderColor: 'divider',
            position: 'relative',
            zIndex: 1
          }}
        >
          <ShoppingCartIcon sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Your cart is empty
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Looks like you haven't added any products to your cart yet.
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={() => navigate('/')}
            sx={{ 
              py: 1.5,
              px: 4,
              position: 'relative',
              overflow: 'hidden',
              '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
                transform: 'translateX(-100%)',
                transition: 'transform 0.6s ease',
              },
              '&:hover::after': {
                transform: 'translateX(100%)',
              }
            }}
          >
            Continue Shopping
          </Button>
        </Paper>
      ) : (
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: 3, 
                border: '1px solid', 
                borderColor: 'divider',
                position: 'relative',
                zIndex: 1
              }}
            >
              {cartItems.map((item) => (
                <Card 
                  key={item.id} 
                  elevation={0} 
                  sx={{ 
                    mb: 2, 
                    border: '1px solid', 
                    borderColor: 'divider',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                    }
                  }}
                >
                  <Grid container>
                    <Grid item xs={4} sm={3}>
                      <CardMedia
                        component="img"
                        height="140"
                        image={item.image}
                        alt={item.name}
                        sx={{ objectFit: 'cover' }}
                      />
                    </Grid>
                    <Grid item xs={8} sm={9}>
                      <CardContent>
                        <Typography variant="h6" component="div" gutterBottom>
                          {item.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          {item.category || 'Uncategorized'}
                        </Typography>
                        <Typography variant="h6" color="primary" gutterBottom>
                          ${item.price.toFixed(2)}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                          <IconButton 
                            size="small" 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            sx={{ 
                              color: 'primary.main',
                              '&:hover': { backgroundColor: 'rgba(255, 0, 0, 0.1)' }
                            }}
                          >
                            <RemoveIcon fontSize="small" />
                          </IconButton>
                          <TextField
                            value={item.quantity}
                            size="small"
                            sx={{ 
                              width: '40px', 
                              mx: 1,
                              '& .MuiInputBase-input': { 
                                textAlign: 'center',
                                p: 0.5
                              }
                            }}
                            inputProps={{ 
                              readOnly: true,
                              style: { padding: '4px' }
                            }}
                          />
                          <IconButton 
                            size="small" 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            sx={{ 
                              color: 'primary.main',
                              '&:hover': { backgroundColor: 'rgba(255, 0, 0, 0.1)' }
                            }}
                          >
                            <AddIcon fontSize="small" />
                          </IconButton>
                          <IconButton 
                            size="small" 
                            onClick={() => removeItem(item.id)}
                            sx={{ 
                              ml: 'auto',
                              color: 'error.main',
                              '&:hover': { backgroundColor: 'rgba(255, 0, 0, 0.1)' }
                            }}
                          >
                            <DeleteIcon fontSize="small" />
                          </IconButton>
                        </Box>
                      </CardContent>
                    </Grid>
                  </Grid>
                </Card>
              ))}
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: 3, 
                border: '1px solid', 
                borderColor: 'divider',
                position: 'relative',
                zIndex: 1
              }}
            >
              <Typography variant="h6" gutterBottom>
                Order Summary
              </Typography>
              <Divider sx={{ my: 2 }} />
              
              <Box sx={{ mb: 2 }}>
                <Grid container justifyContent="space-between" alignItems="center">
                  <Grid item>
                    <Typography variant="body1">Subtotal:</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body1">${total.toFixed(2)}</Typography>
                  </Grid>
                </Grid>
              </Box>
              
              <Box sx={{ mb: 2 }}>
                <Grid container justifyContent="space-between" alignItems="center">
                  <Grid item>
                    <Typography variant="body1">Shipping:</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body1">Free</Typography>
                  </Grid>
                </Grid>
              </Box>
              
              <Divider sx={{ my: 2 }} />
              
              <Box sx={{ mb: 3 }}>
                <Grid container justifyContent="space-between" alignItems="center">
                  <Grid item>
                    <Typography variant="h6">Total:</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" color="primary.main">${total.toFixed(2)}</Typography>
                  </Grid>
                </Grid>
              </Box>
              
              <Button 
                variant="contained" 
                color="primary" 
                fullWidth 
                size="large"
                startIcon={<LocalShippingIcon />}
                onClick={handlePlaceOrder}
                sx={{ 
                  mb: 2,
                  py: 1.5,
                  position: 'relative',
                  overflow: 'hidden',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
                    transform: 'translateX(-100%)',
                    transition: 'transform 0.6s ease',
                  },
                  '&:hover::after': {
                    transform: 'translateX(100%)',
                  }
                }}
              >
                Place Order
              </Button>
              
              <Button 
                variant="outlined" 
                color="success" 
                fullWidth 
                size="large"
                startIcon={<WhatsAppIcon />}
                onClick={handleWhatsAppContact}
                sx={{ 
                  py: 1.5,
                  borderColor: '#25D366',
                  color: '#25D366',
                  '&:hover': {
                    borderColor: '#128C7E',
                    backgroundColor: 'rgba(37, 211, 102, 0.1)',
                  }
                }}
              >
                Contact Us on WhatsApp
              </Button>
            </Paper>
          </Grid>
        </Grid>
      )}
      
      <Snackbar 
        open={openSnackbar} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={orderPlaced ? "success" : "info"} 
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default CartPage; 