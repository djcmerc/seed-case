import { Box } from '@mui/material';
import MealCard from '../shared/MealCard';

const RecipeContainer = () => {
  return (
    <Box
      mt={1}
      display="flex"
      justifyContent="center"
      flexWrap="wrap"
      overflow="auto"
      height={650}
    >
      <Box m={1}>
        <MealCard />
      </Box>
      <Box m={1}>
        <MealCard />
      </Box>
      <Box m={1}>
        <MealCard />
      </Box>
      <Box m={1}>
        <MealCard />
      </Box>
      <Box m={1}>
        <MealCard />
      </Box>
      <Box m={1}>
        <MealCard />
      </Box>
      <Box m={1}>
        <MealCard />
      </Box>
      <Box m={1}>
        <MealCard />
      </Box>
      <Box m={1}>
        <MealCard />
      </Box>
      <Box m={1}>
        <MealCard />
      </Box>
      <Box m={1}>
        <MealCard />
      </Box>
      <Box m={1}>
        <MealCard />
      </Box>
      <Box m={1}>
        <MealCard />
      </Box>
    </Box>
  );
};

export default RecipeContainer;
