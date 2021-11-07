import {
  Box,
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Link
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { AccountCircle } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <AppBar position="static" color="primary" enableColorOnDark>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box width={200} display="flex" alignItems="center">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">seed-CASE</Typography>
        </Box>

        <Box display="flex">
          <Box px={5}>
            <Link component={NavLink} sx={{ color: 'inherit' }} to="/explore">
              <Typography variant="h6">Explore</Typography>
            </Link>
          </Box>
          <Box px={5}>
            <Link component={NavLink} sx={{ color: 'inherit' }} to="/favorites">
              <Typography variant="h6">Favorites</Typography>
            </Link>
          </Box>
          <Box px={5}>
            <Typography variant="h6">Calendar</Typography>
          </Box>
        </Box>
        <Box width={200} display="flex" justifyContent="flex-end">
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
