import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AuthContext from "./app/auth/context";
import OfflineStatus from "./app/components/OfflineStatus";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import { AppLoading } from "expo";

function App() {
	const [user, setUser] = useState();
	const [ready, setReady] = useState(false);

	if (!ready) return <AppLoading onFinish={() => setReady(true)} />;

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			<OfflineStatus />
			<NavigationContainer theme={navigationTheme}>
				{user ? <AppNavigator /> : <AuthNavigator />}
			</NavigationContainer>
		</AuthContext.Provider>
	);
}

export default App;
