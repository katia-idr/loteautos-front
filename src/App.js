import "normalize.css";
import "react-toastify/dist/ReactToastify.css";
import "@fontsource-variable/montserrat";
import "./scss/main.scss";
import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { CustomTokenContextProvider } from "./Contexts/TokenContext";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import NewLotePage from "./pages/NewLotePage";
import NewAutoPage from "./pages/NewAutoPage";
import NewAdminPage from "./pages/NewAdminPage";
import EditUserPage from "./pages/EditUserPage";
import EditPassPage from "./pages/EditPassPage";
import NewUserPage from "./pages/NewUserPage";
import UserProfilePage from "./pages/UserProfilePage";
import ListaAutosPage from "./pages/ListaAutosPage";
import VerAuto from "./pages/VerAuto";

import Layout from "./components/Layout";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/register/lote",
                element: <NewLotePage />,
            },
            {
                path: "/register/auto",
                element: <NewAutoPage />,
            },
            {
                path: "/register/admin",
                element: <NewAdminPage />,
            },
            {
                path: "/user/:idUser/edit",
                element: <EditUserPage />,
            },
            {
                path: "/user/:idUser/newpass",
                element: <EditPassPage />,
            },
            {
                path: "/register/user",
                element: <NewUserPage />,
            },
            {
                path: "/user/:idUser",
                element: <UserProfilePage />,
            },
            {
                path: "/autos",
                element: <ListaAutosPage />,
            },
            {
                path: "/autos/:idAuto",
                element: <VerAuto />,
            }
        ],
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
]);

function App() {
    return (
        <CustomTokenContextProvider>
            <div className="main">
                <RouterProvider router={router} />
            </div>
        </CustomTokenContextProvider>
    );
}

export default App;
