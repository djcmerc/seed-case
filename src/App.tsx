import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBar from './components/shared/NavBar';
import Explore from './pages/Explore';
import Details from './pages/Details';
import { Redirect, Route } from 'react-router';
import { Switch } from 'react-router-dom';

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
        <Switch>
          <Route path="/" exact>
            <Redirect to="/explore" />
          </Route>
          <Route path="/explore">
            <Explore />
          </Route>
          <Route path="/meals/details/:mealId">
            <Details />
          </Route>
        </Switch>
      </ThemeProvider>
    </>
  );
};

export default App;
