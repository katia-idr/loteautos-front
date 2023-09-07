import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

import { useTokenContext } from "../../Contexts/TokenContext";

const formatter = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
});

const paginationComponentOptions = {
    rowsPerPageText: "Filas por página",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos",
};

const columns = [
    {
        name: "Marca / Modelo / A~no",
        selector: (row) => (
         <>
            <Link to={`/autos/${row.id}`}>Ver</Link>
            {row.marca} / {row.modelo} / {row.year}
         </>
        ),
        sortable: true,
    },
    {
        name: "Color",
        selector: (row) => row.color,
        sortable: true,
    },
    {
        name: "Precio",
        selector: (row) => formatter.format(row.preciocompra),
        sortable: true,
    },
    {
        name: "Km",
        selector: (row) => row.kilometraje,
        sortable: true,
    },
    {
        name: "Placas",
        selector: (row) => row.placa,
        sortable: true,
    },
];

const ListaAutos = () => {
    const { token } = useTokenContext();
    const [autos, setAutos] = useState([]);

    useEffect(() => {
        const getAutos = async () => {
            try {
                const res = await fetch(
                    `${process.env.REACT_APP_API_URL}/autos/todos`,
                    {
                        headers: {
                            Authorization: token,
                        },
                    },
                );

                if (res.ok) {
                    const body = await res.json();
                    setAutos(body.data);
                }
            } catch (error) {
                console.error(error);
            }
        };

        getAutos();
    }, [token]);

    return (
        <>
            <DataTable
                columns={columns}
                data={autos}
                pagination
                paginationComponentOptions={paginationComponentOptions}
            />
        </>
    );
};

export default ListaAutos;
