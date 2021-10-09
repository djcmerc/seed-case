import {
  FormControl,
  InputLabel,
  Select,
  TextField,
  Typography
} from '@mui/material';
import { Box } from '@mui/system';

const SearchHeader = () => {
  return (
    <Box display="flex" justifyContent="space-between" mb={1}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography>"Placeholder Search Title"</Typography>
      </Box>
      <Box display="flex" alignItems="center">
        <FormControl size="small" fullWidth>
          <InputLabel id="search-filter-label">Search Filter</InputLabel>
          <Select labelId="search-filter-label" label="Filter"></Select>
        </FormControl>
        <Box width={400} ml={1}>
          <TextField size="small" label="Enter search value" variant="filled" />
        </Box>
      </Box>
    </Box>
  );
};

export default SearchHeader;
