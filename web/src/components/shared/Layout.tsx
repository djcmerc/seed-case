import { Box } from '@mui/material';
interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <Box display="flex" justifyContent="center" px={7} py={2}>
      {children}
    </Box>
  );
};

export default Layout;
