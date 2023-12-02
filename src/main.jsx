import React from 'react'
import ReactDOM from 'react-dom/client'
import './Styles/index.css'
import { RouterProvider } from 'react-router-dom';
import Routes from './Routes/Routes.jsx';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './Contexts/AuthContext.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={Routes} />
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

