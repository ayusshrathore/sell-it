// Basic screen component for displaying other components

import React from "react";
import { View } from "react-native";
import Constants from "expo-constants";

function Screen({ children, style }) {
	return (
		<View
			style={[{ paddingTop: Constants.statusBarHeight, flex: 1 }, style]}
		>
			{children}
		</View>
	);
}

export default Screen;
