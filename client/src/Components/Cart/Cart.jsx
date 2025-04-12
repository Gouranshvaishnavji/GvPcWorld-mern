import React, { useState, useEffect } from 'react';
import { 
  Drawer, 
  Box, 
  Typography, 
  IconButton, 
  Divider, 
  Button, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemSecondaryAction,
  TextField,
  Paper,
  Grid,
  Badge
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// Geometric shapes for the modern art theme
const GeometricShapes = () => (
  <>
    <div className="geometric-shape red" style={{ top: '10%', left: '5%', width: '100px', height: '100px', transform: 'rotate(45deg)' }}></div>
    <div className="geometric-shape blue" style={{ top: '60%', right: '10%', width: '80px', height: '80px', borderRadius: '50%' }}></div>
    <div className="geometric-shape yellow" style={{ bottom: '10%', left: '20%', width: '60px', height: '60px', transform: 'rotate(30deg)' }}></div>
  </>
);

const Cart = ({ open, onClose }) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

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
  

  // Handle checkout
  const handleCheckout = () => {
    // Navigate to the cart page
    window.location.href = '/cart-page';
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: { xs: '100%', sm: 400 },
          backgroundColor: 'background.paper',
          position: 'relative',
          overflow: 'hidden',
        }
      }}
    >
      <GeometricShapes />
      
      <Box sx={{ p: 2, position: 'relative', zIndex: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
            Your Cart
          </Typography>
          <IconButton onClick={onClose} aria-label="close cart">
            <CloseIcon />
          </IconButton>
        </Box>
        
        <Divider sx={{ mb: 2 }} />
        
        {cartItems.length === 0 ? (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <ShoppingCartIcon sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
            <Typography variant="h6" color="text.secondary">
              Your cart is empty
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              sx={{ mt: 2 }}
              onClick={onClose}
            >
              Continue Shopping
            </Button>
          </Box>
        ) : (
          <>
            <List sx={{ mb: 2 }}>
              {cartItems.map((item) => (
                <Paper 
                  key={item.id} 
                  elevation={0} 
                  sx={{ 
                    mb: 2, 
                    p: 2, 
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
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={3}>
                      <Box 
                        component="img" 
                        src={item.image} 
                        alt={item.name}
                        sx={{ 
                          width: '100%', 
                          height: 'auto',
                          objectFit: 'cover',
                          border: '2px solid',
                          borderColor: 'primary.main'
                        }}
                      />
                    </Grid>
                    <Grid item xs={9}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                        {item.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        ${item.price.toFixed(2)}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
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
                    </Grid>
                  </Grid>
                </Paper>
              ))}
            </List>
            
            <Divider sx={{ mb: 2 }} />
            
            <Box sx={{ mb: 2 }}>
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
              onClick={handleCheckout}
              sx={{ 
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
              Checkout
            </Button>
          </>
        )}
      </Box>
    </Drawer>
  );
};

export default Cart; 