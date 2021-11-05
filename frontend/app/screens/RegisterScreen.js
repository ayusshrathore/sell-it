// Register Screen

import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

import usersAPI from "../api/users";
import useAuth from "../auth/useAuth";
import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";

const validationSchema = Yup.object().shape({
	name: Yup.string().required().label("Name"),
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
	const registerApi = useApi(usersAPI.register);
	const auth = useAuth();
	const [error, setError] = useState();

	const handleSubmit = async (userInfo) => {
		// const result = await registerApi.request(userInfo);
		const result = await usersAPI.register(userInfo);
		if (!result.ok) {
			if (result.data) setError(result.data.error);
			else {
				setError("An unexpected error occurred.");
				console.log(result);
			}
			return;
		}

		auth.logIn(result.data);
	};

	return (
		<>
			<ActivityIndicator visible={registerApi.loading} />
			<Screen style={styles.container}>
				<AppForm
					initialValues={{ name: "", email: "", password: "" }}
					onSubmit={handleSubmit}
					validationSchema={validationSchema}
				>
					<AppFormField
						autoCorrect={false}
						icon="account"
						name="name"
						placeholder="Name"
					/>
					<AppFormField
						autoCapitalize="none"
						autoCorrect={false}
						icon="email"
						keyboardType="email-address"
						name="email"
						placeholder="Email"
						textContentType="emailAddress"
					/>
					<AppFormField
						autoCapitalize="none"
						autoCorrect={false}
						icon="lock"
						name="password"
						placeholder="Password"
						secureTextEntry
						textContentType="password"
					/>
					<SubmitButton title="Register" />
				</AppForm>
			</Screen>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
});

export default RegisterScreen;
