import React from "react";
import { Field, FieldArray } from "redux-form";
import { TextField, FlatButton } from "material-ui";
import IconButton from "material-ui/IconButton";
import Delete from "material-ui/svg-icons/action/delete";

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
            style={{ width: 400 }}
            name={`${account}.iban`}
            type="text"
            component={renderTextField}
            label="IBAN"
          />

          <IconButton iconStyle={{ color: "red" }} onClick={() => fields.remove(index)}>
            <Delete />
          </IconButton>
        </div>
        <div>
          <Field
            style={{ width: 400 }}
            name={`${account}.bankName`}
            type="text"
            component={renderTextField}
            label="Bank name"
          />
        </div>
      </li>
    ))}
    <li>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <FlatButton
          primary
          label="+ Add bank account"
          onClick={() => fields.push({})}
        />
      </div>
      {touched && error && <span>{error}</span>}
    </li>
  </ul>
);

export const FieldArraysForm = () => {
  return <FieldArray name="accounts" component={renderAccounts} />;
};
