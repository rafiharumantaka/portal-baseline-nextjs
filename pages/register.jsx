import { Box, Container, Typography } from "@mui/material";
import AuthForm from "../components/auth/AuthForm";

const defaultValues = {
  username: "",
  password: "",
};

const RegisterPage = (props) => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Container sx={{ margin: "auto", maxWidth: "sm" }}>
        <AuthForm isLogin={false} defaultFormValues={defaultValues} />
      </Container>
    </Box>
  );
};

export default RegisterPage;
