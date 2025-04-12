// Home.js
// import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Container, Typography } from "@mui/material";
import TopNav from "../Components/TopNav/TopNav";
import ProductCard from "../Components/ProductCard/ProductCard";
// import Footer from "../Components/Footer/Footer";

const Home = () => {
  const handleSpecificationClick = () => {
    console.log("Specifications button clicked");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        color: "#FFFFFF",
      }}
    >
      <TopNav />
      <Container sx={{ pt: 4 }}>
        <Box
          sx={{
            textAlign: "center",
            padding: "2rem",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            borderRadius: "10px",
            marginBottom: "2rem",
          }}
        >
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", mb: 2, color: "#00E5FF" }}
          >
            Build Your Dream PC
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#E0E0E0" }}>
            Customize and pick parts for the ultimate performance and design!
          </Typography>
        </Box>

        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="space-around"
          my={4}
        >
          {[...Array(3)].map((_, index) => (
            <ProductCard
              key={index}
              image="https://i.gadgets360cdn.com/large/mvp_pc_build_1604313319165.jpg"
              onSpecificationClick={handleSpecificationClick}
            />
          ))}
        </Box>

        <Box display="flex" justifyContent="center" my={4}>
          <Button
            variant="contained"
            component={Link}
            to="/custom-pc"
            sx={{
              background: "linear-gradient(45deg, #ff4081, #ff80ab)",
              color: "#fff",
              fontWeight: "bold",
              padding: "0.8rem 2rem",
              fontSize: "1rem",
              "&:hover": {
                background: "linear-gradient(45deg, #f50057, #ff4081)",
              },
            }}
          >
            Customize Your PC
          </Button>
        </Box>
      </Container>
      {/* <Footer /> */}
    </Box>
  );
};

export default Home;