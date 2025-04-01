import { AuthForm } from "../../components/authForm/AuthForm.tsx";
import "./LoginPage.tsx";
function LoginPage() {
  return (
    <div className="login_layout-container">
      <AuthForm formtype="Login" fetchUrl=" " />
    </div>
  );
}

export { LoginPage };
