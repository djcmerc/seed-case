import { Box, Chip, Stack, Typography } from '@mui/material';
import React from 'react';

interface MealNamesContainerProps {
  mealNames: string[];
  mealChipDelete: (mealName: string) => void;
}
const MealNamesContainer = ({
  mealNames,
  mealChipDelete
}: MealNamesContainerProps) => {
  const mealDeleteHandler = (mealName: string) => {
    mealChipDelete(mealName);
  };
  return (
    <>
      <Box display="flex" flexDirection="column" m={2}>
        <Box display="flex" justifyContent="center">
          <Typography variant="h5" component="div">
            Meals
          </Typography>
        </Box>
        <Box mt={1} p={1} display="flex" justifyContent="center">
          <Stack flexWrap="wrap" direction="row" justifyContent="center">
            {mealNames.map((mealName, index) => {
              return (
                <Chip
                  key={mealName + index}
                  label={mealName}
                  variant="outlined"
                  onDelete={() => mealDeleteHandler(mealName)}
                />
              );
            })}
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default MealNamesContainer;
