// importing yup to validate form fields
import * as Yup from "yup";


// Define a custom test function for Yup
const notStartsWith01 = (value) => {
	return value && !['0', '1'].includes(value.charAt(0));
};

// creating an schema for the user's personal details
export const personalDetailSchema = Yup.object().shape({
	name: Yup.string().min(3, "Too Short!").required("required"),
	age: Yup.number().required("required").positive().integer(),
	sex: Yup.string().oneOf(["male", "female"]),
	moblie: Yup.string().length(10),

	idType: Yup.string().oneOf(["aadhar", "pan"]),
	idNumber: Yup.string().when('idType', {
		is: 'aadhar',
		then: Yup.string()
			.length(12, 'Must be 12 digits for Aadhar')
			.matches(/^\d+$/, 'Must be a numeric value')
			.test({
				name: 'not-starts-with-01',
				message: 'Should not start with 0 or 1',
				test: notStartsWith01,
			})
			.required('Required'),
		otherwise: Yup.string()
			.length(10, 'Must be 10 characters for PAN')
			.required('Required'),
	}),
});
