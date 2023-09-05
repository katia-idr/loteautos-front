import Footer from "../../components/Footer"
import Header from "../../components/Header"
import ListaAutos from "../../components/ListaAutos/ListaAutos";


function ListaAutosPage() {
  return (
    <div className="HomePage">
     <Header/>
     <ListaAutos/>
     <Footer/>
    </div>
  );
}

export default ListaAutosPage;
