import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const Info = () => {
  return (
    <Container>
      <Box sx={{ bgcolor: "background.paper", padding: { xs: 2, md: 10 } }}>
        <Typography gutterBottom>
          This page presents a project I created. The goal was to create a
          project for the portfolio and at the same time learn some new
          technologies. It is a prototype intended to illustrate the potential
          and functionality of individual technologies. Use the navigation above
          to learn more about the project.
        </Typography>
        <Typography>The project itself can be found here:</Typography>
        <Button>
          <Link
            target="_blank"
            href="https://www.political-governance-framework.com/"
            color="blue"
          >
            See the project
          </Link>
        </Button>
        <Typography>
          If you have any questions you can contact me here:
        </Typography>
        <Button>
          <Link
            target="_blank"
            href="https://pl.linkedin.com/in/oskar-wi%C4%99ckowicz-04b138201"
            color="blue"
          >
            LinkedIn
          </Link>
        </Button>
      </Box>
    </Container>
  );
};

export default Info;
