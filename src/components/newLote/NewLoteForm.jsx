import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useTokenContext } from "../../Contexts/TokenContext";
import "./styles.css";

export const NewLoteForm = () => {
   
   
  const [nombre, setNombre] = useState("");
  const [razonsocial, setRazonsocial] = useState("");
  const [rfc, setRfc] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const navigate = useNavigate();
  const { token } = useTokenContext();
  const [mensaje, setMensaje] = useState("");
  const [mensajeError, setMensajeError] = useState("");

   
   return(

    <>
    <p className="pnewlote"> Llena todos los campos para guardar un lote en la base de datos.</p>
    <form
        className="newLoteForm"
        onSubmit={async (event) => {
          try {
            event.preventDefault();

            const newLote = { nombre, razonsocial, rfc, direccion, telefono };

            const res = await fetch(
              `${process.env.REACT_APP_API_URL}/register/lote`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "Authorization": token
                },
                body: JSON.stringify(newLote),
              }
            );
            const body = await res.json();

            if (!res.ok) {
              throw new Error(body.message);
            }

            setMensaje(body.message);
            setTimeout(() => {navigate("/")}, 3000); 
          } catch (error) {
            console.error(error.message);
            setMensajeError(error.message);
            setTimeout(() => { setMensajeError('') }, 2500);

            toast.error(error.message);
          

          }
        }}
      >
      <ul>
      <li><label htmlFor="nombre">Nombre:</label>
        <input
          id="nombre"
          value={nombre}
          onChange={(event) => {
            setNombre(event.target.value);
          }}
        /></li>

<li><label htmlFor="razonsocial">Razón Social:</label>
        <input
          id="razonsocial"
          value={razonsocial}
          onChange={(event) => {
            setRazonsocial(event.target.value);
          }}
        /></li>

<li><label htmlFor="rfc">RFC:</label>
        <input
          id="rfc"
          value={rfc}
          onChange={(event) => {
            setRfc(event.target.value);
          }}
        /></li>

<li><label htmlFor="direccion">Dirección:</label>
        <input
          id="direccion"
          value={direccion}
          onChange={(event) => {
            setDireccion(event.target.value);
          }}
        /></li>

<li><label htmlFor="telefono">Teléfono:</label>
        <input
          id="telefono"
          value={telefono}
          onChange={(event) => {
            setTelefono(event.target.value);
          }}
        /></li>
        </ul>

        <button className="principal">Registrar Lote</button>
      </form>


          {mensajeError !== "" && <p id="mensajeError">{mensajeError}</p>}
          
          {mensaje !== "" && <p id="mensaje">{mensaje}</p>}

    </>
   

)};

export default NewLoteForm;