import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, InputBase, Box, IconButton, Avatar, Menu, MenuItem, Badge } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import LogoutIcon from '@mui/icons-material/Logout';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import axios from 'axios';
import { useCart } from '../../context/CartContext';
import './TopNav.css';

const TopNav = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();
    const { toggleCart, getItemCount } = useCart();

    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const response = await axios.get('http://localhost:4000/login/success', {
                    withCredentials: true
                });
                
                if (response.data.success) {
                    setIsLoggedIn(true);
                    setUser(response.data.user);
                } else {
                    setIsLoggedIn(false);
                }
            } catch (err) {
                console.error('Error checking login status:', err);
                setIsLoggedIn(false);
            }
        };

        checkLoginStatus();
    }, []);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = async () => {
        try {
            await axios.post('http://localhost:4000/logout', {}, {
                withCredentials: true
            });
            setIsLoggedIn(false);
            setUser(null);
            handleMenuClose();
            navigate('/');
        } catch (err) {
            console.error('Error logging out:', err);
        }
    };

    return (
        <AppBar position="static" className="top-nav">
            <Toolbar className="nav-toolbar">
                {/* Logo */}
                <Typography variant="h6" component={Link} to="/" className="logo-link">
                    GvPcWorld
                </Typography>

                {/* Search Bar */}
                <Box className="search-bar">
                    <SearchIcon className="search-icon" />
                    <InputBase placeholder="Search…" className="search-input" />
                </Box>

                {/* Navigation Links */}
                <Box className="nav-links">
                    <IconButton component={Link} to="/about-us" className="nav-item">
                        <InfoIcon />
                    </IconButton>
                    
                    {isLoggedIn ? (
                        <>
                            <IconButton onClick={toggleCart} className="nav-item">
                                <Badge badgeContent={getItemCount()} color="primary">
                                    <ShoppingCartIcon />
                                </Badge>
                            </IconButton>
                            <IconButton 
                                component={Link} 
                                to="/cart-page" 
                                className="nav-item"
                                sx={{ ml: 1 }}
                            >
                                <LocalShippingIcon />
                            </IconButton>
                            <IconButton 
                                onClick={handleMenuOpen} 
                                className="nav-item"
                                sx={{ p: 0 }}
                            >
                                <Avatar 
                                    src={user?.ownerImg && user.ownerImg[0]} 
                                    alt={user?.name}
                                    sx={{ width: 32, height: 32 }}
                                />
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleMenuClose}
                            >
                                <MenuItem 
                                    component={Link} 
                                    to="/dashboard" 
                                    onClick={handleMenuClose}
                                >
                                    Dashboard
                                </MenuItem>
                                <MenuItem onClick={handleLogout}>
                                    <LogoutIcon fontSize="small" sx={{ mr: 1 }} />
                                    Logout
                                </MenuItem>
                            </Menu>
                        </>
                    ) : (
                        <IconButton component={Link} to="/login" className="nav-item">
                            <PersonIcon />
                        </IconButton>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default TopNav;
