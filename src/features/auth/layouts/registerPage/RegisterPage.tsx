import { AuthForm } from "../../components/authForm/AuthForm.tsx";
import "./RegisterPage.tsx";
function RegisterPage() {
  return (
    <div className="login_layout-container">
      <AuthForm formType="Register" />
    </div>
  );
}

export { RegisterPage };
