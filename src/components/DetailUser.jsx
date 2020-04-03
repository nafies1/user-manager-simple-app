import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Chip } from "@material-ui/core";
import { useEffect } from "react";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

export default function DetailUser({ user }) {
  const classes = useStyles();
  const [tags, setTags] = useState([]);

  useEffect(() => {
    user && setTags(user.tags);
  }, [user]);

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'>
          <Typography className={classes.heading}>ACCOUNT </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <table>
            <tr>
              <td>GUID</td>
              <td>: {user.guid}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>: {user.email}</td>
            </tr>
            <tr>
              <td>Status</td>
              <td>: {user.isActive ? "Active" : "Inactive"}</td>
            </tr>
            <tr>
              <td>Balance</td>
              <td>: {user.balance}</td>
            </tr>
            <tr>
              <td>Registered</td>
              <td>: {user.registered}</td>
            </tr>
            <tr>
              <td>Tags</td>
              <td>
                :{" "}
                {tags
                  ? tags.map((tag, i) => (
                      <>
                        <Chip key={i} label={tag} variant='outlined' />{" "}
                      </>
                    ))
                  : ""}
              </td>
            </tr>
          </table>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'>
          <Typography className={classes.heading}>PROFILE </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <table>
            <tr>
              <td>Name</td>
              <td>: {user.name}</td>
            </tr>
            <tr>
              <td>Company</td>
              <td>: {user.company}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>: {user.gender}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>: {user.age}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>: {user.email}</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>: {user.phone}</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>: {user.address}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>: {user.age}</td>
            </tr>
            <tr>
              <td>Eye Color</td>
              <td>: {user.eyeColor}</td>
            </tr>
            <tr>
              <td>Favorite Fruit</td>
              <td>: {user.favoriteFruit}</td>
            </tr>
          </table>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
