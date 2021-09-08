// Home Screen

import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import AppButton from "../components/AppButton";
import colors from "../config/colors";

function WelcomeScreen({ navigation }) {
	return (
		<>
			<ImageBackground
				blurRadius={5}
				source={require("../assets/background.jpg")}
				style={styles.bg}
			>
				<View style={styles.logoContainer}>
					<Image
						source={require("../assets/logo-red.png")}
						style={styles.logo}
					/>
					<Text style={styles.logoText}>
						Sell what you don't need!
					</Text>
				</View>
				<View style={styles.buttonContainer}>
					<AppButton
						title="Login"
						onPress={() => console.log("Login")}
						color="primary"
						onPress={() => navigation.navigate("Login")}
					/>
					<AppButton
						title="Register"
						onPress={() => console.log("Register")}
						color="secondary"
						onPress={() => navigation.navigate("Register")}
					/>
				</View>
			</ImageBackground>
		</>
	);
}

const styles = StyleSheet.create({
	bg: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
	},
	buttonContainer: {
		padding: 20,
		width: "100%",
	},
	logo: {
		height: 100,
		width: 100,
	},
	logoContainer: {
		position: "absolute",
		top: 70,
		alignItems: "center",
	},
	logoText: {
		marginTop: 10,
		fontSize: 20,
		fontWeight: "bold",
		color: colors.primary,
	},
});

export default WelcomeScreen;
