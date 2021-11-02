import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Typography
} from '@mui/material';
import { FavoriteBorder } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { BasicMealInfo } from './types/Meals';
import { Link } from 'react-router-dom';
import React, { useCallback } from 'react';
import UserContext from '../../store/UserContext';

interface MealCardProps {
  mealData: BasicMealInfo;
}

const styles = {
  favIcon: {
    bottom: '10px',
    right: '10px',
    backgroundColor: 'white',
    borderRadius: '50%'
  }
};
const MealCard = ({ mealData }: MealCardProps) => {
  const userCtx = React.useContext(UserContext);
  const [isFavorited, setIsFavorited] = React.useState<boolean>(false);

  const onFavoriteClickHandler = () => {
    if (
      !userCtx.favorites.some((favorite) => favorite.idMeal === mealData.idMeal)
    ) {
      userCtx.favorites.push(mealData);
      setIsFavorited(true);
    } else {
      const filteredFavorites = userCtx.favorites.filter(
        (meal) => meal.idMeal !== mealData.idMeal
      );
      userCtx.favorites = filteredFavorites;
      setIsFavorited(false);
    }
  };

  const inFavoritesContext = useCallback(() => {
    if (
      userCtx.favorites.some((favorite) => favorite.idMeal === mealData.idMeal)
    ) {
      setIsFavorited(true);
    }
  }, [mealData.idMeal, userCtx.favorites]);

  React.useEffect(() => {
    inFavoritesContext();
  }, [inFavoritesContext]);

  return (
    <Card>
      <Box sx={{ width: 300, height: 280 }}>
        <Box position="relative">
          <CardActionArea
            component={Link}
            to={`/meals/details/${mealData.idMeal}`}
          >
            <CardMedia
              component="img"
              height="150"
              image={mealData.strMealThumb}
            />
          </CardActionArea>
          <Box position="absolute" sx={styles.favIcon}>
            <IconButton
              size="small"
              color="primary"
              onClick={onFavoriteClickHandler}
            >
              {!isFavorited && <FavoriteBorder />}
              {isFavorited && <FavoriteIcon />}
            </IconButton>
          </Box>
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {mealData.strMeal}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default MealCard;
