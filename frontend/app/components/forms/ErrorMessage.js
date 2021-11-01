// Error message component for displaying errors while filling form fields

import React from "react";
import AppText from "../AppText";
import { StyleSheet } from "react-native";

function ErrorMessage({ error, visible }) {
	if (!visible || !error) return null;
	return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
	error: {
		color: "red",
		fontSize: 15,
	},
});
export default ErrorMessage;
