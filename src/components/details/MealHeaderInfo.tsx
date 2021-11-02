import { Box, Divider, IconButton, Paper, Typography } from '@mui/material';
import { FavoriteBorder } from '@mui/icons-material';
import { Meal } from '../shared/types/Meals';

const detailsStyles = {
  mealHeader: {
    display: 'flex',
    justifyContent: 'center',
    py: 1
  },
  mealInfo: {
    p: 1,
    width: '40vw',
    display: 'flex',
    'flex-direction': 'column'
  },
  favIcon: {
    top: '15px',
    left: '15px',
    backgroundColor: 'white',
    borderRadius: '50%'
  }
};

interface IngredientDetails {
  ingredient: string;
  measurementVal: string | null;
}

interface MealHeaderInfoProps {
  meal: Meal | undefined;
}
const MealHeaderInfo = ({ meal }: MealHeaderInfoProps) => {
  const ingredients: IngredientDetails[] = [];
  if (meal) {
    for (const [key, value] of Object.entries(meal)) {
      if (key.includes('strIngredient') && value !== '') {
        const ingredient: string = value;
        const measurementKey: keyof Meal = key.replace(
          'Ingredient',
          'Measure'
        ) as keyof Meal;
        const measurementValue = meal[measurementKey];
        ingredients.push({
          ingredient: ingredient,
          measurementVal: measurementValue
        });
      }
    }
  }

  return (
    <>
      <Box sx={detailsStyles.mealHeader}>
        <Box position="relative">
          <Box
            component="img"
            sx={{ maxWidth: '45vw', maxHeight: 500 }}
            alt={meal?.strMeal}
            src={meal?.strMealThumb}
            mr={2}
          ></Box>
          <Box position="absolute" sx={detailsStyles.favIcon}>
            <IconButton size="small" color="primary">
              <FavoriteBorder />
            </IconButton>
          </Box>
        </Box>
        <Paper sx={detailsStyles.mealInfo} elevation={5}>
          <Box display="flex" justifyContent="center" p={1}>
            <Typography variant="h4">{meal?.strMeal}</Typography>
          </Box>
          <Box display="flex" justifyContent="center" p={1}>
            <Box mr={1}>
              <Typography variant="subtitle1">Area: {meal?.strArea}</Typography>
            </Box>
            <Box ml={1}>
              <Typography variant="subtitle1">
                Category: {meal?.strCategory}
              </Typography>
            </Box>
          </Box>
          <Divider light={true} />
          <Box display="flex" flexDirection="column" px={15} py={1}>
            <Box display="flex" justifyContent="center" border={1} mb={1}>
              <Typography variant="h5">Ingredients</Typography>
            </Box>
            {ingredients?.map((ingredient, index) => {
              return (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  key={
                    ingredient.ingredient + ingredient.measurementVal + index
                  }
                >
                  <Box>
                    <Typography>{ingredient.ingredient}:</Typography>
                  </Box>
                  <Box>
                    <Typography fontWeight="bold">
                      {ingredient.measurementVal}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default MealHeaderInfo;
