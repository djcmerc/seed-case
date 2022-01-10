import ListAltIcon from '@mui/icons-material/ListAlt';
import CloseIcon from '@mui/icons-material/Close';
import {
  AppBar,
  Box,
  Button,
  Dialog,
  IconButton,
  Toolbar,
  Typography
} from '@mui/material';
import React from 'react';
import MealNamesContainer from './MealNamesContainer';
import IngredientsContainer from './IngredientsContainer';
import UserContext from '../../store/UserContext';

const styles = {
  listIcon: {
    bottom: '20px',
    right: '20px',
    backgroundColor: 'white',
    borderRadius: '50%'
  },
  cartWindow: {
    width: '50vw',
    height: '90vh',
    maxWidth: 'none'
  }
};

const ShoppingList = () => {
  const userCtx = React.useContext(UserContext);
  const listMeals: string[] = userCtx.shoppingList.map((meal) => {
    return meal.strMeal;
  });
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
      <Dialog
        PaperProps={{ sx: styles.cartWindow }}
        open={open}
        onClose={handleClose}
      >
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
        <MealNamesContainer mealNames={listMeals} />
        <IngredientsContainer />
      </Dialog>
    </>
  );
};

export default ShoppingList;
