import { IconButton, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';

const styles = {
  hover: { '&:hover': { backgroundColor: 'transparent' } }
};

const SearchHeader = () => {
  return (
    <Box display="flex" justifyContent="space-between" mb={1}>
      <Box flex={1}></Box>
      <Box flex={5} display="flex" justifyContent="center" alignItems="center">
        <Typography>Placeholder Title</Typography>
      </Box>
      <Box
        border={1}
        borderColor="white"
        ml={1}
        display="flex"
        alignItems="center"
        alignSelf="flex-end"
      >
        <TextField size="small" label="Search" variant="filled" />
        <IconButton sx={styles.hover}>
          <SearchIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default SearchHeader;
