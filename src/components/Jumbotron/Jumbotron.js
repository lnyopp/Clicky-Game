import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    height: 500,
    marginBottom: 20,
    background:"#A795BB"
  },
  title: {
    fontSize: 36,
    textAlign: "center",

  },
  middle: {
    fontSize: 20,
    textAlign: "center",

  },
  pos: {
    marginBottom: 12
  }
};

function SimpleCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title}>
          Clicky Game
        </Typography>
        <Typography className={classes.middle}>
          Click on an image to earn points, but don't click any more than once!
        </Typography>
      </CardContent>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);