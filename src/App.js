import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AccountPage from "./Pages/AccountPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <AccountPage />,
  },
]);
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
