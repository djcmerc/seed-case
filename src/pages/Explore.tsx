import { Box, Divider, Typography } from '@mui/material';
import Layout from '../components/shared/Layout';
import SearchHeader from '../components/explore/SearchHeader';

const Explore = () => {
  return (
    <>
      <Box pt={2} sx={{ textAlign: 'center' }}>
        <Typography fontStyle="italic">
          Explore a decadent selection of recipes
        </Typography>
      </Box>
      <Layout>
        <SearchHeader />
        <Divider light={true} />
      </Layout>
    </>
  );
};

export default Explore;
