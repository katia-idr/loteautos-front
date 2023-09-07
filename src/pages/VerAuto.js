import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useTokenContext } from "../Contexts/TokenContext";

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
            }catch(error) {
                console.log(error);
            }
        };

        fetchAuto();
    }, [idAuto, token]);

    if (loading) return <h1>Loading...</h1>;

    console.log(auto);

    return <h1>Auto ID: {idAuto}</h1>;
};

export default VerAuto;