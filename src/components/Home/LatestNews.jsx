import React from "react";
import { NavLink } from "react-router-dom";

import { Typography, Grid, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import newsImage_1 from "../../assets/images/news/newsImage_1.jpg";
import newsImage_2 from "../../assets/images/news/newsImage_2.png";
import newsImage_3 from "../../assets/images/news/newsImage_3.jpg";

const useStyles = makeStyles((theme) => ({
  latestNewsRoot: {
    margin: "300px 24px 80px 24px",
  },

  newsCardsRoot: {
    margin: "50px 0px",
  },

  newsCard: {
    width: "400px",
  },

  newsCardImage: {
    width: "100%",
    height: "250px",
    marginBottom: theme.spacing(4),
  },

  newsCardTitle: {
    textDecoration: "none",
  },

  title: {
    "&:hover": {
      color: theme.palette.hover,
    },
  },
}));

let news = [
  {
    id: 1,
    title: "Tutorial: Beekeeping Plans, Supplies & Ideas",
    date: "March 19, 2020",
    image: newsImage_1,
  },
  {
    id: 2,
    title: "Spring Break for Millions of Bees and Their Keepers",
    date: "April 11, 2020",
    image: newsImage_2,
  },
  {
    id: 3,
    title: "Tutorial: Beekeeping for Beginners. Breeding Bees",
    date: "May 2, 2020",
    image: newsImage_3,
  },
];

const LatestNews = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.latestNewsRoot}>
      <Typography
        color="textPrimary"
        variant="h2"
        align="center"
        gutterBottom={true}
      >
        Latest News
      </Typography>

      <Grid className={classes.newsCardsRoot} container justify="space-between">
        {news.map((item) => (
          <Grid
            className={classes.newsCard}
            key={item.id}
            container
            direction="column"
            alignItems="center"
          >
            <NavLink to="/home">
              <Avatar
                className={classes.newsCardImage}
                src={item.image}
                variant="square"
              />
            </NavLink>
            <Typography variant="h6" color="textPrimary" gutterBottom={true}>
              {item.date}
            </Typography>
            <NavLink className={classes.newsCardTitle} to="/home">
              <Typography
                className={classes.title}
                variant="h5"
                color="textPrimary"
                align="center"
              >
                {item.title}
              </Typography>
            </NavLink>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default LatestNews;
