import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
// @ts-ignore
import Profile from "./pages/Profile/Profile";
import store from "./store"; // Import the Redux store

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App";



createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App/>
  </Provider>
);
