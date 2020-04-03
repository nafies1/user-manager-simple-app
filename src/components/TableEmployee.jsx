import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { TableSortLabel, Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { setLocation, setOpenMaps } from "../store/actionCreator";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

export default function SimpleTable() {
  const classes = useStyles();
  const users = useSelector(state => state.users)
  const dispatch = useDispatch()
  const history = useHistory()
  const [data, setData] = useState([]);
  const [direction, setDirection] = useState("asc");
  const [sortedBy, setSortedBy] = useState("no");

  useEffect(() => {
    const newDatas = users.map((data, i) => {
      data.no = i + 1;
      return data;
    });
    setData(newDatas);
  }, [users]);
  const columns = ["no", "name", "age", "company", "gender"];

  const sortDirection = (upDown, orderBy) => {
    if (isNaN(data[0][orderBy])) {
      return (a, b) => {
        const A = a[orderBy].toUpperCase();
        const B = b[orderBy].toUpperCase();
        if (A < B) return upDown === "asc" ? 1 : -1;
        if (A > B) return upDown === "asc" ? -1 : 1;
        // A and B must be equal
        return 0;
      };
    } else {
      if (upDown === "desc") {
        return (a, b) => a[orderBy] - b[orderBy];
      } else {
        return (a, b) => b[orderBy] - a[orderBy];
      }
    }
  };

  const capitalize = word => {
    return word[0].toUpperCase() + word.slice(1);
  };

  const sortBy = (datas, orderBy) => {
    setSortedBy(orderBy);
    datas.sort(sortDirection(direction, sortedBy));
    direction === "asc" ? setDirection("desc") : setDirection("asc");
    setData(datas);
  };

  const viewLocation = (i) => {
    const {longitude, latitude} = users[i]   
    dispatch(setLocation({
      lat: latitude,
      lng: longitude
    }))
    dispatch(setOpenMaps(true))
  }

  const toDetails = (i) => {
    history.push(`/details/${i}`)
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            {columns.map((column, i) => {
              return (
                <TableCell key={i} onClick={() => sortBy(data, column)}>
                  {capitalize(column)}
                  <TableSortLabel
                    active={sortedBy === column ? true : false}
                    direction={direction}
                  />
                </TableCell>
              );
            })}
            <TableCell>Location</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((user, i) => (
            <TableRow key={i}>
              <TableCell>{user.no}</TableCell>
              <TableCell className="pointer" onClick={() => toDetails(i)}>{user.name}</TableCell>
              <TableCell>{user.age}</TableCell>
              <TableCell>{user.company}</TableCell>
              <TableCell>{user.gender}</TableCell>
              <TableCell><Button onClick={() => viewLocation(i)}>View Location</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
