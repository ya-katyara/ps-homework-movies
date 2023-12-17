import { useContext } from 'react';
import { UserContext } from '../context';

export const useAuth = () => useContext(UserContext);