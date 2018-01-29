import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";

class RegistrationForm extends Component {
	onFormSubmit = params => {
		console.log(params);
	};

	render() {
		const { handleSubmit } = this.props;
		return (
			<div>
				<h1>Register Account</h1>
				<form onSubmit={handleSubmit(this.onFormSubmit)} />
			</div>
		);
	}
}

export default reduxForm({
	form: "registrationForm"
})(connect()(RegistrationForm));
