import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import CreatePlantePage from "./pages/CreatePlantePage";
import HomePage from "./pages/HomePage";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/createPlantePage",
        element: <CreatePlantePage />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
