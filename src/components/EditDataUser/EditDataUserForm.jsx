import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const EditDataUser = ({token, loggedUser, setLoggedUser}) => {

const navigate = useNavigate();

const [mensaje, setMensaje] = useState("");
  const [mensajeError, setMensajeError] = useState("");


const {
   id,
   nombre: currentNombre,
   apellido1: currentApellido1,
   apellido2: currentApellido2,
   email: currentEmail
} = loggedUser[0];

const [newNombre, setNewNombre] = useState("");
const [newEmail, setNewEmail] = useState("");
const [newApellido1, setNewApellido1] = useState("");
const [NewApellido2, setNewApellido2] = useState("");

return(
<>
<form 
className="editDataUserForm"
onSubmit={async (event)=>{
   
   try {
      event.preventDefault();
      
      if(!(
         newNombre ||
         newApellido1||
         NewApellido2 ||
         newEmail
      )) {
         setMensaje("¡Ups! Tienes que escribir al menos un cambio.");
         return;
      }

      const formData = {};

       if (newNombre) {
         //formData.append("nombre", newNombre);
         formData.nombre=newNombre
       }
       if (newApellido1) {
         //formData.append("apellido1", newApellido1);
         formData.apellido1=newApellido1
       }
       if (NewApellido2) {
         //formData.append("apellido2", NewApellido2);
         formData.apellido2=NewApellido2
       }
       if (newEmail) {
         //formData.append("email", newEmail);
         formData.email=newEmail
       }

       const res = await fetch(`${process.env.REACT_APP_API_URL}/user/${id}/edit`,
       {
         method: "PUT",
         headers: {
           Authorization: token,
           "Content-Type": "application/json"
         },
         body: JSON.stringify(formData),
       });

       if (!res.ok) {
         const body = await res.json();
         throw new Error(body.message);
       }

            toast.success("Tus datos han sido actualizados.");
            setMensaje("Tus datos han sido actualizados.")
            
            setTimeout(() => {navigate(`/user/${id}`)}, 3000);
           
       
} catch (error) {
   console.error(error.message);
            toast.error(error.message);
            setMensajeError(error.message);
   
}}}
>
      <label htmlFor="nombre">Nombre:</label>
        <input
          id="nombre"
          value={newNombre}
          onChange={(event) => {
            setNewNombre(event.target.value);
          }}
          placeholder={currentNombre}
        />

      <label htmlFor="apellido1">Apellido Paterno:</label>
        <input
          id="apellido1"
          value={newApellido1}
          onChange={(event) => {
            setNewApellido1(event.target.value);
          }}
          placeholder={currentApellido1}
        />

      <label htmlFor="apellido2">Apellido Materno:</label>
        <input
          id="apellido2"
          value={NewApellido2}
          onChange={(event) => {
            setNewApellido2(event.target.value);
          }}
          placeholder={currentApellido2}
        />

      <label htmlFor="email">Email:</label>
        <input
          id="email"
          value={newEmail}
          onChange={(event) => {
            setNewEmail(event.target.value);
          }}
          placeholder={currentEmail}
        />

<button className="principal">Actualizar datos</button>
</form>

          {mensajeError !== "" && <p id="mensajeError">{mensajeError}</p>}
          
          {mensaje !== "" && <p id="mensaje">{mensaje}</p>}

</>

);
};

export default EditDataUser;