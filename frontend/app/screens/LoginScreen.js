//Login Screen

import React from "react";
import { StyleSheet, Image } from "react-native";
import Screen from "../components/Screen";
import * as Yup from "yup";
import {
	AppForm,
	AppFormField,
	SubmitButton,
} from "../components/forms/index.js";

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(4).label("Password"),
});
function LoginScreen(props) {
	return (
		<Screen style={styles.container}>
			<Image
				source={require("../assets/logo-red.png")}
				style={styles.logo}
			/>
			<AppForm
				initialValues={{ email: "", password: "" }}
				onSubmit={(values) =>
					console.log(values.email, values.password)
				}
				validationSchema={validationSchema}
			>
				<AppFormField
					placeholder="Email"
					icon="email"
					autoCapitalize="none"
					autoCorrect={false}
					keyboardType="email-address"
					name="email"
				/>
				<AppFormField
					autoCapitalize="none"
					autoCorrect={false}
					placeholder="Password"
					icon="lock"
					secureTextEntry
					name="password"
				/>
				<SubmitButton title="Login" />
			</AppForm>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
	logo: {
		width: 80,
		height: 80,
		alignSelf: "center",
		marginTop: 100,
		marginBottom: 20,
	},
});

export default LoginScreen;
