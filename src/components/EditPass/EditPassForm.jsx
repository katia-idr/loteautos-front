import { useState } from "react";
import { toast } from "react-toastify";
import { json, useNavigate } from "react-router-dom";


const EditPassUser = ({token, loggedUser, setLoggedUser}) => {

const navigate = useNavigate();

const [mensaje, setMensaje] = useState("");
const [mensajeError, setMensajeError] = useState("");


const {
   id,
} = loggedUser[0];

const [newPass, setNewPass] = useState("");
const [oldPass, setOldPass] = useState("");

return(
<>
<form 
className="editPassUserForm"
onSubmit={async (event)=>{
   
   try {
      event.preventDefault();
      
      if(!(
         newPass ||
         oldPass
      )) {
         setMensajeError("¡Ups! No has introducido ningún dato nuevo.");
         setTimeout(() => { setMensajeError('') }, 2500);
         return;
      }

      const formData = {};

       if (newPass) {
         //formData.append("newPass", newPass);
         formData.newPass=newPass
       }
       if (oldPass) {
         //formData.append("oldPass", oldPass);
         formData.oldPass = oldPass
       }
       
       console.log(formData);

       const res = await fetch(`${process.env.REACT_APP_API_URL}/user/${id}/newpass`,
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

            toast.success("Tu contraseña fue actualizada");
            setMensaje("Tu contraseña fue actualizada.")

            setTimeout(() => {navigate(`/user/${id}`)}, 2500); 
           
       
} catch (error) {
   console.error(error.message);
   toast.error(error.message);
   setMensajeError(error.message);
   setTimeout(() => { setMensajeError('') }, 2500);

   
}}}
>
      
      <label htmlFor="oldPass">Password actual:</label>
        <input
          type="password"
          id="oldPass"
          value={oldPass}
          onChange={(event) => {
            setOldPass(event.target.value);
          }}
        />

        <label htmlFor="newPass">Password nuevo:</label>
        <input
          type="password"
          id="newPass"
          value={newPass}
          onChange={(event) => {
            setNewPass(event.target.value);
          }}
        />
      
      

<button className="principal">Actualizar contraseña</button>
</form>

 {mensajeError !== "" && <p id="mensajeError">{mensajeError}</p>}
          
 {mensaje !== "" && <p id="mensaje">{mensaje}</p>}

 </>

);
};

export default EditPassUser;