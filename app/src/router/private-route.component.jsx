import useGlobalUserLogin from "../contexts/user-login.context";
import { Navigate } from "react-router-dom";

export function PrivateRoute({ Screen }) {
    const [userLogin] = useGlobalUserLogin()

    if (userLogin) {
        return <Screen />
    }

    return <Navigate to="/" />

}