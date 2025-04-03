import { AuthForm } from "../components/authForm/AuthForm.tsx";
import "./LoginLayout.css";

function LoginLayout() {
  return (
    <div className="login_layout-container">
      <AuthForm formType="Login" />
    </div>
  );
}

export { LoginLayout };
