import ListAltIcon from '@mui/icons-material/ListAlt';
import CloseIcon from '@mui/icons-material/Close';
import {
  AppBar,
  Box,
  Button,
  Dialog,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography
} from '@mui/material';
import React from 'react';

const styles = {
  listIcon: {
    bottom: '20px',
    right: '20px',
    backgroundColor: 'white',
    borderRadius: '50%'
  }
};

const ShoppingList = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box position="fixed" sx={styles.listIcon}>
        <IconButton size="large" color="primary" onClick={handleClickOpen}>
          <ListAltIcon />
        </IconButton>
      </Box>
      <Dialog fullScreen open={open} onClose={handleClose}>
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Shopping List
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem>
            <ListItemText primary="Test Meal Name" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="Test Meal Name" />
          </ListItem>
        </List>
      </Dialog>
    </>
  );
};

export default ShoppingList;