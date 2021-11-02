// Form field component i.e fields in the form

import React from "react";
import AppTextInput from "../AppTextInput";
import ErrorMessage from "../forms/ErrorMessage";
import { useFormikContext } from "formik";

function AppFormField({ name, ...otherProps }) {
	//passing name and other props to the formik component
	const { setFieldTouched, setFieldValue, errors, touched, values } =
		useFormikContext(); //using formik to save above fields
	return (
		<>
			<AppTextInput
				onChangeText={(text) => setFieldValue(name, text)}
				onBlur={() => setFieldTouched(name)}
				value={values[name]}
				{...otherProps}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
			{/*passing props to error message to handle the error while filling the fields in the form*/}
		</>
	);
}

export default AppFormField;
