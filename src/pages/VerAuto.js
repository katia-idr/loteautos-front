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
                    <span><strong>Precio de venta</strong></span>
                </div>
                <div className="right">
                    <ul>
                        <li><strong>Version:</strong> {auto.product.version}</li>
                        <li><strong>Motor:</strong>{auto.product.motor}</li>
                        <li><strong>Km:</strong> {auto.product.kilometraje}</li>
                    </ul>
                </div>
                <div className="left">
                    {formatter.format(auto.product.preciocompra)}
                    <span><strong>Precio de adquisicion</strong></span>
                </div>
                <div className="right">
                    <ul>
                        <li><strong>Color:</strong> {auto.product.color}</li>
                        <li><strong>Tipo:</strong> {auto.product.tipo}</li>
                        <li><strong>Puertas:</strong> {auto.product.puertas}</li>
                        <li><strong>Doble traccion:</strong> {auto.product.dobletraccion}</li>
                    </ul>
                </div>
                <div className="left with-bg"></div>
                <div className="right">
                    <ul>
                        <li><strong>Placas:</strong> {auto.product.placa}</li>
                        <li>
                            <strong>Entidad de emplacado:</strong> {auto.product.entidadplaca}
                        </li>
                        <li><strong>VIN:</strong> {auto.product.vin}</li>
                        <li style={{ marginTop: "10px" }}>
                            <strong>Tipo de adquisicion:</strong> {auto.product.adquisicion}
                        </li>
                        <li><strong>Comentario:</strong> {auto.product.comentarios}</li>
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
