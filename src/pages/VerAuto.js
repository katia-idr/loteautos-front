import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useTokenContext } from "../Contexts/TokenContext";

const formatter = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "MXN",
});

const VerAuto = () => {
    const { idAuto } = useParams();
    const { token } = useTokenContext();

    const [auto, setAuto] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAuto = async () => {
            try {
                const res = await fetch(
                    `${process.env.REACT_APP_API_URL}/auto/${idAuto}`,
                    {
                        headers: {
                            Authorization: token,
                        },
                    },
                );

                if (res.ok) {
                    const body = await res.json();
                    setAuto(body.data);
                    setLoading(false);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchAuto();
    }, [idAuto, token]);

    if (loading) return <h1>Loading...</h1>;

    console.log(auto);

    return (
        <div className="single-auto">
            <h1>
                {auto.product.marca} {auto.product.modelo} {auto.product.year}
            </h1>

            <div className="features">
                <div className="left">
                    {formatter.format(auto.product.precioventa)}
                    <span>Precio de venta</span>
                </div>
                <div className="right">
                    <ul>
                        <li>Version: {auto.product.version}</li>
                        <li>Motor: -</li>
                        <li>Km: {auto.product.kilometraje}</li>
                    </ul>
                </div>
                <div className="left">
                    {formatter.format(auto.product.preciocompra)}
                    <span>Precio de adquisicion</span>
                </div>
                <div className="right">
                    <ul>
                        <li>Color: {auto.product.color}</li>
                        <li>Tipo: {auto.product.tipo}</li>
                        <li>Puertas: -</li>
                        <li>Doble traccion: {auto.product.dobletraccion}</li>
                    </ul>
                </div>
                <div className="left with-bg"></div>
                <div className="right">
                    <ul>
                        <li>Placas: {auto.product.placa}</li>
                        <li>
                            Entidad de emplacado: {auto.product.entidadplaca}
                        </li>
                        <li>VIN: {auto.product.vin}</li>
                        <li style={{ marginTop: "10px" }}>
                            Tipo de adquisicion: {auto.product.adquisicion}
                        </li>
                        <li>Comentario: {auto.product.comentarios}</li>
                    </ul>
                </div>
            </div>

            {auto?.photos?.length > 0 && (
                <>
                    <h2>Fotos</h2>
                    <div className="images">
                        {auto.photos.map((photo) => (
                            <a
                                href={`${process.env.REACT_APP_API_URL}/${photo.name}`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={`${process.env.REACT_APP_API_URL}/${photo.name}`}
                                    alt=""
                                />
                            </a>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default VerAuto;
