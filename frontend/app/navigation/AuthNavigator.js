// Login and Register screen navigator

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => (
	<Stack.Navigator>
		<Stack.Screen
			name="Welcome"
			component={WelcomeScreen}
			options={{ headerShown: false }}
		></Stack.Screen>
		<Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
		<Stack.Screen name="Register" component={RegisterScreen}></Stack.Screen>
	</Stack.Navigator>
);

export default AuthNavigator;
