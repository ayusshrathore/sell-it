// Button component

import React from "react";
import {
	View,
	StyleSheet,
	Text,
	Touchable,
	TouchableOpacity,
} from "react-native";

import colors from "../config/colors";

function AppButton({ title, onPress, color }) {
	return (
		<TouchableOpacity
			style={[styles.button, { backgroundColor: colors[color] }]}
			onPress={onPress}
		>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		borderRadius: 25,
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: 50,
		marginVertical: 5,
	},
	text: {
		color: colors.white,
		fontSize: 15,
		textTransform: "uppercase",
		fontWeight: "bold",
	},
});
export default AppButton;
