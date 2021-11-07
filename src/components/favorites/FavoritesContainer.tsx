import { Box } from '@mui/material';
import React from 'react';
import UserContext from '../../store/UserContext';
import FavoriteCard from './FavoritesCard';

const FavoritesContainer = () => {
  const userCtx = React.useContext(UserContext);
  //const [favorites, setFavorites] = React.useState<BasicMealInfo[]>([]);
  //const [isPageLoaded, setIsPageLoaded] = React.useState<boolean>(false);
  //const [mealsLoaded, setMealsLoaded] = React.useState<boolean>(false);

  return (
    <Box display="flex" justifyContent="center" flexWrap="wrap">
      {userCtx.favorites.map((meal) => {
        return (
          <Box key={meal.idMeal} m={1}>
            <FavoriteCard mealInfo={meal} />
          </Box>
        );
      })}
    </Box>
  );
};

export default FavoritesContainer;
