// Listing all the items

import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import listings from "../components/listingData.js";

function ListingScreen({ navigation }) {
	return (
		<Screen style={styles.screen}>
			<FlatList
				data={listings}
				keyExtractor={(listing) => listing.id.toString()}
				renderItem={({ item }) => (
					<Card
						title={item.title}
						price={item.price}
						image={item.image}
						onPress={() =>
							navigation.navigate("ListingsDetails", item)
						}
					/>
				)}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	screen: {
		backgroundColor: colors.light,
	},
});

export default ListingScreen;
