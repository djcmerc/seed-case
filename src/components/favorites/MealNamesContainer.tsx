import { Box, Chip, Stack, Typography } from '@mui/material';

const MealNamesContainer = () => {
  return (
    <>
      <Box display="flex" flexDirection="column" m={2}>
        <Box display="flex" justifyContent="center">
          <Typography variant="h5" component="div">
            Meals
          </Typography>
        </Box>
        <Box border={1} mt={1} p={1} display="flex" justifyContent="center">
          <Stack flexWrap="wrap" direction="row">
            <Box m={1}>
              <Chip label="Deletable" variant="outlined" />
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default MealNamesContainer;
