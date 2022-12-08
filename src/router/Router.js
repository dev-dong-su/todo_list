import { createBrowserRouter, Navigate } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';
import AccountPage from '../pages/AccountPage';
import ToDoPage from '../pages/ToDoPage';

export const PrivateRouter = () => {
  const { storedValue } = useLocalStorage('access_token');

  return storedValue === undefined || storedValue === null ? <Navigate to="/" /> : <ToDoPage />;
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AccountPage />,
  },
  {
    path: '/todo',
    element: <PrivateRouter />,
  },
]);
