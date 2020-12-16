import React from "react";
import "./counter.css";
import { Typography, Grid } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import RemoveIcon from "@material-ui/icons/Remove";
import RemoveRoundedIcon from "@material-ui/icons/RemoveRounded";
import { IconButton } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider  } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: grey[50],
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  orange: {
    // color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.main,
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

const Counter = ({ id, value, onAdd, onSubtract }) => {
  //console.log(`value: ${value}, id: ${id}`);
  const classes = useStyles();

  return (
    <div className="counter-items">
      {/* <h3>Counter Component</h3> */}
      {/* <Typography
        className="counter-label-typography"
        variant="caption"
        color="textSecondary"
      >
        <div>{value}</div>
      </Typography> */}
      <ThemeProvider theme={theme}>
        <Avatar size="small" className={classes.orange}>{value}</Avatar>
      </ThemeProvider>
      <IconButton
        color='primary'
        size="small"
        className="counter-button counter"
        onClick={() => onAdd(id, value)}
      >
        <AddRoundedIcon />
      </IconButton>
      <IconButton
        color='primary'
        size="small"
        className="counter-button counter"
        onClick={() => onSubtract(id, value)}
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
