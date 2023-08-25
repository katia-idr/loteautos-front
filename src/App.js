import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { CustomTokenContextProvider } from "./Contexts/TokenContext";
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import NotFoundPage from "./pages/NotFoundPage";
import NewLotePage from "./pages/NewLotePage";

function App () {
   return(
      <BrowserRouter>
      <CustomTokenContextProvider>
         <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/login" element={<LoginPage/>} />
         <Route path="/register/lote" element={< NewLotePage/>} />

         <Route path="*" element={<NotFoundPage />} />

         </Routes>
      </CustomTokenContextProvider>
      </BrowserRouter>
   );
}

export default App;