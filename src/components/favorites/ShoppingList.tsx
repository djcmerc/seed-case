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
import { Meal } from '../shared/types/Meals';

const styles = {
  listIcon: {
    bottom: '20px',
    right: '20px',
    backgroundColor: 'white',
    borderRadius: '50%'
  },
  cartWindow: {
    width: '35vw',
    height: '90vh',
    maxWidth: 'none'
  }
};

const ShoppingList = () => {
  const userCtx = React.useContext(UserContext);
  const [open, setOpen] = React.useState(false);
  const [shoppingList, setShoppingList] = React.useState<Meal[]>(
    userCtx.shoppingList
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const mealDeleteHandler = (mealName: string) => {
    const filteredShoppingList = userCtx.shoppingList.filter(
      (meal) => meal.strMeal !== mealName
    );
    userCtx.shoppingList = filteredShoppingList;
    setShoppingList(filteredShoppingList);
  };

  const listMeals: string[] = userCtx.shoppingList.map((meal) => {
    return meal.strMeal;
  });
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
        {shoppingList.length > 0 && (
          <>
            <MealNamesContainer
              mealNames={listMeals}
              mealChipDelete={mealDeleteHandler}
            />
            <IngredientsContainer meals={shoppingList} />
          </>
        )}
        {shoppingList.length === 0 && (
          <Box display="flex" justifyContent="center" pt={35}>
            <Typography fontStyle="italic">No meals found.</Typography>
          </Box>
        )}
      </Dialog>
    </>
  );
};

export default ShoppingList;
