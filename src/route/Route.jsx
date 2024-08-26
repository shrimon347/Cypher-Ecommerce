import { createBrowserRouter } from "react-router-dom";
import Dasboard from "../layout/Dasboard";
import Root from "../layout/Root";
import { Cartdetails } from "../pages/cartdetailspage/Cartdetails";
import AddProduct from "../pages/dashboardpages/AddProduct";
import AllUsers from "../pages/dashboardpages/AllUsers";
import Error from "../pages/errorpage/Error";
import Home from "../pages/homepage/Home";
import Login from "../pages/login&registerpage/Login";
import Register from "../pages/login&registerpage/Register";
import ProductDetail from "../pages/productdetailpage/ProductDetail";
import Products from "../pages/productpage/Products";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import ProductMange from "../pages/dashboardpages/ProductMange";
import UpdateProduct from "../pages/dashboardpages/UpdateProduct";
import Payment from "../pages/paymentpage/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cartdetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/payment",
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dasboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "users",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "addproduct",
        element: (
          <AdminRoute>
            <AddProduct />
          </AdminRoute>
        ),
       
      },
      {
        path: "updateproduct/:id",
        element: (
          <AdminRoute>
            <UpdateProduct />
          </AdminRoute>
        ),
        loader : ({params}) => fetch(`http://localhost:5000/product/${params.id}`),
      },
      {
        path: "products",
        element: (
          <AdminRoute>
            <ProductMange />
          </AdminRoute>
        ),
      },
    ],
  },
]);
export default router;
