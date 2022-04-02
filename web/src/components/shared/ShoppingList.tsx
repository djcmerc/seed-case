import ListAltIcon from '@mui/icons-material/ListAlt';
import CloseIcon from '@mui/icons-material/Close';
import {
  AppBar,
  Badge,
  Box,
  Button,
  Dialog,
  IconButton,
  Toolbar,
  Typography
} from '@mui/material';
import React from 'react';
import MealNamesContainer from '../favorites/MealNamesContainer';
import IngredientsContainer from '../favorites/IngredientsContainer';
import UserContext from '../../store/UserContext';

const styles = {
  cartWindow: {
    width: '35vw',
    height: '90vh',
    maxWidth: 'none'
  }
};

const ShoppingList = () => {
  const userCtx = React.useContext(UserContext);
  const [open, setOpen] = React.useState(false);

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
    userCtx.setShoppingList(filteredShoppingList);
  };

  const listMeals: string[] = userCtx.shoppingList.map((meal) => {
    return meal.strMeal;
  });
  return (
    <>
      <IconButton size="large" color="inherit" onClick={handleClickOpen}>
        <Badge badgeContent={userCtx.shoppingList.length} color="secondary">
          <ListAltIcon />
        </Badge>
      </IconButton>
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
        {userCtx.shoppingList.length > 0 && (
          <>
            <MealNamesContainer
              mealNames={listMeals}
              mealChipDelete={mealDeleteHandler}
            />
            <IngredientsContainer meals={userCtx.shoppingList} />
          </>
        )}
        {userCtx.shoppingList.length === 0 && (
          <Box display="flex" justifyContent="center" pt={35}>
            <Typography fontStyle="italic">No meals found.</Typography>
          </Box>
        )}
      </Dialog>
    </>
  );
};

export default ShoppingList;
