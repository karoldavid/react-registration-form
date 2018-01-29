import React, { Component } from "react";
import { Field, FieldArray } from "redux-form";
import { TextField, FlatButton } from "material-ui";

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);

const renderAccounts = ({ fields, meta: { touched, error } }) => (
  <ul>
    {fields.map((account, index) => (
      <li key={index}>
        <div>
          <Field
            name={`${account}.iban`}
            type="text"
            component={renderTextField}
            label="IBAN"
          />
        </div>
        <div>
          <Field
            name={`${account}.bankName`}
            type="text"
            component={renderTextField}
            label="Bank name"
          />
        </div>
        <FlatButton
          secondary
          label="- Remove bank account"
          onClick={() => fields.remove(index)}
        />
      </li>
    ))}
    <li>
      <FlatButton
        primary
        label="+ Add bank account"
        onClick={() => fields.push({})}
      />
      {touched && error && <span>{error}</span>}
    </li>
  </ul>
);

export default class FieldArraysForm extends Component {
  render() {
    return <FieldArray name="accounts" component={renderAccounts} />;
  }
}
