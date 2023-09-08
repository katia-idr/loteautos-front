import { Link } from "react-router-dom";
import logoAnabit from "../../assets/images/logo-anabit.jpg";

import { useTokenContext } from "../../Contexts/TokenContext";

const Header = () => {
    const { loggedUser, logout } = useTokenContext();

    return (
        <div className="header-container">
            <header className="header">
                <Link to="/">
                    <img
                        className="header-logo "
                        src={logoAnabit}
                        alt="Logo Anabit"
                        width={250}
                    />
                </Link>
                {loggedUser ? (
                    <button
                        className="principal"
                        onClick={logout}
                    >
                        <span>Salir</span>
                    </button>
                ) : (
                    <Link
                        className="iniciar_sesion"
                        to="/login"
                        style={{
                            textDecoration: "none",
                            color: "#2e3456",
                            fontWeight: "500",
                        }}
                    >
                        <span>Iniciar Sesión</span>
                    </Link>
                )}
            </header>
        </div>
    );
};

export default Header;
