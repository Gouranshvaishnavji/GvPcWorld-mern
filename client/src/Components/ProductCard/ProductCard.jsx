import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';

const ProductCard = ({ image, title, description, price }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Card
      sx={{
        maxWidth: 345,
        m: 2,
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 12px 20px rgba(0, 0, 0, 0.2)',
        },
        borderRadius: 2,
        overflow: 'hidden',
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={image || '/processor.png'}
        alt={title || 'PC Build'}
        loading="lazy"
        onLoad={() => setImageLoaded(true)}
        sx={{
          objectFit: 'cover',
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant={isMobile ? 'h6' : 'h5'}
          component="h2"
          sx={{
            fontWeight: 600,
            color: theme.palette.primary.main,
          }}
        >
          {title || 'Custom PC Build'}
        </Typography>
        {description && (
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            {description}
          </Typography>
        )}
        {price && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              mt: 2,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: theme.palette.secondary.main,
              }}
            >
              ₹{price.toLocaleString()}
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductCard; 