import { Box, IconButton, Paper, TextField, Typography } from '@mui/material';
import Layout from '../components/shared/Layout';
import SearchIcon from '@mui/icons-material/Search';

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
          <Box display="flex" justifyContent="flex-end">
            <TextField size="small" label="Search" variant="filled" />
            <Box border={1} borderColor="white" ml={1} alignItems="center">
              <IconButton sx={styles.hover}>
                <SearchIcon />
              </IconButton>
            </Box>
          </Box>
        </Paper>
      </Layout>
    </>
  );
};

export default Explore;
