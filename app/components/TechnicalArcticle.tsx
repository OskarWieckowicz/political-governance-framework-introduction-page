import { Box, CardMedia, Container, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
const TechnicalArcticle = () => {
  return (
    <Container>
      <Box sx={{ bgcolor: "background.paper", padding: { xs: 2, md: 10 } }}>
        <Typography variant="h4" gutterBottom>
          Architecture diagram
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="div"
            sx={{
              width: "700px",
              height: "400px",
              backgroundSize: "contain",
            }}
            image="/diagram.svg"
            title="Architecture diagram"
          />
        </Box>

        <Typography variant="h4" gutterBottom>
          Technologies used
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: "20px" }}>
          Frontend: Next.js, Material-UI <br />
          Backend: Spring Boot <br />
          Blockchain: Ethereum smart contract developed and tested using Foundry
          with Solidity <br />
          Keycloak: Authorization server <br />
          DB 1, DB 2: PostgreSQL <br />
          Deployment: Docker, GitHub Actions, AWS
        </Typography>

        <Typography variant="h4" gutterBottom>
          Smart Contract
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: "20px" }}>
          Smart Contract was written in Solidity programming language and was
          developed using Foundry - a smart contract development toolchain.
          Foundry manages your dependencies, compiles your project, runs tests,
          deploys, and lets you interact with the chain from the command-line
          and via Solidity scripts. The smart contract contains two methods -
          &apos;pay&apos; and &apos;withdraw&apos;. &apos;Pay&apos; method
          requires tax identifier and ether. It logs payment events and locks
          sent eth into the smart contract. &apos;Withdraw&apos; method can be
          called by the smart contract owner and it sends ethers stored in the
          smart contract to the owner&apos;s wallet address. Smart Contracts
          instances were deployed to Sepolia Testnet using Remix.
        </Typography>

        <Typography variant="h4" gutterBottom>
          Frontend
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: "20px" }}>
          Frontend was built using next js 13 and material UI for styling.
          Authentication mechanisms rely on NextAuth and Keycloak provider. For
          chart visualization rechart. Interaction with the smart contract
          leverages Ethers.js and necessitates Metamask integration.
        </Typography>

        <Typography variant="h4" gutterBottom>
          Backend
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: "20px" }}>
          The backend functions as a Spring Boot application structured into two
          Maven modules: the &apos;core&apos; module encompassing fundamental
          functionalities and the &apos;spi&apos; module housing the Keycloak
          Service Provider Interfaces. Within its security framework, Spring
          Boot relies on OAuth2 for robust authentication, mandating
          Keycloak&apos;s authorization mechanisms to grant access to its
          endpoints. This integration ensures secure and controlled interactions
          with the application&apos;s resources.
        </Typography>

        <Typography variant="body2" sx={{ marginBottom: "20px" }}>
          The application utilizes two distinct databases for different
          purposes: one dedicated solely to Keycloak, housing Keycloak&apos;s
          tables and user-related data, and another dedicated to the
          application&apos;s business logic. The Keycloak-specific database
          serves as the repository for user information, which is fetched by
          Spring Boot for authentication and association with data from its own
          database.
        </Typography>

        <Typography variant="body2" sx={{ marginBottom: "20px" }}>
          Communication with the blockchain is facilitated through the Web3J
          library, which provides a CLI tool enabling the generation of a Smart
          Contract Java wrapper class. Once this class is generated, a listener
          can be executed to actively monitor contract events, extract payment
          data from logs, and securely store it in an independent database.
          Moreover, Web3J&apos;s functionalities extend to retrieving ETH
          balances associated with specified addresses, enhancing the
          application's blockchain interactions.
        </Typography>

        <Typography variant="body2" sx={{ marginBottom: "20px" }}>
          For real-time ETH/USD price updates, our application leverages a
          scheduler that periodically fetches this essential data from the Coin
          API. To comply with API request limits, the database undergoes updates
          every 15 minutes.
        </Typography>

        <Typography variant="body2" sx={{ marginBottom: "20px" }}>
          Furthermore, the Spring Boot application seamlessly integrates with
          AWS S3 for efficient and secure storage of user documents. To maintain
          code integrity and reliability, the test environment was configured so
          that when running the pipeline in github actions, the database run in
          Test Containers.
        </Typography>

        <Typography variant="h4" gutterBottom>
          Keycloak
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: "20px" }}>
          Keycloak undergoes customization through themes and SPIs. A custom
          registration form theme and two SPIs are implemented. The first SPI
          validates custom attributes in the registration form, while the second
          generates a tax ID assigned to users post-registration.
        </Typography>

        <Typography variant="h4" gutterBottom>
          Local development
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: "20px" }}>
          For local development Docker Compose is used to run databases and
          keycloak. It copies themes, SPIs and imports realms to the keycloak.
        </Typography>

        <Typography variant="h4" gutterBottom>
          Deployment to AWS
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: "20px" }}>
          The deployment process is automated by using github actions. It
          deploys spring boot and keycloak apps to AWS ECS on a new tag. At
          first Farget was used but it is not part of a AWS Free Tier and the
          deployment transitioned to EC2. NAT Gateway facilitates communication
          between the Spring Boot service, Keycloak, and the Coin API.
        </Typography>
        <Typography variant="body2">
          The frontend application operates on AWS Amplify and undergoes
          redeployment with every push to the main branch. Databases are hosted
          on RDS. Services operate behind load balancers, utilizing a custom
          domain, and strictly adhere to the HTTPS protocol for secure data
          transmission.
        </Typography>
      </Box>
    </Container>
  );
};

export default TechnicalArcticle;
