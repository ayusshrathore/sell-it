// Main navigator

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

import ListingsEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import ListingButton from "./ListingButton";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
	<Tab.Navigator screenOptions={{ headerShown: false }}>
		<Tab.Screen
			name="Feed"
			component={FeedNavigator}
			options={{
				tabBarIcon: ({ color, size }) => (
					<AntDesign name="home" size={size} color={color} />
				),
			}}
		/>
		<Tab.Screen
			name="ListingsEdit"
			component={ListingsEditScreen}
			options={({ navigation }) => ({
				tabBarButton: () => (
					<ListingButton
						onPress={() => navigation.navigate("ListingsEdit")}
					/>
				),
			})}
		/>
		<Tab.Screen
			name="Account"
			component={AccountNavigator}
			options={{
				tabBarIcon: ({ color, size }) => (
					<AntDesign name="user" size={size} color={color} />
				),
			}}
		/>
	</Tab.Navigator>
);

export default AppNavigator;
