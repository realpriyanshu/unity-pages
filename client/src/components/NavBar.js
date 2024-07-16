
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

// Custom styles for the NavBar
const CustomAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: '#1E2A38', // Dark background color
    boxShadow: 'none', // Remove box shadow
}));

const TitleTypography = styled(Typography)(({ theme }) => ({
    flexGrow: 1,
    fontFamily: 'Roboto, sans-serif', // Custom font
    fontWeight: 'bold',
    fontSize: '1.5rem',
    color: '#FFFFFF', // White font color
    textAlign: 'center',
}));

const NavBar = () => {
    return (
        <CustomAppBar position="static">
            <Toolbar>
                <TitleTypography variant="h6">
                <Button
                        color="inherit"
                        
                     
                        sx={{
                            fontFamily: 'Roboto, sans-serif',
                            fontWeight: 'bold',
                            fontSize: '1rem',
                            marginRight: 2,
                            '&:hover': {
                                backgroundColor: '#2E3B4E', // Darker background on hover
                            },
                        }}
                    >
                       UnityPages
                    </Button>
                  
                </TitleTypography>
                <Box sx={{ marginLeft: 2 }}>
                    
                    <Button
                        color="inherit"
                        component={Link}
                        to="/about"
                        sx={{
                            fontFamily: 'Roboto, sans-serif',
                            fontWeight: 'bold',
                            fontSize: '1rem',
                            marginRight: 2,
                            '&:hover': {
                                backgroundColor: '#2E3B4E', // Darker background on hover
                            },
                        }}
                    >
                        About
                    </Button>
                </Box>
            </Toolbar>
        </CustomAppBar>
    );
};

export default NavBar;