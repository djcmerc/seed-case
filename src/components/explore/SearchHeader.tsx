import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/system';
import React from 'react';
import { SearchFilters } from '../shared/enums/Search';
import { getSearchFilterValues } from '../../api/Utils';

const SearchHeader = () => {
  const [userSearchVal, setUserSearchVal] = React.useState<string>('');
  const [searchTitle, setSearchTitle] = React.useState<string>('');
  const [searchFilter, setSearchFilter] = React.useState<SearchFilters>(
    SearchFilters.MEAL_NAME
  );
  const [filterValues, setFilterValues] = React.useState<string[]>([]);

  React.useEffect(() => {
    if (
      searchFilter === SearchFilters.AREA ||
      searchFilter === SearchFilters.CATEGORY
    ) {
      const valResponse = getSearchFilterValues(searchFilter);
      valResponse.then((vals: string[]) => setFilterValues(vals));
    }
  }, [searchFilter]);

  const onEnterPressHandler = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Enter') {
      setSearchTitle(userSearchVal);
    }
  };

  const onSearchIconPressHandler = () => {
    setSearchTitle(userSearchVal);
  };

  const onUserSearchChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUserSearchVal(event.target.value);
  };

  const onSelectChangeHandler = (event: SelectChangeEvent) => {
    switch (event.target.value) {
      case 'Meal Name':
      default:
        setSearchFilter(SearchFilters.MEAL_NAME);
        break;
      case 'First Letter':
        setSearchFilter(SearchFilters.FIRST_LETTER);
        break;
      case 'Category':
        setSearchFilter(SearchFilters.CATEGORY);
        break;
      case 'Area':
        setSearchFilter(SearchFilters.AREA);
        break;
    }
  };

  let isFilterBy = false;
  if (
    searchFilter === SearchFilters.AREA ||
    searchFilter === SearchFilters.CATEGORY
  ) {
    isFilterBy = true;
  }

  return (
    <Box display="flex" justifyContent="space-between" mb={1}>
      <Box display="flex" alignItems="center">
        <Typography>
          {searchTitle.trim() !== ''
            ? `Search Results for: "${searchTitle}"`
            : ''}
        </Typography>
      </Box>
      <Box display="flex" alignItems="center">
        <FormControl sx={{ minWidth: 100 }} variant="filled" size="small">
          <InputLabel id="search-filter-label">Search Filter</InputLabel>
          <Select
            labelId="search-filter-label"
            label="Filter"
            onChange={onSelectChangeHandler}
            value={searchFilter}
          >
            <MenuItem value={SearchFilters.MEAL_NAME}>Meal Name</MenuItem>
            <MenuItem value={SearchFilters.FIRST_LETTER}>
              First Letter of Meal
            </MenuItem>
            <MenuItem value={SearchFilters.CATEGORY}>Category</MenuItem>
            <MenuItem value={SearchFilters.AREA}>Area</MenuItem>
          </Select>
        </FormControl>
        {!isFilterBy && (
          <Box ml={1}>
            <TextField
              size="small"
              label="Enter search value"
              variant="filled"
              onKeyPress={onEnterPressHandler}
              onChange={onUserSearchChangeHandler}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={onSearchIconPressHandler}>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </Box>
        )}
        {isFilterBy && (
          <Box ml={1}>
            <FormControl sx={{ minWidth: 100 }} variant="filled" size="small">
              <Select>
                {filterValues.map((val) => {
                  return (
                    <MenuItem key={val} value={val}>
                      {val}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default SearchHeader;
