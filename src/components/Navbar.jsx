/** @format */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const history = useHistory();

  const toHome = () => {
    history.push("/");
  };

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography onClick={toHome} variant='h6' className={classes.title}>
            <span className='pointer'>Employee Manager</span>
          </Typography>
          <Button component={Link} color='inherit' to='/'>
            Home
          </Button>
          <Button component={Link} color='inherit' to='/dashboard'>
            Dashboard
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
