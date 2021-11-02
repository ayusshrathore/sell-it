import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import OfflineStatus from "./app/components/OfflineStatus";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";

function App() {
	return (
		<>
			<OfflineStatus />
			<NavigationContainer theme={navigationTheme}>
				<AuthNavigator />
				{/* <AppNavigator /> */}
			</NavigationContainer>
		</>
	);
}

export default App;
