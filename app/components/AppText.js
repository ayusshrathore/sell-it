// Text component

import React from "react";
import { Text } from "react-native";
import defaultStyle from "../components/styles";

function AppText({ children, style }) {
	return <Text style={[defaultStyle.text, style]}>{children}</Text>;
}

export default AppText;
