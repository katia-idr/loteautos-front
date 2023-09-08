import comisiones from "../../assets/images/comisiones.png";
import acceso from "../../assets/images/acceso.png";
import contratos from "../../assets/images/contratos.png";
import cotizaciones from "../../assets/images/cotizaciones.png";
import inventario from "../../assets/images/inventario.png";
import publicaciones from "../../assets/images/publicaciones.png";
import seguimiento from "../../assets/images/seguimiento.png";
import verificaciones from "../../assets/images/verificaciones.png";
import { Link } from "react-router-dom";


function Home() {
    return (
        <div className="HomePage">
            <div className="menu-home">

            <div className="iconoMenu">
            <Link to="/register/lote"><img src={ acceso } alt="Anabit Logo" /></Link>
            <p>Área Admin</p>
            </div>
            
            <div className="iconoMenu">
            <img src={ comisiones } alt="Anabit Logo" />
            <p>Comisiones</p>
            </div>

            <div className="iconoMenu">
            <img src={ contratos } alt="Anabit Logo" />
            <p>Contratos</p>
            </div>

            <div className="iconoMenu">
            <Link to="/register/auto"><img src={ cotizaciones } alt="Anabit Logo" /></Link>
            <p>Registro vehículos</p>
            </div>

            <div className="iconoMenu">
            <Link to="/autos"><img src={ inventario } alt="Anabit Logo" /></Link>
            <p>Gestión de Inventario</p>
            </div>

            <div className="iconoMenu">
            <img src={ publicaciones } alt="Anabit Logo" />
            <p>Publicaciones</p>
            </div>

            <div className="iconoMenu">
            <img src={ seguimiento } alt="Anabit Logo" />
            <p>Seguimiento a créditos</p>
            </div>

            <div className="iconoMenu">
            <img src={ verificaciones } alt="Anabit Logo" />
            <p>Verificaciones</p>
            </div>

            </div>
        </div>
    );
}

export default Home;
