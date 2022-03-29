import { Card, Paper, Stack, Typography } from "@mui/material";
import { useState } from "react";
import CustomButton from "../ui/CustomButton";
import CustomInput from "../ui/CustomInput";

const AuthForm = (props) => {
  const { isLogin, defaultFormValues } = props;

  const [formValues, setFormValues] = useState(defaultFormValues);

  const formTitle = isLogin ? 'Login' : 'Register'

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault()

    if (isLogin) {
      // call login api
      console.log('is login')
    } else {
      // call register api
      console.log('is register')
    }
    console.log(formValues)
  }

  return (
    <Card component={Paper} sx={{ p: 2 }}>
      <form onSubmit={submitHandler} method="POST">
        <Stack  spacing={2}>
          <Typography variant="h5" align="center">{formTitle}</Typography>
          <CustomInput
            label="Username"
            type="text"
            value={formValues.username}
            name="username"
            onChange={handleInputChange}
          />
          <CustomInput
            label="Password"
            type="password"
            value={formValues.password}
            name="password"
            onChange={handleInputChange}
          />
          <CustomButton label={formTitle} />
        </Stack>
      </form>
    </Card>
  );
};

export default AuthForm;
