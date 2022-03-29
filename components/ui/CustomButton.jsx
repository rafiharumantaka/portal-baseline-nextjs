import { Button } from "@mui/material";

const CustomButton = (props) => {
  return <Button variant="outlined" type="submit">{props.label}</Button>;
};

export default CustomButton;
