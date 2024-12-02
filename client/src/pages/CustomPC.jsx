import { useState } from "react";
import { Box, Button, Container, Typography, Grid, MenuItem, Select } from "@mui/material";

const componentsList = {
  Processor: {
    "Intel i9": { price: 50000 },
    "AMD Ryzen 9": { price: 45000 },
  },
  RAM: {
    "16GB DDR4": { price: 7000 },
    "32GB DDR4": { price: 12000 },
  },
  Mouse: {
    "Logitech MX Master": { price: 10000 },
    "Razer DeathAdder": { price: 8000 },
  },
  Keyboard: {
    "Mechanical Keyboard": { price: 15000 },
    "Membrane Keyboard": { price: 6000 },
  },
};

const CustomPC = () => {
  const [selectedComponents, setSelectedComponents] = useState({});
  const [currentComponentType, setCurrentComponentType] = useState("");
  const [currentComponent, setCurrentComponent] = useState("");
  const [quantities, setQuantities] = useState({});

  const handleAddComponent = () => {
    if (currentComponentType && currentComponent) {
      const componentPrice = componentsList[currentComponentType][currentComponent].price;

      // If the component is already in the selected list, increase the quantity
      setSelectedComponents((prev) => ({
        ...prev,
        [currentComponentType]: {
          category: currentComponentType,
          component: currentComponent,
          price: componentPrice,
        },
      }));

      // Reset the quantity for the current component to 1
      setQuantities((prev) => ({
        ...prev,
        [currentComponentType]: 1,
      }));

      setCurrentComponentType("");
      setCurrentComponent("");
    } else {
      alert("Please select both component type and component.");
    }
  };

  const handleQuantityChange = (componentType, operation) => {
    setQuantities((prev) => {
      const currentQty = prev[componentType] || 1;
      const newQty = operation === "increase" ? currentQty + 1 : Math.max(currentQty - 1, 1); // Ensure it doesn't go below 1
      return { ...prev, [componentType]: newQty };
    });
  };

  // Calculate the total price of all selected components
  const calculateTotalPrice = () => {
    return Object.values(selectedComponents).reduce((total, component) => {
      return total + (component.price * (quantities[component.category] || 1))
    }, 0);
  };
  return (
    <Box sx={{ minHeight: "100vh", background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)", color: "#FFFFFF" }}>
      <Container sx={{ pt: 4 }}>
        <Box sx={{ textAlign: "center", padding: "2rem", backgroundColor: "rgba(0, 0, 0, 0.7)", borderRadius: "10px", marginBottom: "2rem" }}>
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2, color: "#00E5FF" }}>
            Customize Your PC
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#E0E0E0" }}>
            Select and add components to build your dream PC.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ backgroundColor: "rgba(0, 0, 0, 0.7)", borderRadius: "10px", padding: "2rem" }}>
              <Typography variant="h5" sx={{ color: "#00E5FF", mb: 2 }}>
                Current PC Status
              </Typography>
              <Box>
                {Object.keys(selectedComponents).length === 0 ? (
                  <Typography variant="body1" sx={{ color: "#E0E0E0" }}>
                    No components added yet.
                  </Typography>
                ) : (
                  Object.entries(selectedComponents).map(([key, value]) => (
                    <Box key={key} sx={{ marginBottom: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <Typography variant="body1" sx={{ color: "#E0E0E0" }}>
                        {key}: {value.component} - ₹{value.price} x {quantities[key] || 1}
                      </Typography>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Button
                          variant="contained"
                          onClick={() => handleQuantityChange(key, "increase")}
                          sx={{ background: "#00E5FF", color: "#fff", marginRight: "1rem", "&:hover": { background: "#00B8D4" } }}
                        >
                          +
                        </Button>
                        <Button
                          variant="contained"
                          onClick={() => handleQuantityChange(key, "decrease")}
                          sx={{ background: "#00E5FF", color: "#fff", "&:hover": { background: "#00B8D4" } }}
                        >
                          -
                        </Button>
                      </Box>
                    </Box>
                  ))
                )}
              </Box>
            </Box>

            {/* Total Price Box */}
            <Box sx={{ backgroundColor: "rgba(0, 0, 0, 0.7)", borderRadius: "10px", padding: "1rem", marginTop: "2rem" }}>
              <Typography variant="h5" sx={{ color: "#00E5FF", mb: 2 }}>
                Total: ₹{calculateTotalPrice()}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ backgroundColor: "rgba(0, 0, 0, 0.7)", borderRadius: "10px", padding: "2rem" }}>
              <Typography variant="h5" sx={{ color: "#00E5FF", mb: 2 }}>
                Add Component
              </Typography>
              <Box mb={2}>
                <Select
                  fullWidth
                  value={currentComponentType}
                  onChange={(e) => setCurrentComponentType(e.target.value)}
                  displayEmpty
                  sx={{ color: "#FFFFFF" }}
                >
                  <MenuItem value="" disabled>
                    Select Component Type
                  </MenuItem>
                  {Object.keys(componentsList).map((type) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </Select>
              </Box>
              <Box mb={2}>
                <Select
                  fullWidth
                  value={currentComponent}
                  onChange={(e) => setCurrentComponent(e.target.value)}
                  displayEmpty
                  disabled={!currentComponentType}
                  sx={{ color: "#FFFFFF" }}
                >
                  <MenuItem value="" disabled>
                    Select Component
                  </MenuItem>
                  {currentComponentType &&
                    Object.entries(componentsList[currentComponentType]).map(([component, { price }]) => (
                      <MenuItem key={component} value={component}>
                        {component} - ₹{price}
                      </MenuItem>
                    ))}
                </Select>
              </Box>
              <Button
                variant="contained"
                onClick={handleAddComponent}
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
                Add Component
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CustomPC;