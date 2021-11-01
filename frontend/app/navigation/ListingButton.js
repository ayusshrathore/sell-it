// '+' button component

import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import { AntDesign } from "@expo/vector-icons";

function ListingButton({ onPress }) {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.container}>
				<AntDesign name="pluscircle" color={colors.white} size={30} />
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: colors.primary,
		height: 80,
		width: 80,
		borderRadius: 40,
		bottom: 30,
		borderColor: colors.white,
		borderWidth: 10,
	},
});

export default ListingButton;
