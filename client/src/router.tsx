import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import CreatePlantePage from "./pages/CreatePlantePage";
import DetailPlantePage from "./pages/DetailPlantePage";
import HomePage from "./pages/HomePage";
import PlantePage from "./pages/PlantePage";
import RegisterPage from "./pages/RegisterPage";

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
      {
        path: "/PlantePage",
        element: <PlantePage />,
      },
      {
        path: "/:id",
        element: <DetailPlantePage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
