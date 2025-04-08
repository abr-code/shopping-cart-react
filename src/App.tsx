import "./App.css";
import { StoreLayout } from "./features/store/layout/StoreLayout.tsx";
import { LoginPage } from "./features/auth/layouts/logginPage/LoginPage.tsx";
import { RegisterPage } from "./features/auth/layouts/registerPage/RegisterPage.tsx";
import { ShoppingCartContext } from "./context/shoppingCartContext.tsx";

import { createBrowserRouter, RouterProvider } from "react-router";
import { NavBar } from "./features/nav-bar/NavBar.tsx";

const router = createBrowserRouter([
  {
    path: "/shopping-cart-react",
    Component: StoreLayout,
  },
  {
    path: "/shopping-cart-react/login",
    Component: LoginPage,
  },
  {
    path: "/shopping-cart-react/register",
    Component: RegisterPage,
  },
]);

function App() {
  return (
    <ShoppingCartContext>
      <NavBar />
      <RouterProvider router={router} />
    </ShoppingCartContext>
  );
}

export default App;
