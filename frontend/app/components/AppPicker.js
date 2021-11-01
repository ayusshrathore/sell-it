//Picker component using in Form Picker

import React, { useState } from "react";
import {
	View,
	StyleSheet,
	TouchableWithoutFeedback,
	Modal,
	Text,
	TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import AppText from "./AppText";
import Screen from "./Screen";
import { FlatList } from "react-native-gesture-handler";
import PickerItem from "./PickerItem";

function AppPicker({ icon, placeholder, items, selectedItem, onSelectItem }) {
	const [modalVisible, setModalVisible] = useState(false);
	return (
		<>
			<TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
				<View style={styles.container}>
					{icon && (
						<MaterialCommunityIcons
							name={icon}
							size={25}
							color={colors.medium}
							style={styles.icon}
						/>
					)}
					{selectedItem ? (
						<AppText style={styles.text}>
							{selectedItem.label}
						</AppText>
					) : (
						<AppText style={{ flex: 1, color: colors.medium }}>
							{placeholder}
						</AppText>
					)}
					<MaterialCommunityIcons
						name="chevron-down"
						size={25}
						color={colors.medium}
					/>
				</View>
			</TouchableWithoutFeedback>
			<Modal visible={modalVisible} animationType="slide">
				<Screen>
					{/* <Button
						color={colors.primary}
						title="Close"
						onPress={() => setModalVisible(false)}
					/> */}
					<TouchableOpacity onPress={() => setModalVisible(false)}>
						<Text style={styles.button}>Close</Text>
					</TouchableOpacity>
					<FlatList
						data={items}
						keyExtractor={(item) => item.value.toString()}
						renderItem={({ item }) => (
							<PickerItem
								label={item.label}
								onPress={() => {
									setModalVisible(false);
									onSelectItem(item);
								}}
							/>
						)}
					/>
				</Screen>
			</Modal>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.light,
		borderRadius: 25,
		flexDirection: "row",
		width: "100%",
		padding: 15,
		marginVertical: 10,
	},
	icon: {
		marginRight: 10,
	},
	text: {
		flex: 1,
	},
	button: {
		color: colors.primary,
		fontSize: 18,
		marginLeft: "45%",
	},
});
export default AppPicker;
