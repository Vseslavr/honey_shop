import React from "react";

import { Typography, Grid, TextField, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles((theme) => ({
  socialIconsBlock: {
    maxWidth: "60%",
    marginTop: "30px",
  },

  socialIcon: {
    color: "#61422E",
    "&:hover": {
      color: theme.palette.hover,
    },
  },
}));

const FollowUs = () => {
  const classes = useStyles();
  return (
    <Grid item xs={3}>
      <Typography variant="h5" color="textPrimary" gutterBottom={true}>
        Follow us
      </Typography>
      <TextField
        id="subscribe-for-news"
        name="subscribe-for-news"
        label="Your email address"
        variant="outlined"
        size="small"
        color="secondary"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <MailOutlineIcon />
            </InputAdornment>
          ),
        }}
      />
      <Grid
        className={classes.socialIconsBlock}
        container
        justify="space-between"
      >
        <Link href="#">
          <FacebookIcon className={classes.socialIcon} />
        </Link>
        <Link href="#">
          <InstagramIcon className={classes.socialIcon} />
        </Link>
        <Link href="#">
          <TwitterIcon className={classes.socialIcon} />
        </Link>
        <Link href="#">
          <LinkedInIcon className={classes.socialIcon} />
        </Link>
        <Link href="#">
          <YouTubeIcon className={classes.socialIcon} />
        </Link>
      </Grid>
    </Grid>
  );
};

export default FollowUs;
