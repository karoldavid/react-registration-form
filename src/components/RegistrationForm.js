import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import FormFields from "./FormFields";
import { MuiThemeProvider, RaisedButton } from "material-ui";
import { validate } from "../utils/helpers";

class RegistrationForm extends Component {
	onFormSubmit = params => {
		console.log(params);
	};

	render() {
		const { handleSubmit, fields } = this.props;
		return (
			<MuiThemeProvider>
				<form onSubmit={handleSubmit(this.onFormSubmit)}>
					<h1>Register Account</h1>
					<FormFields fields={fields} />

					<RaisedButton
						primary
						labelColor="#FFFFFF"
						type="submit"
						label="Submit"
						className={"submit-button"}
					/>
				</form>
			</MuiThemeProvider>
		);
	}
}

export default reduxForm({
	form: "registrationForm",
	validate
})(connect()(RegistrationForm));
