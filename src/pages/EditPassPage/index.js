import EditPassForm from "../../components/EditPass/EditPassForm";
import { useTokenContext } from "../../Contexts/TokenContext";


export const EditUser = () => {

const { token, loggedUser, setLoggedUser } = useTokenContext();


   return(

      <>
      <p>Cambia tu contraseña aquí</p>
      <main>
        {loggedUser && loggedUser.length > 0 && (
          <EditPassForm
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