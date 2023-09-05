import { Link } from "react-router-dom";
import { useState } from "react";
import logoAnabit from "../../assets/images/logo-anabit.jpg";
import MenuIcon from "../MenuIcon";
import HomeIcon from "../HomeIcon";

import { useTokenContext } from "../../Contexts/TokenContext";
import NotLoggedUserMenu from "../NotLoggedUserMenu";
import LoggedUserMenu from "../LoggedUserMenu";
import { useNavigate } from "react-router-dom";

const Header = ({ setSearchParams, searchParams }) => {
  const { token, loggedUser, setToken } = useTokenContext();
  const [menu, setMenu] = useState(false);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className="header">
      <Link to="/">
        <img
          className="header-logo "
          src={logoAnabit}
          alt="Logo Anabit"
          width={300}
        />
      </Link>
      

      <button
        type="button"
        className="header-button"
        onClick={() => {
          navigate("/");
        }}
      >
        <HomeIcon />
      </button>
      <button onClick={toggleMenu} className="header-button">
        <MenuIcon />
      </button>
      {!token && <NotLoggedUserMenu menu={menu} />}
      {token && loggedUser.length > 0 && (
        <LoggedUserMenu
          menu={menu}
          loggedUser={loggedUser}
          setToken={setToken}
        />
      )}
    </header>
  );
};

export default Header;
