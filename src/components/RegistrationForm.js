import React, { Component } from "react";
import { connect } from "react-redux";
import { getFormSyncErrors, reduxForm } from "redux-form";
import FormFields from "./FormFields";
import { MuiThemeProvider, RaisedButton } from "material-ui";
import { validate } from "../utils/helpers";
import FieldArraysForm from "./FieldArraysForm";

class RegistrationForm extends Component {
	onFormSubmit = params => {
		console.log(params);
	};

	render() {
		const { handleSubmit, fields, errors } = this.props;
		console.log(errors.accounts)
		return (
			<MuiThemeProvider>
				<form onSubmit={handleSubmit(this.onFormSubmit)}>
					<h1>Register Account</h1>
					<FormFields fields={fields} />
					<h2>Bank Accounts</h2>
					<p>{errors.accounts ? errors.accounts._error : "" }</p>

					<FieldArraysForm />

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

const mapStateToProps = state => {
	return {
		errors: getFormSyncErrors("registrationForm")(state),
	};
};

export default reduxForm({
	form: "registrationForm",
	validate
})(connect(mapStateToProps)(RegistrationForm));
