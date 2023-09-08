import { useState } from "react";
import  LoginForm  from "../components/login/LoginForm";
import { UserRegisterForm } from "../components/NewUser/UserRegisterForm";
import LogoAnabit from "../assets/images/logo-anabit.jpg"

export const Login = () => {
    const [isLogin, setIsLogin] = useState("login");

    return (
        <>
        <div className="logo-img-container">
                <img src={ LogoAnabit } alt="Anabit Logo" />
            </div>
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
        </>
    );
};

export default Login;
