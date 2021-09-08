// Messages screen

import React, { useState } from "react";
import { FlatList, View } from "react-native";
import ListItem from "../components/lists/ListItem";
import ListItemDelete from "../components/lists/ListItemDelete";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import Screen from "../components/Screen";

const initialMessages = [
	{
		id: "1",
		title: "Ayush Rathore",
		description: "Hey, Can we bargain on this item?",
		image: require("../assets/ayush.jpg"),
	},
	{
		id: "2",
		title: "Piyush Rathore",
		description: "Would you like to meet to exchange the item?",
		image: require("../assets/ayush.jpg"),
	},
	{
		id: "3",
		title: "Lorem Ipsum",
		description: "Hey, Can you please text me your address",
		image: require("../assets/ayush.jpg"),
	},
];
function MessageScreen(props) {
	const [messages, setMessages] = useState(initialMessages);
	const [refresh, setRefresh] = useState(false);
	const handleDelete = (message) => {
		setMessages(messages.filter((m) => m.id !== message.id));
	};
	return (
		<Screen>
			<FlatList
				data={messages}
				keyExtractor={(message) => message.id.toString()}
				renderItem={({ item }) => (
					<ListItem
						title={item.title}
						description={item.description}
						image={item.image}
						onPress={() => console.log(item)}
						renderRightActions={() => (
							<ListItemDelete
								onPress={() => handleDelete(item)}
							/>
						)}
					/>
				)}
				ItemSeparatorComponent={ListItemSeparator}
				refreshing={refresh}
				onRefresh={() => {
					setMessages([
						{
							id: "1",
							title: "Ayush Rathore",
							description: "Hey, Can we bargain on this item?",
							image: require("../assets/ayush.jpg"),
						},
					]);
				}}
			/>
		</Screen>
	);
}

export default MessageScreen;
