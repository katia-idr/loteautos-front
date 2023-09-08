import { useState } from "react";
import { toast } from "react-toastify";
import { useTokenContext } from "../../Contexts/TokenContext";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { setToken } = useTokenContext();
    const navigate = useNavigate();
    const [mensaje, setMensaje] = useState("");
    const [mensajeError, setMensajeError] = useState("");

    return (
        <>
            <p>Introduce tu email y password.</p>
            <form
                className="loginForm"
                onSubmit={async (event) => {
                    try {
                        event.preventDefault();

                        const res = await fetch(
                            `${process.env.REACT_APP_API_URL}/login`,
                            {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({ email, password }),
                            },
                        );

                        const body = await res.json();

                        if (!res.ok) {
                            throw new Error(body.message);
                        }

                        setToken(body.authToken);
                        setMensaje(
                            "Has iniciado sesión. ¡Bienvenido a Anabit!",
                        );
                        setTimeout(() => {
                            navigate("/");
                        }, 2500);
                    } catch (error) {
                        console.error(error.message);
                        setMensajeError(error.message);
                        setTimeout(() => {
                            setMensajeError("");
                        }, 2500);
                        toast.error(error.message);
                    }
                }}
            >
                <ul>
                    <li>
                        <label htmlFor="email">Email:</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}
                        />
                    </li>

                    <li>
                        <label htmlFor="password">Password:</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(event) => {
                                setPassword(event.target.value);
                            }}
                        />
                    </li>

                    </ul>
                        <button className="principal">Entrar a Anabit</button>

                        {mensaje !== "" && <p>{mensaje}</p>}
                        {mensajeError !== "" && <p>{mensajeError}</p>}
                    

            </form>
        </>
    );
};

export default LoginForm;
