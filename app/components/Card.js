// Card component for displaying in feed

import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function Card({ title, price, image, onPress }) {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.card}>
				<Image source={image} style={styles.image} />
				<View style={styles.details}>
					<AppText style={styles.title}>{title}</AppText>
					<AppText style={styles.price}>{price}</AppText>
				</View>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	card: {
		borderRadius: 15,
		backgroundColor: colors.white,
		marginBottom: 20,
		overflow: "hidden",
		width: "90%",
		marginLeft: 20,
		marginTop: 20,
	},
	image: {
		width: "100%",
		height: 200,
	},
	details: {
		padding: 20,
	},
	title: {
		marginBottom: 10,
	},
	price: {
		color: colors.secondary,
		fontWeight: "bold",
		fontSize: 18,
	},
});
export default Card;
