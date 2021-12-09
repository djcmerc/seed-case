import { Box, Typography } from '@mui/material';

const IngredientsContainer = () => {
  return (
    <>
      <Box display="flex" flexDirection="column" m={2}>
        <Box display="flex" justifyContent="center">
          <Typography variant="h5" component="div">
            Ingredients
          </Typography>
        </Box>
        <Box border={1} mt={1} p={1} display="flex" flexDirection="column">
          <Box display="flex" justifyContent="center">
            <Typography>Ingredient</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default IngredientsContainer;
