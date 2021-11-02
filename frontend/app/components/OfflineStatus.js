import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

function OfflineStatus() {
	const netInfo = useNetInfo();

	if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false) {
		return (
			<View style={styles.container}>
				<AppText styles={styles.text}>
					No internet connection found!
				</AppText>
			</View>
		);
	}
	return null;
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: colors.primary,
		height: 50,
		top: Constants.statusBarHeight,
		width: "100%",
		position: "absolute",
		zIndex: 1,
	},
	text: {
		color: colors.white,
	},
});

export default OfflineStatus;
