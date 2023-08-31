import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const NewAdminForm = () => {

   const [nombre, setNombre] = useState("");
   const [apellido1, setApellido1] = useState("");
   const [apellido2, setApellido2] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const navigate = useNavigate();
 
    
    return(
     <>
     <p>Formulario de registro</p>
     <p>Introduce los datos necesarios para que puedas crear una cuenta de administrador.</p>
     <form
         className="registerAdminForm"
         onSubmit={async (event) => {
           try {
             event.preventDefault();
 
             const newAdmin = { nombre, apellido1, apellido2, email, password };
 
             const res = await fetch(
               `${process.env.REACT_APP_API_URL}/register/admin`,
               {
                 method: "POST",
                 headers: {
                   "Content-Type": "application/json",
                 },
                 body: JSON.stringify(newAdmin),
               }
             );
             const body = await res.json();
 
             if (!res.ok) {
               throw new Error(body.message);
             }
 
             toast.success(body.message);
             navigate("/login");
           } catch (error) {
             console.error(error.message);
             toast.error(error.message);
           }
         }}
       >
       <label htmlFor="nombre">Nombre:</label>
         <input
           id="nombre"
           value={nombre}
           onChange={(event) => {
             setNombre(event.target.value);
           }}
         />
 
         <label htmlFor="apellido1">Apellido Paterno:</label>
         <input
           id="apellido1"
           value={apellido1}
           onChange={(event) => {
             setApellido1(event.target.value);
           }}
         />
 
          <label htmlFor="apellido2">Apellido Materno:</label>
         <input
           id="apellido2"
           value={apellido2}
           onChange={(event) => {
             setApellido2(event.target.value);
           }}
         />
 
         <label htmlFor="email">Email:</label>
         <input
           id="email"
           type="email"
           value={email}
           onChange={(event) => {
             setEmail(event.target.value);
           }}
         />
 
         <label htmlFor="password">Password:</label>
         <input
           id="password"
           type="password"
           value={password}
           onChange={(event) => {
             setPassword(event.target.value);
           }}
         />

 
         <button className="principal">Crear cuenta nivel Administrador</button>
       </form>
     </>
    
 
 )

}

export default NewAdminForm;