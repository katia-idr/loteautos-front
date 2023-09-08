import { useState } from "react";
import  LoginForm  from "../components/login/LoginForm";
import { UserRegisterForm } from "../components/NewUser/UserRegisterForm";

export const Login = () => {
    const [isLogin, setIsLogin] = useState("login");

    return (
        <div className="login-container">
            {isLogin === "login" ? (
                <>
                    <LoginForm />
                    <p onClick={() => setIsLogin("register")}>
                        Si no tienes cuenta, <strong>regístrate</strong>.
                    </p>
                </>
            ) : (
                <>
                    <UserRegisterForm />
                    <p onClick={() => setIsLogin("login")}>Inicia sesion.</p>
                </>
            )}
        </div>
    );
};

export default Login;
