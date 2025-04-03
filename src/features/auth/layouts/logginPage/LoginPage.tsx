import { AuthForm } from "../../components/authForm/AuthForm.tsx";
import "./LoginPage.tsx";
function LoginPage() {
  return (
    <div className="login_layout-container">
      <AuthForm formType="Login" />
    </div>
  );
}

export { LoginPage };
