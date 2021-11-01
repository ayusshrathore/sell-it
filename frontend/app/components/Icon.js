// Icon component

import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Icon({ icon, size = "30", backgroundColor, iconColor = "white" }) {
	return (
		<View
			style={{
				width: size,
				height: size,
				borderRadius: size / 2,
				backgroundColor,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<MaterialCommunityIcons
				name={icon}
				color={iconColor}
				size={size * 0.5}
			/>
		</View>
	);
}

export default Icon;
