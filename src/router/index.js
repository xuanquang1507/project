import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductPage from "../page/ProductPage";
import ProductItem from "../page/ProductItem";
import LoginPage from "../page/LoginComponent";
import PrivateComponent from "../component/PrivateComponent";
import ProductDetail from "../page/ProductDetail";
import ItemProduct from "../page/ListProduct/ItemProduct";
const router = createBrowserRouter(
  [
    {
      path: "login",
      element: <LoginPage />,
    },
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "itemproduct",
      element: <ItemProduct />,
    },
    {
      path: "product/details/:id",
      element: <ProductDetail />,
    },
    {
      path: "/admin",
      children: [
        {
          path: "",
          element: <PrivateComponent component={ProductPage} />,
        },
        {
          path: "product",
          element: <PrivateComponent component={ProductPage} />,
        },

        {
          path: "preview",
          element: <PrivateComponent component={ProductItem} />,
        },
      ],
    },
  ],
);

export default router;
