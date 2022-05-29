import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBar from './components/shared/NavBar';
import Explore from './pages/Explore';
import Details from './pages/Details';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';
import UserContext, { defaultUserCtx } from './store/UserContext';
import Favorites from './pages/Favorites';
import React from 'react';
import { Meal } from './components/shared/types/Meals';
import Login from './pages/Login';
import Signup from './pages/Signup';

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
  const [contextShoppingList, setContextShoppingList] = React.useState<Meal[]>(
    []
  );

  const setShoppingList = (shoppingList: Meal[]) => {
    setContextShoppingList(shoppingList);
  };

  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <CssBaseline />
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/signup" exact>
            <Signup />
          </Route>
          <UserContext.Provider
            value={{
              ...defaultUserCtx,
              shoppingList: contextShoppingList,
              setShoppingList
            }}
          >
            <NavBar />
            <Route path="/explore">
              <Explore />
            </Route>
            <Route path="/meals/details/:mealId">
              <Details />
            </Route>
            <Route path="/favorites">
              <Favorites />
            </Route>
          </UserContext.Provider>
        </Switch>
      </ThemeProvider>
    </>
  );
};

export default App;
