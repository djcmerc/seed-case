import { Box, Divider, Typography } from '@mui/material';
import Layout from '../components/shared/Layout';
import SearchHeader from '../components/explore/SearchHeader';
import MealContainer from '../components/explore/MealContainer';
import { getAreaFilterValues, getCategoryFilterValues } from '../api/Utils';
import React from 'react';

const Explore = () => {
  const [areaFilterVals, setAreaFilterVals] = React.useState<string[]>([]);
  const [categoryFilterVals, setCategoryFilterVals] = React.useState<string[]>(
    []
  );

  React.useEffect(() => {
    getAreaFilterValues().then((val) => {
      if (val) {
        setAreaFilterVals(val);
      }
    });

    getCategoryFilterValues().then((val) => {
      if (val) {
        setCategoryFilterVals(val);
      }
    });
  }, []);

  return (
    <>
      <Box pt={2} sx={{ textAlign: 'center' }}>
        <Typography fontStyle="italic">
          Explore a decadent selection of recipes
        </Typography>
      </Box>
      <Layout>
        <SearchHeader
          areaFilterValues={areaFilterVals}
          categoryFilterValues={categoryFilterVals}
        />
        <Divider light={true} />
        <MealContainer />
      </Layout>
    </>
  );
};

export default Explore;
