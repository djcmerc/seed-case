import { Box, Divider, Paper, Typography } from '@mui/material';
import Layout from '../components/shared/Layout';
import SearchHeader from '../components/explore/SearchHeader';

const styles = {
  foreground: {
    p: 2,
    width: '100%',
    height: '100%'
  },
  hover: { '&:hover': { backgroundColor: 'transparent' } }
};

const Explore = () => {
  return (
    <>
      <Box pt={2} sx={{ textAlign: 'center' }}>
        <Typography fontStyle="italic">
          Explore a decadent selection of recipes
        </Typography>
      </Box>
      <Layout>
        <Paper sx={styles.foreground} elevation={5}>
          <SearchHeader />
          <Divider light={true} />
        </Paper>
      </Layout>
    </>
  );
};

export default Explore;
