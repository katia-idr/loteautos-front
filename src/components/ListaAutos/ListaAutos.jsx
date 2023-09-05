import { useEffect, useState } from "react";
import { useTokenContext } from "../../Contexts/TokenContext";

const ListaAutos = () => {

  const {token} = useTokenContext();
  const [autos, setAutos] = useState([]);

  const getAutos = async() => {
   try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/autos/todos`,{
         headers: {
            "Authorization": token
         }
      })

      if (res.ok) {
         const body = await res.json()
         setAutos(body.data)
      }
      
   } catch (error) {
      console.error(error)
   }
  };

  useEffect(()=>{
   getAutos()
  },[])

  return (
    <>
    <h2>Lista de Autos</h2>
     {autos?.map((auto)=>{
      return(
         <div>
            <p>{auto.placa}</p>
            <p>{auto.vin}</p>
            <p>{auto.kilometraje}</p>
         </div>
      )
     })}
    </>
  );
};

export default ListaAutos;
