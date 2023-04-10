import React from 'react';
import { useSelector } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthHome from './pages/Auth/AuthHome';
import LoginPage from './pages/Auth/LoginPage';
import ErrorPage from './pages/Error/ErrorPage';
import SplashScreen from './pages/SplashScreen/SplashScreen';

// Moved the router here to be able to call the splash screen once to avoid redundant code.
// This is were you add routes for the pages you are building
const router = createBrowserRouter([
  {
    // your route goes here
    path: '/',
    // this is where you add the component of the page you are routing to
    element: <AuthHome />,
    // this is a fallback error page that appears and shows you the error of the particular route
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <LoginPage />,
      },
    ],
  },
]);

export default function App() {
  // Get the isloaded state
  const isLoaded = useSelector((state) => state.splashScreen.isLoaded);
  // return the splash screen if the isloaded state is false
  return !isLoaded ? <SplashScreen /> : <RouterProvider router={router} />;
}
