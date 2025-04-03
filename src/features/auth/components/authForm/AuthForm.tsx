import "./AuthForm.css";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { setAccesToken, getAccesToken } from "../../../../token/accessToken.ts";
import { ShoppingCartctxType } from "../../../../types/shoppingCartCtxType.ts";
import { ShoppingCartctx } from "../../../../context/shoppingCartContext.tsx";
type Formtype = "Register" | "Login";
interface AuthFormType {
  formType: Formtype;
}
const REGISTER_URL = "http://localhost:3000/api/v1/auth/register";
const LOGIN_URL = "http://localhost:3000/api/v1/auth/login";
const GET_CART = "http://localhost:3000/api/v1/cart/getCart";

function AuthForm({ formType }: AuthFormType) {
  const formTitle = formType === "Register" ? "Registrarse" : "Ingresar";
  const fetchUrl = formType === "Register" ? REGISTER_URL : LOGIN_URL;

  const navigate = useNavigate();
  console.log(ShoppingCartctx);
  const { setCart } = useContext(ShoppingCartctx) as ShoppingCartctxType;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("login_email");
    const password = formData.get("login_password");
    console.log(email);

    if (formType === "Register") {
      console.log(fetchUrl);
      const responce = await fetch(fetchUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (!responce.ok) return "error";
      console.log(responce);

      const data = await responce.json();
      console.log(data);
      return;
    }

    const responce = await fetch(fetchUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    if (!responce.ok) return "error";
    const result = await responce.json();
    console.log(result.accesToken);
    setAccesToken(result.accesToken);
    const cartResponse = await fetch(GET_CART, {
      headers: {
        Authorization: "Bearer " + getAccesToken(),
      },
    });
    if (!cartResponse.ok) return "error";
    const cart = await cartResponse.json();
    console.log(cart);
    setCart(cart.cart);

    navigate("/shopping-cart-react");
  };

  return (
    <>
      <h2 className="login_title">{formTitle}</h2>
      <form className="login_form" onSubmit={handleSubmit}>
        <label className="login_label" htmlFor="login_email">
          Email
          <input
            placeholder="example@example.com"
            className="login_input"
            type="email"
            name="login_email"
          />
        </label>
        <label className="login_label" htmlFor="login_password">
          Password
          <input
            placeholder="password"
            className="login_input"
            type="password"
            name="login_password"
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export { AuthForm };
