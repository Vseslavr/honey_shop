import React from "react";

import {
  Typography,
  Grid,
  List,
  Avatar,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import whyUsDecorLarge from "../../assets/images/decor/decor_20.png";
import whyUsDecorSmall from "../../assets/images/decor/decor_22.png";
import listIcon_1 from "../../assets/images/decor/listDecor_1.png";
import listIcon_2 from "../../assets/images/decor/listDecor_2.png";
import listIcon_3 from "../../assets/images/decor/listDecor_3.png";
import listIcon_4 from "../../assets/images/decor/listDecor_4.png";

const useStyles = makeStyles((theme) => ({
  whyUsRoot: {
    padding: "0px 24px",
    marginBottom: "30px",
    position: "relative",
  },

  blockTitleSpacing: {
    padding: theme.spacing(5),
  },

  listRoot: {
    maxWidth: "50%",
  },

  listIcon: {
    width: "45px",
  },

  whyUsDecorLarge: {
    position: "absolute",
    width: "635px",
    height: "475px",
    top: "60px",
    right: "0",
  },

  whyUsDecorSmall: {
    position: "absolute",
    top: "0",
    left: "-45px",
    width: "280px",
    height: "140px",
  },
}));

const whyUsList = [
  {
    title: "100% Naturally",
    subtitle: "Our honey is never cooked, it is always raw",
    icon: listIcon_1,
  },
  {
    title: "Low prices",
    subtitle:
      "Lorem ipsum dolor sit amet, cons ectetur adipisicing elit, sed do.",
    icon: listIcon_2,
  },
  {
    title: "Deliver to home",
    subtitle:
      "Lorem ipsum dolor sit amet, cons ectetur adipisicing elit, sed do.",
    icon: listIcon_3,
  },
  {
    title: "Best quality in the market",
    subtitle:
      "Lorem ipsum dolor sit amet, cons ectetur adipisicing elit, sed do.",
    icon: listIcon_4,
  },
];

const WhyChooseUs = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.whyUsRoot}>
      <Grid className={classes.blockTitleSpacing}>
        <Typography variant="h2" color="textPrimary" align="center">
          Why Choose Us ?
        </Typography>
      </Grid>

      <List className={classes.listRoot}>
        {whyUsList.map((item) => (
          <ListItem key={item.title}>
            <ListItemIcon>
              <Avatar
                className={classes.listIcon}
                src={item.icon}
                variant="square"
              />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="h4" color="textPrimary">
                {item.title}
              </Typography>
              <Typography variant="subtitle2" color="textPrimary">
                {item.subtitle}
              </Typography>
            </ListItemText>
          </ListItem>
        ))}
      </List>

      <Avatar
        className={classes.whyUsDecorLarge}
        src={whyUsDecorLarge}
        variant="square"
      />
      <Avatar
        className={classes.whyUsDecorSmall}
        src={whyUsDecorSmall}
        variant="square"
      />
    </Grid>
  );
};

export default WhyChooseUs;
