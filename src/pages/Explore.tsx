import { Box, Divider, Typography } from '@mui/material';
import Layout from '../components/shared/Layout';
import SearchHeader from '../components/explore/SearchHeader';
import MealContainer from '../components/explore/MealContainer';
import {
  getAreaFilterValues,
  getCategoryFilterValues,
  getMealsByFilter,
  getMealsBySearch
} from '../api/GetUtils';
import React, { Reducer } from 'react';
import {
  SearchFilters,
  SearchQueryActionKind
} from '../components/shared/enums/Search';
import { BasicMealInfo } from '../components/shared/types/Meals';

interface SearchQueryState {
  searchType: SearchFilters;
  searchVal: string;
}

interface SearchQueryChangeAction {
  type: SearchQueryActionKind;
  value: string;
}

const searchQueryReducer: Reducer<SearchQueryState, SearchQueryChangeAction> = (
  prevState,
  action
) => {
  const { type, value } = action;

  switch (type) {
    case SearchQueryActionKind.CHANGE_TYPE:
      return {
        ...prevState,
        searchType: value as SearchFilters
      };
    case SearchQueryActionKind.CHANGE_VALUE:
      return {
        ...prevState,
        searchVal: value
      };
    default:
      return {
        searchType: SearchFilters.MEAL_NAME,
        searchVal: ''
      };
  }
};

const Explore = () => {
  const [areaFilterVals, setAreaFilterVals] = React.useState<string[]>([]);
  const [categoryFilterVals, setCategoryFilterVals] = React.useState<string[]>(
    []
  );
  const [searchQueryState, dispatchSearchQueryState] = React.useReducer(
    searchQueryReducer,
    { searchType: SearchFilters.MEAL_NAME, searchVal: '' }
  );
  const [getMealResponse, setGetMealResponse] = React.useState<BasicMealInfo[]>(
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

  React.useEffect(() => {
    if (searchQueryState.searchVal.trim().length > 0) {
      if (
        searchQueryState.searchType === SearchFilters.MEAL_NAME ||
        searchQueryState.searchType === SearchFilters.FIRST_LETTER
      ) {
        getMealsBySearch(
          searchQueryState.searchType,
          searchQueryState.searchVal
        ).then((meals) => {
          if (meals) {
            setGetMealResponse(meals);
          }
        });
      } else {
        getMealsByFilter(
          searchQueryState.searchType,
          searchQueryState.searchVal
        ).then((meals) => {
          if (meals) {
            setGetMealResponse(meals);
          }
        });
      }
    }
  }, [searchQueryState]);

  const searchQueryStateHandler = (
    searchType: SearchFilters,
    searchVal: string
  ) => {
    if (searchType !== searchQueryState.searchType) {
      dispatchSearchQueryState({
        type: SearchQueryActionKind.CHANGE_TYPE,
        value: searchType
      });
    }
    if (searchVal !== searchQueryState.searchVal) {
      dispatchSearchQueryState({
        type: SearchQueryActionKind.CHANGE_VALUE,
        value: searchVal
      });
    }
  };

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
          searchQueryHandler={searchQueryStateHandler}
        />
        <Divider light={true} />
        <MealContainer searchResponseMeals={getMealResponse} />
      </Layout>
    </>
  );
};

export default Explore;
