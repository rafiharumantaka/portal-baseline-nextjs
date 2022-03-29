import { Box, Card, Typography } from "@mui/material";

const PageHeader = (props) => {
  return (
    <Card sx={{ width: "100%", p: 1, mb: 2 }}>
      <Typography variant="h6">{props.title}</Typography>
    </Card>
  );
};

export default PageHeader;
