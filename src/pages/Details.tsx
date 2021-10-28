import { Box, Divider, IconButton, Paper, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/shared/Layout';
import { pageStyles } from './styles/PageStyles';
import { getMealById } from '../api/GetUtils';
import { Meal } from '../components/shared/types/Meals';
import { FavoriteBorder } from '@mui/icons-material';

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

  let imageUrl: string = '';
  let instructions: string[] = [];
  let ingredients = [];
  if (meal) {
    imageUrl = meal.strMealThumb;
    instructions = meal.strInstructions.split('.');

    for (const [key, value] of Object.entries(meal)) {
      if (key.includes('strIngredient') && value !== '') {
        const ingredient: string = value;
        const measurementKey: keyof Meal = key.replace(
          'Ingredient',
          'Measure'
        ) as keyof Meal;
        const measurementVal = meal[measurementKey];
        ingredients.push({
          ingredient: ingredient,
          measurement: measurementVal
        });
      }
    }
  }

  return (
    <Layout>
      <Box sx={pageStyles.foreground}>
        <Box sx={detailsStyles.mealHeader}>
          <Box position="relative">
            <Box
              component="img"
              sx={{ maxWidth: '45vw', maxHeight: 500 }}
              alt={meal?.strMeal}
              src={imageUrl}
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
                <Typography variant="subtitle1">
                  Area: {meal?.strArea}
                </Typography>
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
              {ingredients.map((ingredient, index) => {
                return (
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    key={ingredient.ingredient + ingredient.measurement + index}
                  >
                    <Box>
                      <Typography>{ingredient.ingredient}:</Typography>
                    </Box>
                    <Box>
                      <Typography fontWeight="bold">
                        {ingredient.measurement}
                      </Typography>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Paper>
        </Box>
        <Box mt={3}>
          <Paper elevation={5}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              p={3}
            >
              <Box display="flex" justifyContent="center">
                <Typography variant="h5">Instructions</Typography>
              </Box>
              <Box py={2}>
                <Divider />
              </Box>
              <Box>
                {instructions
                  .filter((instruction) => instruction !== '')
                  .map((instruction, index) => {
                    return (
                      <Box display="flex" key={instruction + index}>
                        <Box width={40}>
                          <Typography fontWeight="bold">
                            {index + 1}.
                          </Typography>
                        </Box>
                        <Box>
                          <Typography>{instruction}</Typography>
                        </Box>
                      </Box>
                    );
                  })}
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Layout>
  );
};

export default Details;
