import { Box, Paper } from '@mui/material';

const styles = {
  foreground: {
    p: 2,
    display: 'flex',
    'flex-direction': 'column',
    flex: 1
  }
};

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <Box display="flex" justifyContent="center" px={7} py={2}>
      <Paper sx={styles.foreground} elevation={5}>
        {children}
      </Paper>
    </Box>
  );
};

export default Layout;
