import { Box, Typography } from '@mui/material';

const MealNamesContainer = () => {
  return (
    <>
      <Box display="flex" justifyContent="center" m={1}>
        <Typography variant="h5" component="div">
          Meals
        </Typography>
      </Box>
    </>
  );
};

export default MealNamesContainer;
