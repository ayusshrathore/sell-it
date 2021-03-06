//Posting item screen

import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import { useState } from "react";

import {
	AppForm as Form,
	AppFormField as FormField,
	AppFormPicker as Picker,
	SubmitButton,
} from "../components/forms";
import FormImagePicker from "../components/forms/FormImagePicker";
import Screen from "../components/Screen";
import listingApi from "../api/listing";
import UploadScreen from "./UploadScreen";
// import useLocation from "../hooks/useLocation";
// useLocation is not working as of now. Have to fix it

const validationSchema = Yup.object().shape({
	title: Yup.string().required().min(1).label("Title"),
	price: Yup.string().required().min(1).label("Price"),
	description: Yup.string().label("Description"),
	category: Yup.object().required().nullable().label("Category"),
	images: Yup.array().min(1, "Please select aleast one image"),
});

const categories = [
	{ label: "Furniture", value: 1 },
	{ label: "Clothing", value: 2 },
	{ label: "Camera", value: 3 },
	{ label: "Electronics", value: 4 },
	{ label: "Sports", value: 5 },
];

function ListingEditScreen() {
	const [uploadVisible, setUploadVisible] = useState(false);
	const [progress, setProgress] = useState(0);

	const handleSubmit = async (listing, { resetForm }) => {
		setProgress(0);
		setUploadVisible(true);
		const result = await listingApi.addListings({ listing }, (progress) =>
			setProgress(progress)
		);
		if (!result.ok) {
			setUploadVisible(false);
			return alert(`Could not add listing`);
		}
		resetForm();
	};
	return (
		<Screen style={styles.container}>
			<UploadScreen
				onDone={() => setUploadVisible(false)}
				progress={progress}
				visible={uploadVisible}
			/>
			<Form
				initialValues={{
					title: "",
					price: "",
					description: "",
					category: null,
					images: [],
				}}
				onSubmit={handleSubmit}
				validationSchema={validationSchema}
			>
				<FormImagePicker name="images" />
				<FormField maxLength={255} name="title" placeholder="Title" />
				<FormField
					keyboardType="numeric"
					maxLength={8}
					name="price"
					placeholder="Price"
				/>
				<Picker
					items={categories}
					name="category"
					placeholder="Category"
				/>
				<FormField
					maxLength={255}
					multiline
					name="description"
					numberOfLines={3}
					placeholder="Description"
				/>
				<SubmitButton title="Post" />
			</Form>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
		marginTop: 20,
	},
});
export default ListingEditScreen;
