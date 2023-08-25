import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const NewLoteForm = () => {
   
   
  const [nombre, setNombre] = useState("");
  const [razonsocial, setRazonsocial] = useState("");
  const [rfc, setRfc] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const navigate = useNavigate();

   
   return(
    <>
    <p>Formulario de registro Lotes</p>
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
                },
                body: JSON.stringify(newLote),
              }
            );
            const body = await res.json();

            if (!res.ok) {
              throw new Error(body.message);
            }

            toast.success(body.message);
            navigate("/");
          } catch (error) {
            console.error(error.message);
            toast.error(error.message);
          }
        }}
      >
      <label htmlFor="nombre">Nombre:</label>
        <input
          id="nombre"
          value={nombre}
          onChange={(event) => {
            setNombre(event.target.value);
          }}
        />

        <label htmlFor="razonsocial">Razón Social:</label>
        <input
          id="razonsocial"
          value={razonsocial}
          onChange={(event) => {
            setRazonsocial(event.target.value);
          }}
        />

         <label htmlFor="rfc">RFC:</label>
        <input
          id="rfc"
          value={rfc}
          onChange={(event) => {
            setRfc(event.target.value);
          }}
        />

        <label htmlFor="direccion">Dirección:</label>
        <input
          id="direccion"
          value={direccion}
          onChange={(event) => {
            setDireccion(event.target.value);
          }}
        />

        <label htmlFor="telefono">Teléfono:</label>
        <input
          id="telefono"
          value={telefono}
          onChange={(event) => {
            setTelefono(event.target.value);
          }}
        />

        <button className="principal">Registrar Lote</button>
      </form>





    </>
   

)};