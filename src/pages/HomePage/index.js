import Footer from "../../components/Footer";
import Header from "../../components/Header";
import logoAuto from "../../assets/images/logo_auto_2.png";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="HomePage">
            <div className="img-container">
                <img src={logoAuto} alt="Anabit" />
                <h1>Solución Lotes de Autos</h1>
            </div>
        </div>
    );
}

export default Home;
