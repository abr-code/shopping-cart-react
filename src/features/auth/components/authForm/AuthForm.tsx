import "./AuthForm.css";
import { setAccesToken } from "../../../../token/accessToken.ts";
type Formtype = "Register" | "Login";
interface AuthFormType {
  formType: Formtype;
}
const REGISTER_URL = "http://localhost:3000/api/v1/auth/register";
const LOGIN_URL = "http://localhost:3000/api/v1/auth/login";

function AuthForm({ formType }: AuthFormType) {
  const formTitle = formType === "Register" ? "Registrarse" : "Ingresar";
  const fetchUrl = formType === "Register" ? REGISTER_URL : LOGIN_URL;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log(this.login_email.value);
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
    console.log(result);
    setAccesToken(result);
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
