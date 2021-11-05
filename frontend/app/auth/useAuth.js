import { useContext } from "react";
import AuthContext from "../auth/context";

const useAuth = () => {
	const { user, setUser } = useContext(AuthContext);

	const logIn = (data) => {
		setUser(data);
	};

	const logOut = () => {
		setUser(null);
	};
	return { user, logIn, logOut };
};

export default useAuth;
