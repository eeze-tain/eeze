import React from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <Box
      sx={{
        width: '240px',
        height: '100vh',
        position: 'sticky',
        top: 0,
        backgroundColor: '#f5f5f5',
        boxShadow: 1,
      }}
    >
      <Typography variant="h6" sx={{ p: 2 }}>
        My App
      </Typography>
      <List>
        {/* @ts-expect-error */}
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        {/* @ts-expect-error */}
        <ListItem button component={Link} to="/about">
          <ListItemText primary="About" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Navbar;