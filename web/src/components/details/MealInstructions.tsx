import { Box, Divider, Paper, Typography } from '@mui/material';

interface MealInstructionsProps {
  instructions: string[];
}

const MealInstructions = ({ instructions }: MealInstructionsProps) => {
  return (
    <Paper elevation={5}>
      <Box display="flex" flexDirection="column" justifyContent="center" p={3}>
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
                    <Typography fontWeight="bold">{index + 1}.</Typography>
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
  );
};

export default MealInstructions;
