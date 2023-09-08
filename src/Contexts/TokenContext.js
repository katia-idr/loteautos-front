import { createContext, useContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const TokenContext = createContext();

export const CustomTokenContextProvider = ({ children }) => {
    const [token, setToken] = useLocalStorage("token");
    const [loggedUser, setLoggedUser] = useState(null);

    useEffect(() => {
        if (!token) {
            setLoggedUser(null);
            return;
        }

        const fetchUser = async () => {
            try {
                const res = await fetch(
                    `${process.env.REACT_APP_API_URL}/user`,
                    { headers: { Authorization: token } },
                );

                const body = await res.json();

                if (!res.ok) {
                    throw new Error(body.message);
                }

                setLoggedUser(body.data);
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchUser();
    }, [token]);

    return (
        <TokenContext.Provider
            value={{ token, setToken, loggedUser, setLoggedUser }}
        >
            {children}
        </TokenContext.Provider>
    );
};

export const useTokenContext = () => {
    const { token, setToken, loggedUser, setLoggedUser } =
        useContext(TokenContext);

    const logout = () => {
        setToken("");
        setLoggedUser(null);
    };

    return { token, setToken, loggedUser, setLoggedUser, logout };
};
