//Listing the details about the item

import React from "react";
import { View, Image, StyleSheet } from "react-native";

import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";
import { TouchableWithoutFeedback } from "react-native";

function ListingDetailsScreen({ navigation, route }) {
	const listings = route.params;
	return (
		<View>
			<TouchableWithoutFeedback
				onPress={() => navigation.navigate("ItemImage", listings.image)}
			>
				<Image source={listings.image} style={styles.image} />
			</TouchableWithoutFeedback>
			<View style={styles.details}>
				<AppText style={styles.title}>{listings.title}</AppText>
				<AppText style={styles.price}>{listings.price}</AppText>
				<View style={styles.user}>
					<ListItem
						image={require("../assets/ayush.jpg")}
						title="Ayush Rathore"
						description="7 Items"
					/>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	image: {
		width: "100%",
		height: 300,
	},
	details: {
		padding: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: "500",
	},
	price: {
		color: colors.secondary,
		fontWeight: "bold",
		fontSize: 20,
		marginVertical: 10,
	},
	user: {
		marginTop: 20,
	},
});
export default ListingDetailsScreen;
