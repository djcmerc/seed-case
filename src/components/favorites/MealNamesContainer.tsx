import { Box, Chip, Stack, Typography } from '@mui/material';
import React from 'react';
import UserContext from '../../store/UserContext';

interface MealNamesContainerProps {
  mealNames: string[];
}
const MealNamesContainer = ({ mealNames }: MealNamesContainerProps) => {
  const userCtx = React.useContext(UserContext);
  const [meals, setMeals] = React.useState<string[]>(mealNames);

  const mealDeleteHandler = (mealName: string) => {
    const filteredShoppingList = userCtx.shoppingList.filter(
      (meal) => meal.strMeal !== mealName
    );
    userCtx.shoppingList = filteredShoppingList;
    const newMealNames = filteredShoppingList.map((meal) => {
      return meal.strMeal;
    });
    setMeals(newMealNames);
  };
  return (
    <>
      <Box display="flex" flexDirection="column" m={2}>
        <Box display="flex" justifyContent="center">
          <Typography variant="h5" component="div">
            Meals
          </Typography>
        </Box>
        <Box mt={1} p={1} display="flex" justifyContent="center">
          <Stack flexWrap="wrap" direction="row" justifyContent="center">
            {meals.map((mealName) => {
              return (
                <Chip
                  label={mealName}
                  variant="outlined"
                  onDelete={() => mealDeleteHandler(mealName)}
                />
              );
            })}
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default MealNamesContainer;
