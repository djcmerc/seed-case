import { Box } from '@mui/material';
import React from 'react';
import MealCard from '../shared/MealCard';
import { Meal } from '../shared/types/Meals';

const MealContainer = () => {
  const [meals, setMeals] = React.useState<Meal[]>([]);

  const retrieveRandomMeals = async () => {
    let count = 0;
    const tempMeals: Meal[] = [];
    while (count !== 8) {
      const randomMealResponse = await fetch(
        'https://www.themealdb.com/api/json/v1/1/random.php'
      );
      const mealJson = await randomMealResponse.json();
      const mealData: Meal = mealJson.meals[0];
      console.log(mealData);
      const foundMeal = tempMeals.findIndex(
        (meal) => meal.idMeal === mealData.idMeal
      );

      if (foundMeal === -1) {
        tempMeals.push(mealData);
        count++;
      }
    }
    setMeals(tempMeals);
  };

  React.useEffect(() => {
    retrieveRandomMeals();
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
