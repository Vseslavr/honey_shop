import React from "react";

import WhyChooseUs from "./WhyChooseUs";
import OurProduct from "./OurProduct";
import LatestNews from "./LatestNews";
import ShopNowButton from "../Common/Buttons/ShopNow";
import HoneyFlowUpDecoration from "../Common/Decoration/HoneyFlowUpDecoration";
import HoneyFlowDownDecoration from "../Common/Decoration/HoneyFlowDownDecoration";

import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import mainBg from "../../assets/images/main_bg/main_bg_2.png";

const useStyles = makeStyles((theme) => ({
  homeBg: {
    backgroundImage: `url(${mainBg})`,
    backgroundColor: theme.palette.background.default,
    backgroundPosition: "right",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    // backgroundSize: "cover",
    // width: "100%",
    // height: "calc(100vh - 64px)",
  },

  mainTitleRoot: {
    padding: "0px 24px",
  },

  mainTitle: {
    maxWidth: "54%",
    minHeight: "18rem",
  },

  ourProductRoot: {
    backgroundColor: theme.palette.background.default,
    position: "relative",
    borderRadius: "0px 0px 50% 50% / 0px 0px 20% 20%",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Grid>
      <Grid
        className={classes.homeBg}
        container
        justify="center"
        alignItems="center"
      >
        <Grid className={classes.mainTitleRoot} container>
          <Grid className={classes.mainTitle} container>
            <Grid>
              <Typography color="textPrimary" variant="body2" align="center">
                No money no Honey
              </Typography>
              <Typography
                color="textPrimary"
                variant="subtitle2"
                align="center"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur incidunt officia facilis quas mollitia libero velit
                ab rem pariatur reprehenderit!
              </Typography>
            </Grid>

            <Grid container justify="center">
              <ShopNowButton />
            </Grid>
          </Grid>
        </Grid>

        <HoneyFlowUpDecoration />
      </Grid>

      <WhyChooseUs />

      <Grid className={classes.ourProductRoot}>
        <HoneyFlowDownDecoration />
        <OurProduct />
      </Grid>

      <LatestNews />
    </Grid>
  );
};

export default Home;
