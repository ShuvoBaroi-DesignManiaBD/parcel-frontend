import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import DashboardLayout from "../Layouts/DashboardLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Users from "../Pages/Dashboard/Admin/Users";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import AllParcels from "../Pages/AllParcels";
import Profile from "../Pages/Shared/Profile";
import BookParcel from "../Pages/Dashboard/User/BookParcel";
import MyParcels from "../Pages/MyParcels";
import UpdateParcel from "../Pages/UpdateParcel";
import DeliveryMen from "../Pages/Dashboard/DeliveryMen/DeliveryMen";
import MyDeliveryList from "../Pages/Dashboard/DeliveryMen/MyDeliveryList";



const Routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
    ],
  },
  {
    path: 'login',
    element: <Login></Login>
  },
  {
    path: 'register',
    element: <Register></Register>
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: 'all-parcels',
        element: <AdminRoute><AllParcels></AllParcels></AdminRoute>
      },
      {
        path: 'my-parcels',
        element: <MyParcels></MyParcels>
      },
      {
        path: 'update-parcel',
        element: <UpdateParcel></UpdateParcel>
      },
      {
        path: 'users',
        element: <AdminRoute><Users></Users></AdminRoute>
      },
      {
        path: 'deliverymen',
        element: <AdminRoute><DeliveryMen></DeliveryMen></AdminRoute>
      },
      {
        path: 'delivery-list',
        element: <MyDeliveryList></MyDeliveryList>
      },
      {
        path: 'profile',
        element: <Profile></Profile>
      },
      {
        path: 'book-parcel',
        element: <BookParcel></BookParcel>
      },
    ]
  },
]);

export default Routes;
