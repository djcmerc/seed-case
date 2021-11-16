import { Box, Typography } from '@mui/material';
import React from 'react';
import UserContext from '../../store/UserContext';
import MealCard from '../explore/MealCard';

const FavoritesContainer = () => {
  const userCtx = React.useContext(UserContext);

  return (
    <Box display="flex" justifyContent="center" flexWrap="wrap">
      {userCtx.favorites.map((meal) => {
        return (
          <Box key={meal.idMeal} m={1}>
            <MealCard mealData={meal} />
          </Box>
        );
      })}
      {userCtx.favorites.length === 0 && (
        <Typography fontStyle="italic">No favorites found.</Typography>
      )}
    </Box>
  );
};

export default FavoritesContainer;
