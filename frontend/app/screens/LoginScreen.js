//Login Screen

import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import Screen from "../components/Screen";
import * as Yup from "yup";
import {
	AppForm,
	AppFormField,
	ErrorMessage,
	SubmitButton,
} from "../components/forms/index.js";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(4).label("Password"),
});
function LoginScreen() {
	const { logIn } = useAuth();
	const [loginFailed, setLoginFailed] = useState(false);

	const handleSubmit = async ({ email, password }) => {
		const result = await authApi.login(email, password);
		if (!result.ok) return setLoginFailed(true);
		setLoginFailed(false);
		console.log(result.data);
		logIn(result.data);
	};
	return (
		<Screen style={styles.container}>
			<Image
				source={require("../assets/logo-red.png")}
				style={styles.logo}
			/>
			<AppForm
				initialValues={{ email: "", password: "" }}
				onSubmit={handleSubmit}
				validationSchema={validationSchema}
			>
				<ErrorMessage
					error="Invalid email or password"
					visible={loginFailed}
				/>
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
