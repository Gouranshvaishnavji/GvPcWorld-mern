// ProductCard.js
// import React from "react";
import {Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

const ProductCard = ({ image, onSpecificationClick }) => {
  return (
    <Card sx={{ maxWidth: 345, m: 2, backgroundColor: "rgba(0, 0, 0, 0.8)", color: "#FFFFFF" }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="Product image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ color: "#00E5FF" }}>
          Product Name
        </Typography>
        <Typography variant="body2" sx={{ color: "#E0E0E0" }}>
          Description of the product goes here. It`s brief but informative.
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
          size="small" 
          onClick={onSpecificationClick} 
          sx={{ color: "#00E5FF" }}
        >
          Specifications
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;