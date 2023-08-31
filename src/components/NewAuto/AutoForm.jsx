import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const AutoForm = () => {
   
   
  const [placa, setPlaca] = useState("");
  const [vin, setVin] = useState("");
  const [año, setAño] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [version, setVersion] = useState("");
  const [motor, setMotor] = useState("");
  const [tipo, setTipo] = useState("");
  const [puertas, setPuertas] = useState("");
  const [color, setColor] = useState("");
  const [dobletraccion, setDobletraccion] = useState("");
  const [kilometraje, setKilometraje] = useState("");
  const [adquisicion, setAdquisicion] = useState("");
  




  const navigate = useNavigate();

   
   return(
    <>
    <p>Registro de vehículos</p>
    <p>Introduce los datos necesarios para agregar un vehículo a la base de datos.</p>
    <form
        className="AutoForm"
        onSubmit={async (event) => {
          try {
            event.preventDefault();

            const newAuto = { placa, vin, año, marca, modelo, version, motor, tipo, puertas, color, dobletraccion, kilometraje, adquisicion };

            const res = await fetch(
              `${process.env.REACT_APP_API_URL}/register/auto`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(newAuto),
              }
            );
            const body = await res.json();

            if (!res.ok) {
              throw new Error(body.message);
            }

            toast.success(body.message);
            navigate("/login");
          } catch (error) {
            console.error(error.message);
            toast.error(error.message);
          }
        }}
      >
      <label htmlFor="placa">Placa:</label>
        <input
          id="placa"
          size="6"
          placeholder="123-ABC"
          value={placa}
          onChange={(event) => {
            setPlaca(event.target.value);
          }}
        />

        <label htmlFor="vin">VIN:</label>
        <input
          id="vin"
          size="17"
          placeholder="1A2B3C4D5E6F7G8H9"
          value={vin}
          onChange={(event) => {
            setVin(event.target.value);
          }}
        />

         <label htmlFor="año">Año:</label>
        <input
          id="año"
          value={año}
          onChange={(event) => {
            setAño(event.target.value);
          }}
        />

        <label htmlFor="marca">Marca:</label>
        <input
          id="marca"
          class="dropDown"
          list="marcasAutos"
          value={marca}
          onChange={(event) => {
            setMarca(event.target.value);
          }}
        />

        <label htmlFor="modelo">Modelo:</label>
        <input
          id="modelo"
          value={modelo}
          onChange={(event) => {
            setModelo(event.target.value);
          }}
        />

         <label htmlFor="version">Versión:</label>
        <input
          id="version"
          value={version}
          placeholder="2.0"
          onChange={(event) => {
            setVersion(event.target.value);
          }}
        />

        <label htmlFor="motor">Motor:</label>
        <input
          id="motor"
          value={motor}
          placeholder="4.0"
          onChange={(event) => {
            setMotor(event.target.value);
          }}
        />

        <label htmlFor="tipo">Tipo:</label>
        <input
          id="tipo"
          value={tipo}
          class="dropDown"
          list="tipoAutos"
          onChange={(event) => {
            setTipo(event.target.value);
          }}
        />

        <label htmlFor="puertas">Puertas:</label>
        <input
          id="puertas"
          value={puertas}
          class="dropDown"
          list="puertasNum"
          onChange={(event) => {
            setPuertas(event.target.value);
          }}
        />

        <label htmlFor="color">Color:</label>
        <input
          id="color"
          value={color}
          class="dropDown"
          list="colores"
          onChange={(event) => {
            setColor(event.target.value);
          }}
        />

        <label htmlFor="dobletraccion">Doble tracción:</label>
        <label htmlFor="dobletraccion">Si</label>
        <input
          id="dobletraccion"
          value={dobletraccion}
          type="radio"
          onChange={(event) => {
            setDobletraccion(event.target.value);
          }}
        />
        <label htmlFor="dobletraccion">No</label>
        <input
          id="dobletraccion"
          value={dobletraccion}
          type="radio"
          onChange={(event) => {
            setDobletraccion(event.target.value);
          }}
        />

        <label htmlFor="kilometraje">Kilometraje:</label>
        <input
          id="kilometraje"
          value={kilometraje}
          onChange={(event) => {
            setKilometraje(event.target.value);
          }}
        />

        <label htmlFor="adquisicion">Adquisición:</label>
        <label htmlFor="adquisicion">Compra</label>
        <input
          id="adquisicion"
          value={adquisicion}
          type="radio"
          onChange={(event) => {
            setAdquisicion(event.target.value);
          }}
        />

        <label htmlFor="adquisicion">Consigna</label>
        <input
          id="adquisicion"
          value={adquisicion}
          type="radio"
          onChange={(event) => {
            setAdquisicion(event.target.value);
          }}
        />
        
        <datalist id="marcasAutos">
            <option value="Acura"/>
            <option value="Alfa Romeo"/>
            <option value="ARRA"/>
            <option value="Aston Martin"/>
            <option value="Audi"/>
            <option value="BAIC"/>
            <option value="Bentley"/>
            <option value="BMW"/>
            <option value="Buick"/>
            <option value="BYD"/>
            <option value="Cadillac"/>
            <option value="Changan"/>
            <option value="Chevrolet"/>
            <option value="Chirey"/>
            <option value="Chrysler"/>
            <option value="CUPRA"/>
            <option value="Dodge"/>
            <option value="Ferrari"/>
            <option value="Fiat"/>
            <option value="Ford"/>
            <option value="GMC"/>
            <option value="Honda"/>
            <option value="Hyundai"/>
            <option value="Infiniti"/>
            <option value="JAC"/>
            <option value="Jaguar"/>
            <option value="Jeep"/>
            <option value="Jetour"/>
            <option value="Kia"/>
            <option value="Lamborghini"/>
            <option value="Land Rover"/>
            <option value="Lexus"/>
            <option value="Lincoln"/>
            <option value="Mazda"/>
            <option value="McLaren"/>
            <option value="Mercedes Benz"/>
            <option value="MG"/>
            <option value="MINI"/>
            <option value="Mitsubishi"/>
            <option value="Nissan"/>
            <option value="Omoda"/>
            <option value="Peugeot"/>
            <option value="Porsche"/>
            <option value="RAM"/>
            <option value="Renault"/>
            <option value="SEAT"/>
            <option value="SEV"/>
            <option value="Subaru"/>
            <option value="Suzuki"/>
            <option value="Tesla"/>
            <option value="Toyota"/>
            <option value="Volkswagen"/>
            <option value="Volvo"/>
        </datalist>


        <datalist id="tipoAutos">
               <option value="Sedán"/>
               <option value="SUV"/>
               <option value="Coupé"/>
               <option value="Pickup"/>
               <option value="Convertible"/>
               <option value="Hatchback"/>
               <option value="Minivan"/>
               <option value="Furgoneta"/>
               <option value="Vagoneta"/>
               <option value="Chasis cabina"/>
               <option value="Chasis bus"/>
               <option value="Utilitario"/>
               </datalist>

              <datalist id="puertasNum">
                  <option value="2"/>
                  <option value="3"/>
                  <option value="4"/>
                  <option value="5"/>
                  <option value="6"/>
                  <option value="7"/> 
                  </datalist>

               <datalist id="colores">
                     <option value="Blanco"/>
                     <option value="Plata"/>
                     <option value="Negro"/>
                     <option value="Gris"/>
                     <option value="Gris Oxford"/>
                     <option value="Rojo"/>
                     <option value="Verde"/>
                     <option value="Azul"/>
                     <option value="Azul eléctrico"/>
                     <option value="Amarillo"/>
                     <option value="Naranja"/>
                     <option value="Café/Beige"/>
                     <option value="Morado"/>   
                     <option value="Otro"/>
                  </datalist>


        <button className="principal">Registrar vehículo</button>
      </form>
    </>
   

)};

export default AutoForm;