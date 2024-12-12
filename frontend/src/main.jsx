import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import router from './routes/router.jsx'
import { RouterProvider ,Outlet } from 'react-router-dom'
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import booksApi from "./redux/features/books/bookApi.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />,
  </Provider>,
);
