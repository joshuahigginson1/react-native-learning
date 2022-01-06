import { useContext } from "react";
import AuthContext from "./AuthContext";
import authStorage from "./authStorage";
import jwtDecode from "jwt-decode";

export default useAuth = () => {
    const { user, setUser } = useContext(AuthContext);

    const handleLogOut = () => {
        setUser(null);
        authStorage.removeToken();
    };

    const login = (authToken) => {
        const user = jwtDecode(authToken);
        setUser(user);
        authStorage.storeToken(authToken);
    };

    return { user, setUser, handleLogOut, login };
};
