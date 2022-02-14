import React from 'react';
import { BasicMealInfo, Meal } from '../components/shared/types/Meals';

interface UserContextProps {
  favorites: BasicMealInfo[];
  shoppingList: Meal[];
  setShoppingList: (shoppingList: Meal[]) => void;
}

export const defaultUserCtx: UserContextProps = {
  favorites: [],
  shoppingList: [],
  setShoppingList: () => {}
};
const UserContext = React.createContext(defaultUserCtx);

export default UserContext;
