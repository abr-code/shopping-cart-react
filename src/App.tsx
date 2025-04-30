import "./App.css";
import { StoreLayout } from "./features/store/layout/StoreLayout.tsx";
import { LoginPage } from "./features/auth/layouts/logginPage/LoginPage.tsx";
import { RegisterPage } from "./features/auth/layouts/registerPage/RegisterPage.tsx";
import { ShoppingCartContext } from "./context/shoppingCartContext.tsx";
import { LoginProvider } from "./context/LoginContext.tsx";

import { createBrowserRouter, RouterProvider } from "react-router";
import { NavBar } from "./features/nav-bar/NavBar.tsx";

const LayoutNav = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/shopping-cart-react",
    element: (
      <LayoutNav>
        <StoreLayout />
      </LayoutNav>
    ),
  },
  {
    path: "/shopping-cart-react/login",
    element: (
      <LayoutNav>
        <LoginPage />
      </LayoutNav>
    ),
  },
  {
    path: "/shopping-cart-react/register",
    element: (
      <LayoutNav>
        <RegisterPage />
      </LayoutNav>
    ),
  },
]);

function App() {
  return (
    <LoginProvider>
      <ShoppingCartContext>
        <RouterProvider router={router} />
      </ShoppingCartContext>
    </LoginProvider>
  );
}

export default App;
