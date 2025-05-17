import "./NavBar.css";
import { MyButton } from "../../components/Button/MyButton";
import { useNavigate } from "react-router";
import { LoginContext, LoginContextType } from "../../context/LoginContext";
import { useContext } from "react";

const LOGOUT_URL = "http://localhost:3000/api/v1/auth/logout";

function NavBar() {
  const { isLogged, logoutUser } = useContext(LoginContext) as LoginContextType;
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/shopping-cart-react");
  };
  // const islogged = false;
  const handleRegister = () => {
    navigate("/shopping-cart-react/register");
  };
  const handleLogin = () => {
    navigate("/shopping-cart-react/login");
  };
  const handleLogout = async () => {
    // navigate("/shopping-cart-react/");
    const responce = await fetch(LOGOUT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!responce.ok) return "error";
    logoutUser();
  };
  return (
    <nav className="navBar">
      {isLogged ? (
        <ul>
          <li>
            <MyButton text="Home" onClick={handleHomeClick} />
          </li>
          <li>
            <MyButton text="Cerrar session" onClick={handleLogout} />
          </li>
        </ul>
      ) : (
        <ul className="navBar-list">
          <li>
            <MyButton text="Home" onClick={handleHomeClick} />
          </li>
          <li className="navBar-listItem">
            <MyButton text="Registrarse" onClick={handleRegister} />
          </li>
          <li className="navBar-listItem">
            <MyButton text="Ingresar" onClick={handleLogin} />
          </li>
        </ul>
      )}
    </nav>
  );
}

export { NavBar };
