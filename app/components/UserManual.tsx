import { Box, Container, Typography } from "@mui/material";
import React from "react";

const UserManual = () => {
  return (
    <Container>
      <Box sx={{ bgcolor: "background.paper", padding: { xs: 2, md: 10 } }}>
        <Typography variant="h5">
          1. The first step is user registration
        </Typography>
        <Typography variant="h5">
          2. After registration we are on a welcome page
        </Typography>
        <Typography variant="h5">3. We can check our profile</Typography>
      </Box>
    </Container>
  );
};

export default UserManual;
