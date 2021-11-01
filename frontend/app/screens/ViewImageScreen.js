// Viewing the image on tap

import React from "react";
import {
	Image,
	StyleSheet,
	View,
	TouchableWithoutFeedback,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ViewImageScreen({ navigation, route }) {
	const image = route.params;
	return (
		<>
			<View style={styles.container}>
				<TouchableWithoutFeedback onPress={() => navigation.pop()}>
					<View style={styles.closeIcon}>
						<MaterialCommunityIcons
							name="close"
							color="white"
							size={30}
						/>
					</View>
				</TouchableWithoutFeedback>

				<View style={styles.deleteIcon}>
					<MaterialCommunityIcons
						name="trash-can-outline"
						color="white"
						size={30}
					/>
				</View>
				<Image
					resizeMode="contain"
					source={{ uri: image }}
					style={styles.image}
				/>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "black",
		flex: 1,
	},
	closeIcon: {
		width: 30,
		height: 30,
		position: "absolute",
		top: 20,
		left: 20,
	},
	deleteIcon: {
		width: 30,
		height: 30,
		position: "absolute",
		top: 20,
		right: 20,
	},
	image: {
		width: "100%",
		height: "100%",
	},
});

export default ViewImageScreen;
