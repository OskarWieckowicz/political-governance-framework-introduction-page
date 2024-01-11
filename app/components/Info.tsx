import { Alert, Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const Info = () => {
  return (
    <Container>
      <Box sx={{ bgcolor: "background.paper", padding: { xs: 2, md: 10 } }}>
        <Typography variant="h4" gutterBottom>
          Info
        </Typography>
        <Typography gutterBottom>
          This page presents a project I created. The goal was to create a
          project for the portfolio and at the same time learn some new
          technologies. It is a prototype intended to illustrate the potential
          and functionality of individual technologies. Use the navigation above
          to learn more about the project.
        </Typography>
        <Typography>The project itself can be found here:</Typography>
        <Button size="large">
          <Link
            target="_blank"
            href="https://www.political-governance-framework.com/"
          >
            See the project
          </Link>
        </Button>
        <Alert severity="info">
          The website may be temporarily inactive if AWS Free Tier limits have
          been exceeded.
        </Alert>
        <Typography>
          If you have any questions you can contact me here:
        </Typography>
        <Button size="large">
          <Link
            target="_blank"
            href="https://pl.linkedin.com/in/oskar-wi%C4%99ckowicz-04b138201"
          >
            LinkedIn
          </Link>
        </Button>
        <Typography variant="h4" gutterBottom>
          Conclusions
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "20px" }}>
          The subject matter was quite complicated and required a deep analysis
          of political and economic aspects, which took a significant amount of
          time. However, if I were to create a common topic, such as an app for
          ordering food, I wouldn't have as much motivation to create it. The
          ideological nature of the project was important to me. Paying taxes
          with cryptocurrency is not currently practiced in any country, which
          meant I had to carefully consider more aspects than the common
          solutions I could follow. Moreover there is no point in looking at the
          project through the prism of the applicable law in Poland, because it
          certainly does not allow for the introduction of a similar tax payment
          system.
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "20px" }}>
          After completing this project, I noticed a few key takeaways.
          Regularity turned out to be key when working on such projects. The
          more systematically you work on a project, the better. There were
          times when I didn't make progress for a month, which resulted in a
          loss of momentum and difficulty returning to work.
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "20px" }}>
          Another conclusion is that it is worth sticking to simplicity at the
          beginning of a project. At the beginning, I approached the topic in
          such a way that I wanted to use specific technologies and forcefully
          find applications for them, which turned out to be disastrous when
          planning the project. This was in contrast to the approach used in
          commercial projects, where the priority is that everything works as
          required and is done in the simplest way possible. It is better to
          start with an MVP and gradually develop the application. Ultimately, I
          gave up on many technologies that complicated the project and did not
          add significant value. Nevertheless, I wanted to learn a few
          technologies in practice, so they were included in the project.
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "20px" }}>
          When it comes to technologies, I gained a lot of experience, including
          learning about Next.js - an extension of React with server side
          rendering. I like imposing a project structure on pure React. However,
          server-side rendering itself does add some complexity to development,
          especially in a prototype application where the performance benefits
          may not be as important. In addition, I also learned about the library
          of ready-made components - Material UI.
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "20px" }}>
          Another technology learned is foundry - a tool for developing smart
          contracts. I appreciated the ability to write tests in Solidity
          instead of JavaScript, which set this approach apart from the
          competition.
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "20px" }}>
          Generally speaking, building the frontend, backend and smart contract
          did not cause me any major problems. I encountered the most
          difficulties with Keycloak customization and deployment of the entire
          project on AWS.
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "20px" }}>
          Keycloak is an open source authorization server that comes out with a
          lot of ready-to-use functionality like admin panel, login and
          registration forms, etc. It is a very powerful tool and its
          configuration was quite hard because the documentation is poor. I
          think it is not worth using for small projects, but has potential in
          larger organizations with many applications.
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "20px" }}>
          When it comes to AWS, I spent a lot of time deploying the application.
          It's a powerful tool, but it requires setting up a lot of parameters
          and permissions, which can be time-consuming. This type of project
          will not use the full potential of AWS. It is a fantastic solution but
          quite expensive.
        </Typography>
      </Box>
    </Container>
  );
};

export default Info;
