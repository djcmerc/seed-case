import { Box, Paper } from '@mui/material';

const styles = {
  foreground: {
    p: 2,
    width: '100%',
    height: '100%'
  }
};

const Layout = (props: any) => {
  return (
    <Box
      width={'100vw'}
      height={'88vh'}
      display="flex"
      justifyContent="center"
      px={7}
      py={2}
    >
      <Paper sx={styles.foreground} elevation={5}>
        {props.children}
      </Paper>
    </Box>
  );
};

export default Layout;
