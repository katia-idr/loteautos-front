import { Link } from "react-router-dom";

const UserMenu = ({ menu, setToken, loggedUser }) => {

  

  const loggedUserInfo = loggedUser[0];
  const { id } = loggedUserInfo;

  if (loggedUser[0].tipo === 'admin') {
    return (

      <nav className={`header-nav ${menu ? "isActive" : ""}`}>
      <ul className="header-ul">
        <li className="header-li">
          <Link to={`/user/${id}`}>Mi perfil</Link>
        </li>
        <li className="header-li">
          <Link to={`/user/${id}/edit`}>Editar perfil</Link>
        </li>
        <li className="header-li">
          <Link to={`/user/${id}/newpass`}>Cambiar contraseña</Link>
        </li>
        <li className="header-li">
          <Link to="/register/auto">Registrar vehículo</Link>
        </li>
        <li className="header-li">
          <Link to="/autos/todos">Consultar base de datos</Link>
        </li>
        <li className="header-li">
          <Link to="/register/lote">Registrar lote</Link>
        </li>
        <li className="header-li">
          <Link to="/user/delete">Eliminar usuarios</Link>
        </li>
        <li className="header-li">
          <Link
            to="/"
            onClick={() => {
              setToken("");
            }}
          >
            Logout
          </Link>
        </li>
      </ul>
    </nav>
    
    
  );
  
  };



  if (loggedUser[0].tipo === 'user') {
    return (

      <nav className={`header-nav ${menu ? "isActive" : ""}`}>
      <ul className="header-ul">
        <li className="header-li">
          <Link to={`/user/${id}`}>Mi perfil</Link>
        </li>
        <li className="header-li">
          <Link to={`/user/${id}/edit`}>Editar perfil</Link>
        </li>
        <li className="header-li">
          <Link to={`/user/${id}/newpass`}>Cambiar contraseña</Link>
        </li>
        <li className="header-li">
          <Link to="/register/auto">Registrar vehículo</Link>
        </li>
        <li className="header-li">
          <Link to="/autos/todos">Consultar base de datos</Link>
        </li>
        <li className="header-li">
          <Link
            to="/"
            onClick={() => {
              setToken("");
            }}
          >
            Logout
          </Link>
        </li>
      </ul>
    </nav>
    
    
  );
  }


};

export default UserMenu;
