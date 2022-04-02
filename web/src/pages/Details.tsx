import { Box } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/shared/Layout';
import { pageStyles } from './styles/PageStyles';
import { getMealById } from '../api/GetUtils';
import { Meal } from '../components/shared/types/Meals';
import MealHeaderInfo from '../components/details/MealHeaderInfo';
import MealInstructions from '../components/details/MealInstructions';

interface DetailsLinkParams {
  mealId: string;
}
const Details = () => {
  const linkParams = useParams<DetailsLinkParams>();
  const [meal, setMeal] = React.useState<Meal>();

  React.useEffect(() => {
    const responseMeal = getMealById(linkParams.mealId);
    responseMeal.then((mealData) => {
      if (mealData) {
        setMeal(mealData);
      }
    });
  }, []);

  let instructions: string[] = [];
  if (meal) {
    instructions = meal.strInstructions.split('.');
  }

  return (
    <Layout>
      <Box sx={pageStyles.foreground}>
        <MealHeaderInfo meal={meal} />
        <Box mt={3}>
          <MealInstructions instructions={instructions} />
        </Box>
      </Box>
    </Layout>
  );
};

export default Details;
