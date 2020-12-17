import React from "react";
import "./counter.css";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import RemoveRoundedIcon from "@material-ui/icons/RemoveRounded";
import { IconButton } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import { deepPurple } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import grey from "@material-ui/core/colors/grey";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500]
    },
    secondary: {
      main: grey[50]
    }
  }
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  orange: {
    // color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.main
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500]
  }
}));

const Counter = ({ id, value, incrementCounter, decrementCounter }) => {
  //console.log(`value: ${value}, id: ${id}`);
  const classes = useStyles();

  return (
    <div className="counter-items">
      <ThemeProvider theme={theme}>
        <Avatar size="small" className={classes.orange}>
          {value}
        </Avatar>
      </ThemeProvider>
      <IconButton
        color="primary"
        size="small"
        className="counter-button counter"
        onClick={() => incrementCounter(id, value)}
      >
        <AddRoundedIcon />
      </IconButton>
      <IconButton
        color="primary"
        size="small"
        className="counter-button counter"
        onClick={() => decrementCounter(id, value)}
      >
        <RemoveRoundedIcon />
      </IconButton>
    </div>
  );
};

Counter.defaultProps = {
  counterdefaultValue: 0
};

export default Counter;
