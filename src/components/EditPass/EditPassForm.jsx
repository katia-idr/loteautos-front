import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const EditPassUser = ({token, loggedUser, setLoggedUser}) => {

const navigate = useNavigate();

const {
   id,
} = loggedUser[0];

const [newPass, setNewPass] = useState("");
const [oldPass, setOldPass] = useState("");

return(

<form 
className="editPassUserForm"
onSubmit={async (event)=>{
   
   try {
      event.preventDefault();
      
      if(!(
         newPass ||
         oldPass
      )) {
         toast.warn("¡Ups! No has introducido ningún dato nuevo.");
         return;
      }

      const formData = new FormData();

       if (newPass) {
         formData.append("newPass", newPass);
       }
       if (oldPass) {
         formData.append("oldPass", oldPass);
       }
       

       const res = await fetch(`${process.env.REACT_APP_API_URL}/user/${id}/newpass`,
       {
         method: "PUT",
         headers: {
           Authorization: token,
         },
         body: formData,
       });

       if (!res.ok) {
         const body = await res.json();
         throw new Error(body.message);
       }

       const updatedFields = Object.fromEntries(formData);
            setLoggedUser([
              { ...loggedUser[0], ...updatedFields },
              { ...loggedUser[1] },
            ]);
            toast.success("Tu contraseña fue actualizada");
            navigate(`/user/${id}`);
       
} catch (error) {
   console.error(error.message);
            toast.error(error.message);
   
}}}
>
      
      <label htmlFor="oldPass">Password anterior:</label>
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

);
};

export default EditPassUser;