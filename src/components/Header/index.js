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
      
    </header>
  );
};

export default Header;
