import { useEffect, useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import { useDebounce } from "@uidotdev/usehooks";

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

const stringSort = (a, b) => a?.toLowerCase()?.localeCompare(b.toLowerCase());

const columns = [
    {
        name: "Marca / Modelo / A~no",
        selector: (row) => (
            <>
                <Link to={`/autos/${row.id}`}>Ver</Link> - {row.marca} /{" "}
                {row.modelo} / {row.year}
            </>
        ),
        sortable: true,
        sortFunction: (a, b) =>
            stringSort(
                `${a.marca} / ${a.modelo} / ${a.year}`,
                `${b.marca} / ${b.modelo} / ${b.year}`,
            ),
    },
    {
        name: "Color",
        selector: (row) => row.color,
        sortable: true,
        sortFunction: (a, b) => stringSort(a.color, b.color),
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
        sortFunction: (a, b) => stringSort(a.placa, b.placa),
    },
];

const ListaAutos = () => {
    const { token } = useTokenContext();
    const [autos, setAutos] = useState([]);
    const [search, setSearch] = useState("");
    const debouncedSearch = useDebounce(search, 300);

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

    const filteredItems = useMemo(() => {
        if (debouncedSearch === "") return autos;

        return autos.filter((auto) => {
            return (
                auto.marca
                    ?.toLowerCase()
                    .includes(debouncedSearch.toLowerCase()) ||
                auto.modelo
                    ?.toLowerCase()
                    .includes(debouncedSearch.toLowerCase()) ||
                auto.year?.toString().includes(debouncedSearch.toLowerCase()) ||
                auto.color
                    ?.toLowerCase()
                    .includes(debouncedSearch.toLowerCase()) ||
                auto.placa
                    ?.toLowerCase()
                    .includes(debouncedSearch.toLowerCase())
            );
        });
    }, [autos, debouncedSearch]);

    return (
        <>
            <div className="filter-container">
                <label>
                    Buscar:
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </label>
            </div>
            <DataTable
                columns={columns}
                data={filteredItems}
                pagination
                paginationComponentOptions={paginationComponentOptions}
            />
        </>
    );
};

export default ListaAutos;
