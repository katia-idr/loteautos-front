import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const UserRegisterForm = () => {
   
   
  const [nombre, setNombre] = useState("");
  const [apellido1, setApellido1] = useState("");
  const [apellido2, setApellido2] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rfc, setRfc] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [mensajeError, setMensajeError] = useState("");




  const navigate = useNavigate();

   
   return(
    <>
    <p className="pNewUser">Introduce los datos necesarios para que puedas crear una cuenta.</p>

    <form
        className="registerUserForm"
        onSubmit={async (event) => {
          try {
            event.preventDefault();

            const newUser = { nombre, apellido1, apellido2, email, password, rfc};

            const res = await fetch(
              `${process.env.REACT_APP_API_URL}/register/user`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser),
              }
            );
            const body = await res.json();

            if (!res.ok) {
              throw new Error(body.message);
            }

            toast.success(body.message);
            setMensaje(body.message)
            setTimeout(() => {navigate("/login")}, 3000);
          } catch (error) {
            console.error(error.message);
            toast.error(error.message);
            setMensajeError(error.message);
            setTimeout(() => { setMensajeError('') }, 2500)
          }
        }}
      >

      <ul>
        <li>
      <label htmlFor="nombre">Nombre:</label>
        <input
          id="nombre"
          value={nombre}
          onChange={(event) => {
            setNombre(event.target.value);
          }}
        /></li>
  
        <li><label htmlFor="apellido1">Apellido Paterno:</label>
        <input
          id="apellido1"
          value={apellido1}
          onChange={(event) => {
            setApellido1(event.target.value);
          }}
        /></li>

         <li><label htmlFor="apellido2">Apellido Materno:</label>
        <input
          id="apellido2"
          value={apellido2}
          onChange={(event) => {
            setApellido2(event.target.value);
          }}
        /></li>

        <li><label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        /></li>

        <li><label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        /></li>

         <li><label htmlFor="rfcLote">RFC Lote:</label>
        <input
          id="rfcLote"
          value={rfc}
          onChange={(event) => {
            setRfc(event.target.value);
          }}
        /></li>
        </ul>
        <button className="principal">Crear cuenta</button>
      </form>

      {mensajeError !== "" && <p id="mensajeError">{mensajeError}</p>}
          
          {mensaje !== "" && <p id="mensaje">{mensaje}</p>}


    </>
   

)};

export default UserRegisterForm;