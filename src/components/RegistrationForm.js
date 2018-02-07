import React, { Component } from "react";
import { connect } from "react-redux";
import { getFormSyncErrors, reduxForm } from "redux-form";
import FormFields from "./FormFields";
import { MuiThemeProvider, Card, RaisedButton } from "material-ui";
import { validate } from "../utils/helpers";
import { FieldArraysForm } from "./FieldArraysForm";

class RegistrationForm extends Component {
	state = {
		submit: false
	};

	onSubmitClick = () => {
		this.setState({ submit: true });
	};

	onFormSubmit = params => {
		console.log(params);
		alert(`Form Data: ${JSON.stringify(params)}`);
		// dispatch sumbitData action and resetForm Data in callback
		this.props.reset();
	};

	render() {
		const { handleSubmit, fields, errors } = this.props;

		return (
			<MuiThemeProvider>
				<div
					style={{
						display: "flex",
						justifyContent: "center"
					}}
				>
					<Card
						style={{
							display: "flex",
							justifyContent: "center",
							width: "40vw",
							marginTop: 25
						}}
					>
						<form onSubmit={handleSubmit(this.onFormSubmit)}>
							<h1>Register Account</h1>
							<FormFields fields={fields} />
							<h2>Bank Accounts</h2>
							<p style={{ color: "red" }}>
								{errors.accounts && this.state.submit
									? errors.accounts._error
									: ""}
							</p>

							<FieldArraysForm />
							<div
								style={{
									display: "flex",
									justifyContent: "flex-end",
								}}
							>
								<RaisedButton 
									style={{ marginBottom: 20}}
									primary
									labelColor="#FFFFFF"
									type="submit"
									label="Submit"
									className={"submit-button"}
									onClick={this.onSubmitClick}
								/>
							</div>
						</form>
					</Card>
				</div>
			</MuiThemeProvider>
		);
	}
}

const mapStateToProps = state => {
	return {
		errors: getFormSyncErrors("registrationForm")(state)
	};
};

export default reduxForm({
	form: "registrationForm",
	validate
})(connect(mapStateToProps)(RegistrationForm));
