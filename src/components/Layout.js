import { Outlet, Navigate } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import { useTokenContext } from "../Contexts/TokenContext";

const Layout = () => {
    const { token } = useTokenContext();

    if (!token) {
        return <Navigate to="/login" />;
    }

    return (
        <>
            <Header />
            <div className="container">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default Layout;
