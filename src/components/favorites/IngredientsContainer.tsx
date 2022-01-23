import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import { Meal } from '../shared/types/Meals';

interface IngredientsContainerProps {
  meals: Meal[];
}

const IngredientsContainer = ({ meals }: IngredientsContainerProps) => {
  const [ingredients, setIngredients] = React.useState<Map<string, string>>(
    new Map<string, string>()
  );

  React.useEffect(() => {
    let newIngredients: Map<string, string> = new Map<string, string>();
    for (const meal of meals) {
      let mealIngredients: Map<number, string> = new Map<number, string>();
      for (const [key, val] of Object.entries(meal)) {
        if (val && val?.trim() !== '') {
          if (key.includes('Ingredient') && !mealIngredients.has(val)) {
            mealIngredients.set(parseInt(key.slice(13)), val);
          } else if (key.includes('Measure')) {
            const ingredientIndex: number = parseInt(key.slice(10));
            const ingredientValue: string =
              mealIngredients.get(ingredientIndex) + `|${val}`;
            mealIngredients.set(ingredientIndex, ingredientValue.trim());
          }
        }
      }

      for (const ingredientInfo of Array.from(mealIngredients.values())) {
        const splitInfo = ingredientInfo.split('|');
        if (newIngredients.has(splitInfo[0])) {
          const newIngredientMeasurement =
            newIngredients.get(splitInfo[0]) + `, ${splitInfo[1]}`;
          newIngredients.set(splitInfo[0], newIngredientMeasurement);
        } else {
          newIngredients.set(splitInfo[0], splitInfo[1]);
        }
      }
    }

    setIngredients(newIngredients);
  }, [meals]);

  return (
    <>
      <Box display="flex" flexDirection="column" m={2}>
        <Box display="flex" justifyContent="center">
          <Typography variant="h5" component="div">
            Ingredients
          </Typography>
        </Box>
        <Divider />
        <Box mt={1} p={1} display="flex" flexDirection="column">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            overflow="auto"
            maxHeight={'55vh'}
          >
            {Array.from(ingredients).map(
              ([ingredient, measurements], index) => {
                return (
                  <Typography key={ingredient + index}>{ingredient}</Typography>
                );
              }
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default IngredientsContainer;
