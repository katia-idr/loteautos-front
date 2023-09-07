import "normalize.css";
import "react-toastify/dist/ReactToastify.css";
import '@fontsource-variable/montserrat';
import "./scss/main.scss";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { CustomTokenContextProvider } from "./Contexts/TokenContext";
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import NotFoundPage from "./pages/NotFoundPage";
import NewLotePage from "./pages/NewLotePage";
import NewAutoPage from "./pages/NewAutoPage";
import NewAdminPage from "./pages/NewAdminPage";
import EditUserPage from "./pages/EditUserPage";
import EditPassPage from "./pages/EditPassPage";
import NewUserPage from "./pages/NewUserPage";
import UserProfilePage from "./pages/UserProfilePage";
import ListaAutosPage from "./pages/ListaAutosPage";


function App () {
   return(
      <BrowserRouter>
      <CustomTokenContextProvider>
         <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/login" element={<LoginPage/>} />
         <Route path="/register/lote" element={< NewLotePage/>} />
         <Route path="/register/auto" element={<NewAutoPage/>}/>
         <Route path="/register/admin" element={<NewAdminPage/>} />
         <Route path="user/:idUser/edit" element={<EditUserPage/>} />
         <Route path="user/:idUser/newpass" element={<EditPassPage/>} />
         <Route path="register/user" element={<NewUserPage/>} /> 
         <Route path="user/:idUser" element={<UserProfilePage/>}/>
         <Route path="autos" element={<ListaAutosPage/>} />


         <Route path="*" element={<NotFoundPage />} />

         </Routes>
      </CustomTokenContextProvider>
      </BrowserRouter>
   );
}

export default App;