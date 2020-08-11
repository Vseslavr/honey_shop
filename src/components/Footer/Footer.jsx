import React from "react";

import Logo from "../Common/Logo/Logo";
import FooterNavMenu from "./FooterNavMenu";
import FollowUs from "./FollowUs";

import { Typography, Grid, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import footerDecor from "../../assets/images/footer/footer.png";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    minHeight: "330px",
    marginTop: "50px",
  },

  container: {
    margin: "0px 24px",
  },

  logo: {
    marginLeft: "120px",
  },

  footerDecor: {
    width: "100%",
    height: "100%",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Avatar
        className={classes.footerDecor}
        src={footerDecor}
        variant="square"
      />

      <Grid className={classes.container}>
        <Grid container direction="row">
          <Grid item xs={3}>
            <Grid className={classes.logo}>
              <Logo />
              <Typography variant="h5" color="textPrimary">
                No money no Honey
              </Typography>
            </Grid>
          </Grid>

          <FooterNavMenu />

          <Grid item xs={3}>
            <Typography variant="h5" color="textPrimary" gutterBottom={true}>
              Contacts
            </Typography>
            <Typography variant="h6" color="textPrimary" gutterBottom={true}>
              Address: Privet Drive 4, Little Whinging, Surrey, <br></br>{" "}
              England, Great Britain
            </Typography>
            <Typography variant="h6" color="textPrimary" gutterBottom={true}>
              Phone: +1 800 20 10 129
            </Typography>
            <Typography variant="h6" color="textPrimary" gutterBottom={true}>
              E-mail: test@mail.com
            </Typography>
          </Grid>

          <FollowUs />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
