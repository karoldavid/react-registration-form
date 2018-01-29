const containsOnlySmallAndCapitalLetters = (value) => {
	return value.match(/^[a-zA-Z]+$/)
}

const isEmail = (value) => {
	return !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)	
}


export const validate = (values, props) => {
	const errors = {};

	const requiredFields = props.fields.reduce((previous, field) => {
		if (field.required) previous.push(field.name);
		return previous;
	}, []);

	requiredFields.forEach((field, index) => {
		if (!values[field]) {
			errors[field] = `${props.fields[index].label} is required`;
		}
	});

	if (values.firstName && !containsOnlySmallAndCapitalLetters(values.firstName)) {
		errors.firstName = "should contain only small and capital letters, no numbers, special characters, etc.";
	}
	if (values.lastName && !containsOnlySmallAndCapitalLetters(values.lastName)) {
		errors.lastName = "should contain only small and capital letters, no numbers, special characters, etc.";
	}
	
	if (
		values.email && isEmail(values.email)
	) {
		errors.email = "Value should be a valid email address";
	}

	return errors;
};