import React from 'react';
import { BasicMealInfo } from '../components/shared/types/Meals';

interface UserContextProps {
  favorites: BasicMealInfo[];
}

export const defaultUserCtx: UserContextProps = { favorites: [] };
const UserContext = React.createContext(defaultUserCtx);

export default UserContext;
