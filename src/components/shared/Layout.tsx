import { Box } from '@mui/material';

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
      {props.children}
    </Box>
  );
};

export default Layout;
