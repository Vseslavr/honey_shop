import React from "react";

import { Grid, Avatar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import headerDecor from "../../../assets/images/header_nav_decor/header.png";

const useStyles = makeStyles(() => ({
  headerDecor: {
    width: "100%",
    height: "100%",
  },
}));

const HeaderDecoration = () => {
  const classes = useStyles();
  return (
    <Grid>
      <Avatar
        className={classes.headerDecor}
        src={headerDecor}
        variant="square"
      />
    </Grid>
  );
};

export default HeaderDecoration;
