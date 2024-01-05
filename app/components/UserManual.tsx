import { Box, CardMedia, Container, Typography } from "@mui/material";
import React from "react";

const UserManual = () => {
  return (
    <Container>
      <Box sx={{ bgcolor: "background.paper", padding: { xs: 1, md: 5 } }}>
        <Typography variant="h5">
          1. The first step is user registration
        </Typography>
        <CardMedia
          component="div"
          sx={{
            width: "100%",
            paddingTop: "calc(100% * 600 / 1050)",
            backgroundPosition: "center",
          }}
          image="/screen1.png"
          title="Screen1"
        />
        <CardMedia
          component="div"
          sx={{
            width: "100%",
            paddingTop: "calc(100% * 600 / 1050)",
            backgroundPosition: "center",
          }}
          image="/screen2.png"
          title="Screen4"
        />
        <CardMedia
          component="div"
          sx={{
            width: "100%",
            paddingTop: "calc(100% * 600 / 1050)",
            backgroundPosition: "center",
          }}
          image="/screen3.png"
          title="Screen3"
        />
        <CardMedia
          component="div"
          sx={{
            width: "100%",
            paddingTop: "calc(100% * 600 / 1050)",
            backgroundPosition: "center",
          }}
          image="/screen4.png"
          title="Screen4"
        />
        <Typography variant="h5">
          2. After registration we are on a welcome page
        </Typography>
        <CardMedia
          component="div"
          sx={{
            width: "100%",
            paddingTop: "calc(100% * 600 / 1050)",
            backgroundPosition: "center",
          }}
          image="/screen5.png"
          title="Screen5"
        />
        <CardMedia
          component="div"
          sx={{
            width: "100%",
            paddingTop: "calc(100% * 600 / 1050)",
            backgroundPosition: "center",
          }}
          image="/screen6.png"
          title="Screen6"
        />
        <CardMedia
          component="div"
          sx={{
            width: "100%",
            paddingTop: "calc(100% * 600 / 1050)",
            backgroundPosition: "center",
          }}
          image="/screen7.png"
          title="Screen7"
        />
        <Typography variant="h5">3. We can check our profile</Typography>
      </Box>
    </Container>
  );
};

export default UserManual;
