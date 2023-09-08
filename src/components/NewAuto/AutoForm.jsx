import { useState, Fragment } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useTokenContext } from "../../Contexts/TokenContext";
import {LeftArrow, RightArrow} from "../ArrowIcons";
import DefPhotoAuto from "../DefaultPhoto";

export const AutoForm = () => {
   
  const { token } = useTokenContext();

  const [placa, setPlaca] = useState("");
  const [vin, setVin] = useState("");
  const [year, setYear] = useState("");
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
  const [entidadplaca, setEntidadplaca] = useState("");
  const [fechaadqui, setFechaadqui] = useState("");
  const [preciocompra, setPreciocompra] = useState("");
  const [precioventa, setPrecioventa] = useState("");
  const [comentarios, setComentarios] = useState("");

  const [mensaje, setMensaje] = useState("");
  const [mensajeError, setMensajeError] = useState("");

  //fotos
  const [images, setImages] = useState([]);
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const maxImages = 15 - images.length;


  const handleAddImages = (e) => {
    const fileList = e.target.files;

    if (fileList.length > maxImages) {
      setMensajeError(`Puedes añadir ${maxImages} máximo.`);
      setTimeout(() => { setMensajeError('') }, 2500);
      return;
    }
    setImages([...images, ...fileList]);
  };


  const previousPhoto = (e) => {
    e.stopPropagation();
    if (currentPhoto === images.length - 1) {
      setCurrentPhoto(0);
      return;
    }
    setCurrentPhoto(currentPhoto + 1);
  };
  const nextPhoto = (e) => {
    e.stopPropagation();
    if (currentPhoto === 0) {
      setCurrentPhoto(images.length - 1);
      return;
    }
    setCurrentPhoto(currentPhoto - 1);
  };

  const navigate = useNavigate();
   
   return(
    <>
    <p className="pnewauto">Introduce los datos necesarios para agregar un vehículo a la base de datos.</p>
    <form id="datosAuto"
        className="AutoForm"
        onSubmit={async (event) => {
          try {
            event.preventDefault();

            const formData = new FormData();
              formData.append('placa', placa)
              formData.append('vin', vin)
              formData.append('marca',marca)
              formData.append('modelo',modelo)
              formData.append('year', year)
              formData.append('version',version)
              formData.append('tipo',tipo)
              formData.append('color',color)
              formData.append('puertas',puertas)
              formData.append('dobletraccion',dobletraccion)
              formData.append('kilometraje',kilometraje)
              formData.append('adquisicion',adquisicion)
              formData.append('entidadplaca',entidadplaca)
              formData.append('fechaadqui',fechaadqui)
              formData.append('preciocompra',preciocompra)
              formData.append('precioventa',precioventa)
              formData.append('comentarios',comentarios)

              for (const autoPhoto of images){
                formData.append("autoPhoto",autoPhoto);
              }
            
            const res = await fetch(
              `${process.env.REACT_APP_API_URL}/register/auto`,
              {
                method: "POST",
                headers: {
                  "Authorization": token,
                },
                body: formData //JSON.stringify(newAuto)
              }
            );
            const body = await res.json();

            if (!res.ok) {
              throw new Error(body.message);
            }

            setMensaje(body.message);
            setTimeout(() => {navigate("/autos")}, 3000);

          } catch (error) {
            console.error(error.message);
            toast.error(error.message);
            setMensajeError(error.message);
            setTimeout(() => { setMensajeError('') }, 2500);
          }
        }}
      >


<ul>

      <li><label htmlFor="placa">Placa:</label>
        <input
          id="placa"
          size="6"
          placeholder="123-ABC"
          value={placa}
          onChange={(event) => {
            setPlaca(event.target.value);
          }}
        /></li>

<li><label htmlFor="vin">VIN:</label>
        <input
          id="vin"
          size="17"
          placeholder="1A2B3C4D5E6F7G8H9"
          value={vin}
          onChange={(event) => {
            setVin(event.target.value);
          }}
        /></li>

<li><label htmlFor="year">Año:</label>
        <input
          id="year"
          value={year}
          onChange={(event) => {
            setYear(event.target.value);
          }}
        /></li>

<li><label htmlFor="marca">Marca:</label>
        <select onChange={(event) => {
            setMarca(event.target.value);
          }} id="marca">
            <option value="Acura">Acura</option>
            <option value="Alfa Romeo">Alfa Romeo</option>
            <option value="ARRA">ARRA</option>
            <option value="Aston Martin">Aston Martin</option>
            <option value="Audi">Audi</option>
            <option value="BAIC">BAIC</option>
            <option value="Bentley">Bentley</option>
            <option value="BMW">BMW</option>
            <option value="Buick">Buick</option>
            <option value="BYD">BYD</option>
            <option value="Cadillac">Cadillac</option>
            <option value="Changan">Changan</option>
            <option value="Chevrolet">Chevrolet</option>
            <option value="Chirey">Chirey</option>
            <option value="Chrysler">Chrysler</option>
            <option value="CUPRA">CUPRA</option>
            <option value="Dodge">Dodge</option>
            <option value="Ferrari">Ferrari</option>
            <option value="Fiat">Fiat</option>
            <option value="Ford">Ford</option>
            <option value="GMC">GMC</option>
            <option value="Honda">Honda</option>
            <option value="Hyundai">Hyundai</option>
            <option value="Infiniti">Infiniti</option>
            <option value="JAC">JAC</option>
            <option value="Jaguar">Jaguar</option>
            <option value="Jeep">Jeep</option>
            <option value="Jetour">Jetour</option>
            <option value="Kia">Kia</option>
            <option value="Lamborghini">Lamborghini</option>
            <option value="Land Rover">Land Rover</option>
            <option value="Lexus">Lexus</option>
            <option value="Lincoln">Lincoln</option>
            <option value="Mazda">Mazda</option>
            <option value="McLaren">McLaren</option>
            <option value="Mercedes Benz">Mercedes Benz</option>
            <option value="MG">MG</option>
            <option value="MINI">MINI</option>
            <option value="Mitsubishi">Mitsubishi</option>
            <option value="Nissan">Nissan</option>
            <option value="Omoda">Omoda</option>
            <option value="Peugeot">Peugeot</option>
            <option value="Porsche">Porsche</option>
            <option value="RAM">RAM</option>
            <option value="Renault">Renault</option>
            <option value="SEAT">SEAT</option>
            <option value="SEV">SEV</option>
            <option value="Subaru">Subaru</option>
            <option value="Suzuki">Suzuki</option>
            <option value="Tesla">Tesla</option>
            <option value="Toyota">Toyota</option>
            <option value="Volkswagen">Volkswagen</option>
            <option value="Volvo">Volvo</option>
        </select></li>
       

       <li> <label htmlFor="modelo">Modelo:</label>
        <input
          id="modelo"
          value={modelo}
          onChange={(event) => {
            setModelo(event.target.value);
          }}
        /></li>

        <li> <label htmlFor="version">Versión:</label>
        <input
          id="version"
          value={version}
          placeholder="2.0"
          onChange={(event) => {
            setVersion(event.target.value);
          }}
        /></li>

        <li> <label htmlFor="motor">Motor:</label>
        <input
          id="motor"
          value={motor}
          placeholder="4.0"
          onChange={(event) => {
            setMotor(event.target.value);
          }}
        /></li>

        <li><label htmlFor="tipo">Tipo:</label>
        <select onChange={(event) => {
            setTipo(event.target.value);
          }} id="tipo">
              <option value="sedan">Sedan</option>
               <option value="SUV">SUV</option>
               <option value="coupe">Coupé</option>
               <option value="pickup">Pickup</option>
               <option value="convertible">Convertible</option>
               <option value="hatchback">Hatchback</option>
               <option value="minivan">Minivan</option>
               <option value="furgoneta">Furgoneta</option>
               <option value="vagoneta">Vagoneta</option>
               <option value="chasiscabina">Chasis cabina</option>
               <option value="chasisbus">Chasis bus</option>
               <option value="utilitario">Utilitario</option>
        </select></li>
        

        <li><label htmlFor="puertas">Puertas:</label>
        <select onChange={(event) => {
            setPuertas(event.target.value);
          }} id="puertas">
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
        </select></li>
      

      <li><label htmlFor="color">Color:</label>
        <select onChange={(event) => {
            setColor(event.target.value);
          }} id="color">
                    <option value="Blanco">Blanco</option>
                     <option value="Plata">Plata</option>
                     <option value="Negro">Negro</option>
                     <option value="Gris">Gris</option>
                     <option value="Gris Oxford">Griz oxford</option>
                     <option value="Rojo">Rojo</option>
                     <option value="Verde">Verde</option>
                     <option value="Azul">Azul</option>
                     <option value="Azul eléctrico">Azul eléctrico</option>
                     <option value="Amarillo">Amarillo</option>
                     <option value="Naranja">Naranja</option>
                     <option value="Café/Beige">Café / Beige</option>
                     <option value="Morado">Morado</option>
                     <option value="Otro">Otro</option>
        </select></li>
        

        <li><label htmlFor="dobletraccion">Doble tracción:</label>
        <label className="doslabel" htmlFor="dobletraccion">Si</label>
        <input
          id="dobletraccion"
          className="inputgriddos"
          name="dobletraccion"
          value={dobletraccion}
          type="radio"
          onChange={(event) => {
            setDobletraccion("si");
          }}
        />
       
         <label className="treslabel" htmlFor="dobletraccion">No</label>
        <input
          id="dobletraccion"
          className="inputgridtres"
          name="dobletraccion"
          value={dobletraccion}
          type="radio"
          onChange={(event) => {
            setDobletraccion("no");
          }}
        /></li>

        <li> <label htmlFor="kilometraje">Kilometraje:</label>
        <input
          id="kilometraje"
          value={kilometraje}
          onChange={(event) => {
            setKilometraje(event.target.value);
          }}
        /></li>

        <li><label  htmlFor="adquisicion">Adquisición:</label>
        <label className="doslabel"  htmlFor="adquisicion">Compra</label>
        <input
          id="adquisicion"
          className="inputgriddos"
          name="adquisicion"
          value={adquisicion}
          type="radio"
          onChange={(event) => {
            setAdquisicion("compra");
          }}
        />

        <label className="treslabel" htmlFor="adquisicion">Consigna</label>
        <input
          id="adquisicion"
          className="inputgridtres"
          name="adquisicion"
          value={adquisicion}
          type="radio"
          onChange={(event) => {
            setAdquisicion("consigna");
          }}
        /></li>
        
        <li> <label htmlFor="entidadplaca">Entidad Placa:</label>
        <select onChange={(event) => {
            setEntidadplaca(event.target.value);
          }} id="entidadplaca">
                    <option value="Aguascalientes">Aguascalientes</option>
                    <option value="Baja California">Baja California</option>
                    <option value="Baja California Sur">Baja California Sur</option>
                    <option value="Campeche">Campeche</option>
                    <option value="Chiapas">Chiapas</option>
                    <option value="Chihuahua">Chihuahua</option>
                    <option value="Ciudad de México">Ciudad de México</option>
                    <option value="Coahuila">Coahuila</option>
                    <option value="Colima">Colima</option>
                    <option value="Durango">Durango</option>
                    <option value="Estado de México">Estado de México</option>
                    <option value="Guanajuato">Guanajuato</option>
                    <option value="Guerrero">Guerrero</option>
                    <option value="Hidalgo">Hidalgo</option>
                    <option value="Jalisco">Jalisco</option>
                    <option value="Michoacán">Michoacán</option>
                    <option value="Morelos">Morelos</option>
                    <option value="Nayarit">Nayarit</option>
                    <option value="Nuevo León">Nuevo León</option>
                    <option value="Oaxaca">Oaxaca</option>
                    <option value="Puebla">Puebla</option>
                    <option value="Querétaro">Querétaro</option>
                    <option value="Quintana Roo">Quintana Roo</option>
                    <option value="San Luis Potosí">San Luis Potosí</option>
                    <option value="Sinaloa">Sinaloa</option>
                    <option value="Sonora">Sonora</option>
                    <option value="Tabasco">Tabasco</option>
                    <option value="Tamaulipas">Tamaulipas</option>
                    <option value="Tlaxcala">Tlaxcala</option>
                    <option value="Veracruz">Veracruz</option>
                    <option value="Yucatán">Yucatán</option>
                    <option value="Zacatecas">Zacatecas</option>
        </select></li>
        

        <li> <label htmlFor="fechaadqui">Fecha de adquisición:</label>
        <input
          id="fechaadqui"
          type="date"
          value={fechaadqui}
          onChange={(event) => {
            setFechaadqui(event.target.value);
          }}
        /></li>
      
        <li><label htmlFor="preciocompra">Precio compra:</label>
        <input
          id="preciocompra"
          value={preciocompra}
          onChange={(event) => {
            setPreciocompra(event.target.value);
          }}
        /></li>

        <li><label htmlFor="precioventa">Precio venta:</label>
        <input
          id="precioventa"
          value={precioventa}
          onChange={(event) => {
            setPrecioventa(event.target.value);
          }}
        /></li>

      <li><label htmlFor="comentarios">Comentarios:</label>
        <input
          id="comentarios"
          type="textarea"
          value={comentarios}
          onChange={(event) => {
            setComentarios(event.target.value);
          }}
        /></li>
        </ul>

      


        <section>
          <ul className="newPhotoContainer">
            <li className="imageContainer"
            >
              {images.length === 0 ? (
                < DefPhotoAuto />
              ) : (
                <section className="photo-slider-form">
                  {images.map((image, index) => {
                    return (
                      <Fragment key={index}>
                        {index === currentPhoto && (
                          <>
                            {" "}
                            <img
                              className="slider-image"
                              src={URL.createObjectURL(image)}
                              alt={`Foto de auto en venta`}
                            />
                            <button
                              type="button"
                              className="close"
                              onClick={(e) => {
                                e.preventDefault();
                                setImages(images.filter((_, i) => i !== index));
                              }}
                            >
                              X
                            </button>
                          </>
                        )}
                      </Fragment>
                    );
                  })}

                  {images.length > 1 && (
                    <>
                      <button
                        type="button"
                        className="previous_photo"
                        onClick={previousPhoto}
                      >
                        <LeftArrow />
                      </button>
                      <button
                        type="button"
                        className="next_photo"
                        onClick={nextPhoto}
                      >
                        <RightArrow />
                      </button>
                    </>
                  )}
                </section>
              )}
              {maxImages > 0 ? (
                <>
                  <input
                    id="image"
                    type="file"
                    multiple
                    hidden
                    accept="image/*"
                    onChange={handleAddImages}
                  />
                  <label className="button" htmlFor="image">
                    Selecciona hasta {maxImages} imágenes más. Haz click aquí.
                  </label>
                </>
              ) : null}
            </li>

            

            <button className="principal">Registrar vehículo</button>
          </ul>
        </section>
      </form>











      {mensajeError !== "" && <p id="mensajeError">{mensajeError}</p>}
          
      {mensaje !== "" && <p id="mensaje">{mensaje}</p>}    

    </>
   

)};

export default AutoForm;