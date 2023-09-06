import { useState } from "react"
import { LoginForm } from "../../components/login/LoginForm"
import {  UserRegisterForm } from "../../components/NewUser/UserRegisterForm"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

export const Login = () => {
    
   //Aqui va toda la lógica de JS, antes del return
    const [isLogin, setIsLogin] = useState('login')

   
   return (
      <div className="login">
         <h1>Anabit</h1>
         {isLogin === 'login' ? (
         <>
         <Header/>
          <LoginForm />
          <Footer />
          <p onClick={() => setIsLogin('register')}>
            Si no tienes cuenta, regístrate.
          </p>
         </>
      ) : (
        <>
          <UserRegisterForm />
          <p onClick={() => setIsLogin('login')}>Inicia sesion.</p>
        </>
      )}
      </div>
   )
}

export default Login;