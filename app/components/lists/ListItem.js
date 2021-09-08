//Component for Listing items in the feed

import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import colors from "../../config/colors";
import AppText from ".././AppText";
import { Swipeable } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ListItem({
	//passing the props
	title,
	description,
	image,
	IconComponent,
	onPress,
	renderRightActions,
}) {
	return (
		<Swipeable renderRightActions={renderRightActions}>
			{/*rendering actions on right swipe*/}
			<TouchableHighlight onPress={onPress} underlayColor={colors.light}>
				<View style={styles.container}>
					{IconComponent}
					{image && <Image source={image} style={styles.image} />}
					<View
						style={{
							marginLeft: 10,
							justifyContent: "center",
							flex: 1,
						}}
					>
						<AppText style={styles.title} numberOfLines={1}>
							{title}
						</AppText>
						{description && (
							<AppText
								style={styles.description}
								numberOfLines={1}
							>
								{description}
							</AppText>
						)}
					</View>
					<MaterialCommunityIcons
						name="chevron-right"
						size={25}
						color={colors.medium}
					/>
				</View>
			</TouchableHighlight>
		</Swipeable>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		flexDirection: "row",
		padding: 15,
		backgroundColor: colors.white,
	},
	image: {
		width: 50,
		height: 50,
		borderRadius: 25,
		marginRight: 10,
	},
	title: {
		fontWeight: "500",
		fontSize: 18,
	},
	description: {
		color: colors.medium,
		fontSize: 15,
	},
});
export default ListItem;
