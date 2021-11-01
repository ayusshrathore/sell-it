// Listing all the items

import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import { useState, useEffect } from "react";
import listingAPI from "../api/listingAPI";
import AppText from "../components/AppText";
import Button from "../components/AppButton";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";
// import listings from "../components/listingData.js";

function ListingScreen({ navigation }) {
	const {
		data: listings,
		error,
		loading,
		request: loadListing,
	} = useApi(listingAPI.getListings);

	useEffect(() => {
		loadListing();
	}, []);

	return (
		<Screen style={styles.screen}>
			{error && (
				<>
					<AppText>Couldn't fetch the items.</AppText>
					<Button
						title="Retry"
						onPress={loadListing}
						color="primary"
					/>
				</>
			)}
			<ActivityIndicator visible={loading} />
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
