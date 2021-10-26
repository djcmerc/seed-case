import { Box, Divider, Paper, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/shared/Layout';
import { pageStyles } from './styles/PageStyles';

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
  }
};

interface DetailsLinkParams {
  mealId: string;
}
const Details = () => {
  const linkParams = useParams<DetailsLinkParams>();

  React.useEffect(() => {
    console.log(linkParams.mealId);
  }, []);

  return (
    <Layout>
      <Box sx={pageStyles.foreground}>
        <Box sx={detailsStyles.mealHeader}>
          <Box
            component="img"
            sx={{ maxWidth: '45vw', maxHeight: 500 }}
            alt="Food"
            src="https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg"
            mr={2}
          />
          <Paper sx={detailsStyles.mealInfo} elevation={5}>
            <Box display="flex" justifyContent="center" p={1}>
              <Typography variant="h4">Meal Name</Typography>
            </Box>
            <Box display="flex" justifyContent="center" p={1}>
              <Box mr={1}>
                <Typography variant="subtitle1">Area: </Typography>
              </Box>
              <Box ml={1}>
                <Typography variant="subtitle1">Category: </Typography>
              </Box>
            </Box>
            <Divider light={true} />
            <Box display="flex" justifyContent="center" p={1}>
              <Typography variant="h5">Ingredients</Typography>
            </Box>
          </Paper>
        </Box>
        <Box mt={3}>
          <Paper elevation={5}>
            <Box display="flex" justifyContent="center">
              <Typography variant="h5">Instructions</Typography>
              <Divider light={true} />
            </Box>
          </Paper>
        </Box>
      </Box>
    </Layout>
  );
};

export default Details;
