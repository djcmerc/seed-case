import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBar from './components/shared/NavBar';
import Explore from './pages/Explore';

const mainTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#4db31f'
    },
    secondary: {
      main: '#f50057'
    }
  }
});

const App = () => {
  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <CssBaseline />
        <NavBar />
        <Explore />
      </ThemeProvider>
    </>
  );
};

export default App;