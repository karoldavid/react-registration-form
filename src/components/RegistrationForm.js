import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import FormFields from "./FormFields";
import { registerAccountFields } from "../utils/fields";
import { MuiThemeProvider, RaisedButton } from "material-ui";

class RegistrationForm extends Component {
	onFormSubmit = params => {
		console.log(params);
	};

	render() {
		const { handleSubmit } = this.props;
		return (
			<MuiThemeProvider>
				<form onSubmit={handleSubmit(this.onFormSubmit)}>
					<h1>Register Account</h1>
					<FormFields fields={registerAccountFields} />

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
	form: "registrationForm"
})(connect()(RegistrationForm));
