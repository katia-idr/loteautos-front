
import { Link } from "react-router-dom";
import logoAnabit from "../../assets/images/logo-anabit.jpg";

const NotFoundPage = () => {
  return (
    <>
      <header className="header">
        <Link to="/">
          <img
            className="header-logo "
            src={logoAnabit}
            alt="Logo Anabit"
          />
        </Link>
      </header>
      <main>
        <section className="container">
          <h2>¡Ups! La página que estás buscando no existe. Error 404.</h2>
        </section>
      </main>

    </>
  );
};

export default NotFoundPage;
