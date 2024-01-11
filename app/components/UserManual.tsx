import { Box, CardMedia, Container, Typography } from "@mui/material";
import React from "react";

const UserManual = () => {
  const CustomCardMedia = (props: { image: string }) => (
    <CardMedia
      component="div"
      sx={{
        width: "100%",
        paddingTop: "calc(100% * 600 / 1050)",
        backgroundPosition: "center",
        backgroundSize: "contain",
      }}
      image={props.image}
    />
  );
  return (
    <Container>
      <Box sx={{ bgcolor: "background.paper", padding: { xs: 2, md: 5 } }}>
        <Typography variant="h5" gutterBottom>
          1. User Registration
        </Typography>
        <Typography variant="body1">
          To begin using application, users need to complete the registration
          process.
        </Typography>
        <Typography variant="body1">
          First, click on the button below.
        </Typography>
        <CustomCardMedia image="/screen1.png" />
        <Typography variant="body1">
          Next, locate the &quot;Register&quot; option at the bottom of the
          login form and click on it.
        </Typography>
        <CustomCardMedia image="/screen2.png" />
        <Typography variant="body1">
          You will then need to fill out the registration form.
        </Typography>
        <CustomCardMedia image="/screen3.png" />
        <Typography variant="body1">
          Here, you&apos;ll find an example of user-provided data. Click
          &quot;Register&quot; to finalize the registration process.
        </Typography>
        <CustomCardMedia image="/screen4.png" />

        <Typography variant="h5" gutterBottom marginTop={5}>
          2. Welcome Page
        </Typography>
        <Typography variant="body1" gutterBottom>
          Upon successful registration, users are welcomed to website. Here, an
          introduction to the project is provided along with an overview of core
          functionalities. Access your profile by clicking on the email address
          at the top right.
        </Typography>
        <CustomCardMedia image="/screen5.png" />

        <Typography variant="h5" gutterBottom marginTop={5}>
          3. Profile Page
        </Typography>
        <Typography variant="body1" gutterBottom>
          The profile page displays user-provided registration data, including a
          randomly generated Tax ID used for payment identification.
        </Typography>
        <CustomCardMedia image="/screen6.png" />

        <Typography variant="h5" gutterBottom marginTop={5}>
          4. Documents Page
        </Typography>
        <Typography variant="body1" gutterBottom>
          Navigate to the Documents page using the left-side navigation. Here,
          users can add documents confirming their revenues and expenses from
          the previous month. Simply click &quot;+ADD DOCUMENT&quot;, fill out
          the form, and view added documents in the table below.
        </Typography>
        <CustomCardMedia image="/screen10.png" />

        <Typography variant="h5" gutterBottom marginTop={5}>
          5. Declaration Page
        </Typography>
        <Typography variant="body1" gutterBottom>
          On this page, users input their total revenue and expenses for the
          previous month. Upon clicking &quot;ACCEPT AND SEND&quot;, the system
          calculates taxes based on the provided information.
        </Typography>
        <CustomCardMedia image="/screen8.png" />
        <Typography variant="body1" gutterBottom>
          Corrections can be made by selecting &quot;MAKE A CORRECTION&quot;.
        </Typography>
        <CustomCardMedia image="/screen9.png" />

        <Typography variant="h5" gutterBottom marginTop={5}>
          6. History Page
        </Typography>
        <Typography variant="body1" gutterBottom>
          Access historical tax return data on this page.
        </Typography>
        <CustomCardMedia image="/screen11.png" />

        <Typography variant="h5" gutterBottom marginTop={5}>
          7. Tax Beneficiaries Page
        </Typography>
        <Typography variant="body1" gutterBottom>
          View a list of available public institutions that can receive tax
          support. Users can rate their satisfaction monthly by clicking stars.
          Click &quot;VIEW MORE&quot; for detailed information.
        </Typography>
        <CustomCardMedia image="/screen12.png" />

        <Typography variant="h5" gutterBottom marginTop={5}>
          8. Tax Beneficiary Details Page
        </Typography>
        <Typography variant="body1" gutterBottom>
          Here, users can learn about the activities of a selected institution.
          Information includes the official website, board members, smart
          contract address (linked to etherscan), balance, and citizens&apos;
          average satisfaction ratings.
        </Typography>
        <CustomCardMedia image="/screen13.png" />
        <Typography variant="body1" gutterBottom marginTop={5}>
          Scrolling further down, users can also access charts displaying
          fabricated data illustrating cash flow and trends in citizens&apos;
          satisfaction.
        </Typography>
        <CustomCardMedia image="/screen14.png" />

        <Typography variant="h5" gutterBottom marginTop={5}>
          9. Payment page
        </Typography>
        <Typography variant="body1" gutterBottom>
          When accessing the payment page, the initial step involves selecting
          tax distribution, a one-time monthly process. Users can allocate
          values summing up to 100%. Once submitted, these allocations cannot be
          reversed until the start of the new month.
        </Typography>
        <CustomCardMedia image="/screen15.png" />
        <Typography variant="body1" gutterBottom>
          The page displays taxes to pay per institution, including destination
          name, contract address, calculated ETH values to be paid, already
          paid, and remaining amount.
        </Typography>
        <CustomCardMedia image="/screen16.png" />
        <Typography variant="body1" gutterBottom>
          To make payments, users need Metamask or can manually call the
          contract using provided data and Tax ID from the Profile page. Click
          &quot;PAY&quot; to initiate the transaction, confirm it in Metamask,
          and wait for processing.
        </Typography>
        <CustomCardMedia image="/screen17.png" />
        <Typography variant="body1" gutterBottom>
          Once processed, the &quot;PAY&quot; button is disabled, indicating
          successful payment. We need to repeat the process for all institutions
          that we support.
        </Typography>
        <CustomCardMedia image="/screen18.png" />
        <Typography variant="body1" gutterBottom>
          Registered transactions can be found on etherscan.
        </Typography>
        <CustomCardMedia image="/screen19.png" />
      </Box>
    </Container>
  );
};

export default UserManual;
