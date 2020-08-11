import React from "react";

import ShopNowButton from "../../Common/Buttons/ShopNow";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, DialogContent } from "@material-ui/core";

import emptyCartDecor from "../../../assets/images/decor/decor_6.png";

const useStyles = makeStyles((theme) => ({
  emptyCartRoot: {
    padding: "0",
  },

  emptyCartHeight: {
    height: "400px",
  },

  emptyCartElementsSpacing: {
    margin: theme.spacing(3),
  },

  emptyCartDecor: {
    width: theme.spacing(50),
    height: theme.spacing(50),
  },
}));

const EmptyCart = () => {
  const classes = useStyles();

  return (
    <DialogContent className={classes.emptyCartRoot}>
      <Grid className={classes.emptyCartHeight} container>
        <Grid
          item
          xs={10}
          container
          direction="column"
          justify="center"
          alignItems="center"
          style={{ marginTop: "-70px" }}
        >
          <Grid className={classes.emptyCartSpacing}>
            <Typography variant="h3" color="textPrimary">
              Cart is empty
            </Typography>
          </Grid>

          <Grid className={classes.emptyCartElementsSpacing}>
            <ShopNowButton />
          </Grid>
        </Grid>

        <Grid item xs={2} container justify="flex-end">
          <Avatar
            className={classes.emptyCartDecor}
            src={emptyCartDecor}
            variant="square"
          />
        </Grid>
      </Grid>
    </DialogContent>
  );
};

export default EmptyCart;
