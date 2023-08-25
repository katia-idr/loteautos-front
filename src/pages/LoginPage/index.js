import { useState } from "react"
import { LoginForm } from "../../components/login/LoginForm"
import { RegisterForm } from "../../components/register/RegisterForm"
import './styles.css'

export const Login = () => {
    
   //Aqui va toda la lógica de JS, antes del return
    const [isLogin, setIsLogin] = useState('login')

   
   return (
      <div className="login">
         <h1>Anabit</h1>
         {isLogin === 'login' ? (
         <>
          <LoginForm />
          <p onClick={() => setIsLogin('register')}>
            Si no tienes cuenta, regístrate.
          </p>
         </>
      ) : (
        <>
          <RegisterForm />
          <p onClick={() => setIsLogin('login')}>Inicia sesion.</p>
        </>
      )}
      </div>
   )
}

export default Login;