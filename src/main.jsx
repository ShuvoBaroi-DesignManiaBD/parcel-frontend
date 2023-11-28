import React from 'react'
import ReactDOM from 'react-dom/client'
import './Styles/index.css'
import { RouterProvider } from 'react-router-dom';
import Routes from './Routes/Routes.jsx';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './Contexts/AuthContext.jsx';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={Routes} />
      <Toaster />
    </AuthProvider>
  </React.StrictMode>
);

