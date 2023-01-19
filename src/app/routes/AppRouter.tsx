import { createBrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Product from "../pages/Product/Product";
import Home from "../pages/Home/Home";
import PublicLayout from "../pages/Layouts/Public/PublicLayout";
import Products from "../pages/Products/Products";

const AppRouter = createBrowserRouter([
  {
    path: AppRoutes().home.home,
    element: <PublicLayout />,
    children: [
      {
        path: AppRoutes().home.home,
        element: <Home />,
      },
      {
        path: `${AppRoutes().products.allCategories}/:id`,
        element: <Products />,
      },
      {
        path: AppRoutes().products.product,
        element: <Product />,
      },
    ],
  },
]);

export default AppRouter;
