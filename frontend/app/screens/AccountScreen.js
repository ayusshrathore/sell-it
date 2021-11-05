// Account Screen

import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import ListItem from "../components/lists/ListItem";
import ListItemSeparator from "../components/lists/ListItemSeparator";

import colors from "../config/colors";
import Icon from "../components/Icon";
import Screen from "../components/Screen";
import useAuth from "../auth/useAuth";

const menuItems = [
	{
		title: "My Items",
		icon: {
			name: "format-list-bulleted",
			backgroundColor: colors.primary,
		},
	},
	{
		title: "My Messages",
		icon: {
			name: "email",
			backgroundColor: colors.secondary,
		},
		targetScreen: "Messages",
	},
];

function AccountScreen({ navigation }) {
	const { user, logOut } = useAuth();
	return (
		<Screen style={styles.screen}>
			<View style={styles.container}>
				<ListItem
					title={user.name}
					description={user.email}
					image={require("../assets/ayush.jpg")}
				/>
			</View>
			<View style={styles.container}>
				<FlatList
					data={menuItems}
					keyExtractor={(menuItem) => menuItem.title}
					ItemSeparatorComponent={ListItemSeparator}
					renderItem={({ item }) => (
						<ListItem
							title={item.title}
							// IconComponent={
							// 	<Icon
							// 		icon={item.icon.name}
							// 		backgroundColor={item.icon.backgroundColor}
							// 	/>
							// }
							onPress={() =>
								navigation.navigate(item.targetScreen)
							}
						/>
					)}
				/>
			</View>
			<ListItem
				title="Log Out"
				onPress={() => logOut()}
				// IconComponent={<Icon icon="logout" backgroundColor="#ffe66d" />}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	screen: {
		backgroundColor: colors.light,
	},
	container: {
		marginVertical: 20,
	},
});

export default AccountScreen;
