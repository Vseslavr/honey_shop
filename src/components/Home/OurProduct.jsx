import React from "react";
import { NavLink } from "react-router-dom";

import { Typography, Grid, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import propolisIcon from "../../assets/images/our_product_icons/icon_1.png";
import topDecor from "../../assets/images/decor/decor_38.png";
import bottomDecorLarge from "../../assets/images/decor/decor_45.png";
import bottomDecorSmall from "../../assets/images/decor/decor_46.png";

const useStyles = makeStyles((theme) => ({
  ourProductRoot: {
    padding: "0px 24px",
    marginBottom: "30px",
    position: "relative",
    minHeight: "1000px",
  },

  blockTitleSpacing: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(8),
  },

  productItemRoot: {
    position: "relative",
    minWidth: "250px",
    marginBottom: "40px",
    padding: theme.spacing(2),
    marginTop: "100px",
    "&:hover": {
      marginTop: "100px",
    },
  },

  ourProductIcon: {
    position: "absolute",
    top: "-120px",
    left: "50%",
    transform: `translateX(${-50}%) translateY(${0}px)`,
    width: "140px",
    height: "121px",
    marginBottom: "15px",
    // "&:hover": {
    //   position: "absolute",
    //   top: "-130px",
    //   left: "50%",
    //   transform: `translateX(${-50}%) translateY(${0}px)`,
    // },
  },

  ourProductLink: {
    textDecoration: "none",
  },

  ourProductTitle: {
    "&:hover": {
      color: "#ff6f00",
    },
  },

  topDecor: {
    position: "absolute",
    top: "-40px",
    left: "-35px",
    width: "180px",
    height: "150px",
  },

  bottomDecorLarge: {
    position: "absolute",
    width: "755px",
    height: "495px",
    bottom: "0",
    left: "50%",
    transform: `translateX(${-54}%) translateY(${210}px)`,
  },

  bottomDecorSmall: {
    position: "absolute",
    bottom: "-45px",
    right: "0",
    width: "180px",
    height: "180px",
  },
}));

const OurProduct = () => {
  const classes = useStyles();

  const products = [
    {
      title: "Honey",
      description:
        "Lorem ipsum dolor sit amet, cons ectetur adipisicing elit, sed do.",
      icon: propolisIcon,
    },
    {
      title: "Honeycombs",
      description:
        "Lorem ipsum dolor sit amet, cons ectetur adipisicing elit, sed do.",
      icon: propolisIcon,
    },
    {
      title: "Propolis",
      description:
        "Lorem ipsum dolor sit amet, cons ectetur adipisicing elit, sed do.",
      icon: propolisIcon,
    },
    {
      title: "Beeswax",
      description:
        "Lorem ipsum dolor sit amet, cons ectetur adipisicing elit, sed do.",
      icon: propolisIcon,
    },
    {
      title: "Royal jelly",
      description:
        "Lorem ipsum dolor sit amet, cons ectetur adipisicing elit, sed do.",
      icon: propolisIcon,
    },
    {
      title: "Nectar",
      description:
        "Lorem ipsum dolor sit amet, cons ectetur adipisicing elit, sed do.",
      icon: propolisIcon,
    },
    {
      title: "Pollen",
      description:
        "Lorem ipsum dolor sit amet, cons ectetur adipisicing elit, sed do ectetur adipisicing elit sed do ectetur adipisicing elit lorem test text and some more text",
      icon: propolisIcon,
    },
    {
      title: "Bee bread",
      description:
        "Lorem ipsum dolor sit amet, cons ectetur adipisicing elit, sed do.",
      icon: propolisIcon,
    },
  ];

  return (
    <Grid className={classes.ourProductRoot}>
      <Grid className={classes.blockTitleSpacing}>
        <Typography color="textPrimary" variant="h2" align="center">
          Our Product
        </Typography>
      </Grid>

      <Grid container justify="center">
        {products.map((product) => (
          <Grid
            className={classes.productItemRoot}
            key={product.title}
            container
            direction="column"
            alignItems="center"
            item
            xs={3}
          >
            <NavLink className={classes.ourProductLink} to="/product">
              <Avatar
                className={classes.ourProductIcon}
                src={product.icon}
                variant="square"
              />
              <Typography
                className={classes.ourProductTitle}
                variant="h5"
                color="textPrimary"
                align="center"
                gutterBottom={true}
              >
                {product.title}
              </Typography>
            </NavLink>
            <Typography variant="subtitle1" color="textPrimary" align="center">
              {product.description}
            </Typography>
          </Grid>
        ))}
      </Grid>

      <Avatar
        className={classes.bottomDecorSmall}
        src={bottomDecorSmall}
        variant="square"
      />
      <Avatar
        className={classes.bottomDecorLarge}
        src={bottomDecorLarge}
        variant="square"
      />
      <Avatar className={classes.topDecor} src={topDecor} variant="square" />
    </Grid>
  );
};

export default OurProduct;
