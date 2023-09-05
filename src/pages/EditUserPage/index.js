import EditDataUserForm from "../../components/EditDataUser/EditDataUserForm";
import { useTokenContext } from "../../Contexts/TokenContext";


export const EditUser = () => {

const { token, loggedUser, setLoggedUser } = useTokenContext();


   return(

      <>
      <p>Cambia tus datos aquí</p>
      <main>
        {loggedUser && loggedUser.length > 0 && (
          <EditDataUserForm
            token={token}
            loggedUser={loggedUser}
            setLoggedUser={setLoggedUser}
          />
        )}
      </main>
      
      </>

   )

}

export default EditUser;