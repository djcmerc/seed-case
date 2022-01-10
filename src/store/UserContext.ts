import React from 'react';
import { BasicMealInfo, Meal } from '../components/shared/types/Meals';

interface UserContextProps {
  favorites: BasicMealInfo[];
  shoppingList: Meal[];
}

export const defaultUserCtx: UserContextProps = {
  favorites: [],
  shoppingList: []
};
const UserContext = React.createContext(defaultUserCtx);

export default UserContext;
