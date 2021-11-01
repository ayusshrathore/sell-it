// Form component for the App

import React from "react";
import { Formik } from "formik"; //used formik library for forms
function AppForm({ initialValues, validationSchema, onSubmit, children }) {
	return (
		<Formik //made formik component due to the weird syntax(includes function inside the component)
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={validationSchema}
		>
			{() => <>{children}</>}
			{/*passing all the functions as children of this component*/}
		</Formik>
	);
}

export default AppForm;
