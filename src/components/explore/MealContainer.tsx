import { Box, Typography } from '@mui/material';
import React from 'react';
import MealCard from '../shared/MealCard';
import { BasicMealInfo } from '../shared/types/Meals';
import { getRandomMeals } from '../../api/GetUtils';

interface MealContainerProps {
  searchResponseMeals: BasicMealInfo[];
}
const MealContainer = ({ searchResponseMeals }: MealContainerProps) => {
  const [meals, setMeals] = React.useState<BasicMealInfo[]>([]);
  const [isPageLoaded, setIsPageLoaded] = React.useState<boolean>(false);
  const [mealsLoaded, setMealsLoaded] = React.useState<boolean>(false);

  React.useEffect(() => {
    const responseMeals = getRandomMeals();
    responseMeals.then((val) => {
      if (val) {
        const mappedData: BasicMealInfo[] = val.map((meal) => {
          return {
            idMeal: meal.idMeal,
            strMealThumb: meal.strMealThumb,
            strMeal: meal.strMeal
          };
        });
        setMeals(mappedData);
        setMealsLoaded(true);
      }
    });
  }, []);

  React.useEffect(() => {
    if (isPageLoaded) {
      setMeals(searchResponseMeals);
    } else {
      setIsPageLoaded(true);
    }
  }, [searchResponseMeals]);

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
      {!mealsLoaded && meals.length === 0 && (
        <Typography fontStyle="italic">Loading...</Typography>
      )}
      {mealsLoaded && meals.length === 0 && (
        <Typography fontStyle="italic">No meals found.</Typography>
      )}
    </Box>
  );
};

export default MealContainer;
