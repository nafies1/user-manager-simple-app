import React, { useEffect, useState } from "react";
import DetailUser from '../components/DetailUser'
import Grid from "@material-ui/core/Grid";
import MapsFullDialog from "../components/MapsFullDialog";
import Paper from "@material-ui/core/Paper";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { makeStyles, Box, Chip, Button } from "@material-ui/core";
import { setLocation, setOpenMaps } from "../store/actionCreator";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "justify"
    // color: theme.palette.text.secondary
  }
}));

export default function Home() {
  const history = useHistory()
  const classes = useStyles();
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.isLoading);
  const users = useSelector(state => state.users);
  const [user, setUser] = useState({});
  const [friends, setFriends] = useState([]);
  let { i } = useParams();

  useEffect(() => {
    setUser(users[i]);
    if (user) setFriends(user.friends);
  }, [users, i, user, history]);

  const viewLocation = () => {
    const {longitude, latitude} = user 
    dispatch(setLocation({
      lat: latitude,
      lng: longitude
    }))
    dispatch(setOpenMaps(true))
  }

  return (
    <div className='App'>
      {isLoading ? (
        <h1 className="loading">Loading...</h1>
      ) : (
        <>
          <Grid container spacing={0}>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <Box display='flex' justifyContent='center'>
                  <img
                    className='App-logo'
                    src={user.picture}
                    alt='pp'
                  />
                </Box>
                <h4>About: </h4>
                <p>{user.about}</p>
                <h4>Friends: </h4>
                <div>
                  {friends &&
                    friends.map((friend, i) => {
                      return (
                        <>
                          <Chip
                            key={i}
                            label={friend.name}
                            variant='outlined'
                          />{" "}
                        </>
                      );
                    })}
                </div>
                <h4>Location: </h4>
                <Button variant='outlined' onClick={viewLocation}>View Location</Button>
              </Paper>
            </Grid>
            <Grid item xs={8}>
              <Paper className={classes.paper}>
                <div>
                  <h2>{user.name}</h2>
                  <h5>{user.company}</h5>
                </div>
                <p>"{user.greeting}"</p>
                <DetailUser user={user} />
              </Paper>
            </Grid>
          </Grid>
        </>
      )}

      <MapsFullDialog />
    </div>
  );
}
