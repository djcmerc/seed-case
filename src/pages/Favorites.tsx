import { Box, Paper, Typography } from '@mui/material';
import Layout from '../components/shared/Layout';
import { pageStyles } from './styles/PageStyles';
import FavoritesContainer from '../components/favorites/FavoritesContainer';
import ShoppingList from '../components/favorites/ShoppingList';

const Favorites = () => {
  return (
    <>
      <Box pt={2} sx={{ textAlign: 'center' }}>
        <Typography fontStyle="italic">
          Take a look back at your favorite food choices
        </Typography>
      </Box>
      <Layout>
        <Paper sx={pageStyles.foreground} elevation={5}>
          <FavoritesContainer />
          <ShoppingList />
        </Paper>
      </Layout>
    </>
  );
};

export default Favorites;
