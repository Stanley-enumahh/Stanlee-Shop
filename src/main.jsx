import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App"
import Registration from "./pages/SignIn";
import Cart from './pages/cart'
import { ShopContextProvider } from "./context/shopContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/cart",
    element: <Cart/>,
  },
  {
    path: "/sign-in",
    element: <Registration/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ShopContextProvider>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </ShopContextProvider>
);

