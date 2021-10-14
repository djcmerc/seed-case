import { Box } from '@mui/material';
import React from 'react';
import MealCard from '../shared/MealCard';
import { Meal } from '../shared/types/Meals';
import { getRandomMeals } from '../../api/Utils';

const MealContainer = () => {
  const [meals, setMeals] = React.useState<Meal[]>([]);

  React.useEffect(() => {
    const responseMeals = getRandomMeals();
    responseMeals.then((val) => setMeals(val));
  }, []);

  return (
    <Box
      mt={1}
      display="flex"
      justifyContent="center"
      flexWrap="wrap"
      overflow="auto"
      height={'73vh'}
    >
      {meals.map((meal) => {
        return (
          <Box key={meal.idMeal} m={1}>
            <MealCard mealData={meal} />
          </Box>
        );
      })}
    </Box>
  );
};

export default MealContainer;
