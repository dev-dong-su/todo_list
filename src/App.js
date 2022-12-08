<<<<<<< work/Account
import { RouterProvider } from 'react-router-dom';
import { router } from './router/Router';

=======
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AccountPage from "./pages/AccountPage";
import TodoPage from './pages/ToDoPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AccountPage />,
  },
  {
    path: '/todo',
    element: <TodoPage />
  }
]);
>>>>>>> main
function App() {
  return <RouterProvider router={router} />;
}

export default App;
