// ProductCard.js
import React, { useState } from 'react';
import { 
  Card, 
  CardMedia, 
  CardContent, 
  Typography, 
  Button, 
  Box,
  IconButton,
  Tooltip
} from '@mui/material';
import { Favorite, FavoriteBorder, ShoppingCart } from '@mui/icons-material';
import { useCart } from '../../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product = {} }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { addToCart } = useCart();

  // If product is undefined or missing required properties, show a placeholder
  if (!product || !product.image || !product.name) {
    return (
      <Card className="product-card" sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', p: 2 }}>
        <Typography variant="body1" color="text.secondary">
          Product information not available
        </Typography>
      </Card>
    );
  }

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Card className="product-card">
      {/* Geometric shapes */}
      <Box className="geometric-shape" sx={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100px',
        height: '100px',
        background: 'linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%)',
        clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
        opacity: 0.1,
      }} />
      <Box className="geometric-shape" sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '80px',
        height: '80px',
        background: 'linear-gradient(135deg, #a8e6cf 0%, #dcedc1 100%)',
        clipPath: 'polygon(0 100%, 0 0, 100% 100%)',
        opacity: 0.1,
      }} />

      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt={product.name}
          sx={{
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        />
        <Tooltip title={isFavorite ? "Remove from favorites" : "Add to favorites"}>
          <IconButton
            className="favorite-button"
            onClick={handleFavoriteClick}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
              },
            }}
          >
            {isFavorite ? <Favorite color="error" /> : <FavoriteBorder />}
          </IconButton>
        </Tooltip>
      </Box>

      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {product.category || 'Uncategorized'}
        </Typography>
        <Typography variant="h6" color="primary" gutterBottom>
          ${product.price || '0.00'}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          mb: 2,
        }}>
          {product.description || 'No description available'}
        </Typography>
        <Button
          variant="contained"
          startIcon={<ShoppingCart />}
          onClick={handleAddToCart}
          fullWidth
          sx={{
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            color: 'white',
            '&:hover': {
              background: 'linear-gradient(45deg, #1976D2 30%, #1CB5E0 90%)',
            },
          }}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;