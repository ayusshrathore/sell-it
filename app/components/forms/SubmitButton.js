import React from "react";
import AppButton from "../AppButton";
import { useFormikContext } from "formik";

function SubmitButton({ title }) {
	const { handleSubmit } = useFormikContext();
	return <AppButton title={title} onPress={handleSubmit} color="primary" />;
}

export default SubmitButton;
