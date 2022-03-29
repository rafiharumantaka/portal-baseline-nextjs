import { TextField } from "@mui/material"

const CustomInput = (props) => {
  return (
    <TextField
      label={props.label}
      type={props.type}
      value={props.value}
      name={props.name}
      onChange={props.onChange}
      variant="outlined"
    />
    // <TextField
    //   label="Email"
    //   type="email"
    //   value={formValues.email}
    //   name="email"
    //   onChange={handleInputChange}
    // />
  )
}

export default CustomInput