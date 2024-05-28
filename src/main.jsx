import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Login from "./pages/LogIn/Login.jsx";

const user = null;

const router = createBrowserRouter([
  {
    path: "/",
    element: user ? <App /> : <Login />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
