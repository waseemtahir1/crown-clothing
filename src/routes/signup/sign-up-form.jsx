import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";

const defaultFormValues = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormValues);

  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign up with your Email and password</h1>
      <form onSubmit={() => {}}>
        <TextField
          required
          label="Display Name"
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />

        <label>Display Name</label>
        <input
          required
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <label>Email</label>
        <input required type="email" />

        <label>Password</label>
        <input required type="password" />

        <label>Confirm Password</label>
        <input required type="password" />

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};
