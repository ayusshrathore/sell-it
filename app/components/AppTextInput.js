// Input component

import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import defaultStyle from "../components/styles";

function AppTextInput({ icon, ...otherProps }) {
	return (
		<View style={styles.container}>
			{icon && (
				<MaterialCommunityIcons
					name={icon}
					size={25}
					color={colors.medium}
					style={styles.icon}
				/>
			)}
			<TextInput
				placeholderTextColor={colors.medium}
				style={defaultStyle.text}
				{...otherProps}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.light,
		borderRadius: 25,
		flexDirection: "row",
		width: "100%",
		padding: 15,
		marginVertical: 10,
	},
	icon: {
		marginRight: 10,
	},
});
export default AppTextInput;
