import { useState } from "react"
import loginForm  from "../../components/login/loginForm"
import registerForm  from "../../components/login/registerForm"

export const Login = () => {
    
   //Aqui va toda la lógica de JS, después del return y antes del html
    const [isLogin, setIsLogin] = useState('login')

   
   return (
      <div className="login">
         <h1>Anabit</h1>
         <loginForm />
         {isLogin === 'login' ? < loginForm /> : < registerForm />}
         <p onClick={()=>setIsLogin('register')}> Si no tienes cuenta, regístrate.</p>
      </div>
   )
}